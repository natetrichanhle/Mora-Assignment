import React from "react";
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
  const user = true;

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
