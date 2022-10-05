import React, { useEffect, useState } from "react";
import {
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import axios from "axios";
import "./static/styles.css"

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Events from "./views/Events";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = "http://localhost:8000/auth/login/success";
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  useEffect (() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials: true})
        .then(res => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Navigate to="/events" /> : <Login setUser={setUser}/>} />
        <Route 
          exact
          path="/signup"
          element={<Signup setUser={setUser}/>}
        />
        <Route
          exact
          path="/events"
          element={user ? <Events /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
