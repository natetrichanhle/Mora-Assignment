import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import "./static/styles.css"

import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Events from "./views/Events";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response => {
        if(response.status === 200) return response.json();
        throw new Error("authentication has failed!")
      }).then(resObject => {
          setUser(resObject.user);
      }).catch((err) => {
        console.log(err);
      })
    }
    getUser();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/events" /> : <Login />}/>
          <Route path="/events" element={user ? <Events /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
