const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const express = require('express');
const cors = require("cors");
const passportSetup = require("./passport")
const passport = require('passport');
const authRoute = require("./routes/auth")
const app = express();
const port = 8000;

require("./config/mongoose.config")

app.use(cookieSession({
        name: "session",
        keys: ["mora"],
        maxAge: 24 * 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(
        cors({
                origin: "http://localhost:3000",
                methods: "GET,POST,PUT,DELETE",
                credentials: true
        }));

app.use("/auth", authRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);
require("./routes/user.routes")(app);
// require("./routes/events.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));