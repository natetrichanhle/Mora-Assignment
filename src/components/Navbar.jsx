import React from "react";
import { Link } from "react-router-dom";

import Logo from "./static/logo.jpg";
import "./static/styles.css"


const Navbar = () => {

    return (
        <div className="navbar-container">
            <img src={Logo} alt="logo" className="navbar-logo"/>
            <div className="navbar-links">
                <Link to='/events' className="navbar-link">Events</Link>
                <Link to='/Agenda' className="navbar-link">Agenda</Link>
            </div>
        </div>
    )
}

export default Navbar;