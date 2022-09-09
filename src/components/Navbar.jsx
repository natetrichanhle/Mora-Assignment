import React from "react";
import Logo from "./static/logo.jpg";
import "./static/styles.css"


const Navbar = () => {

    return (
        <div>
            <img src={Logo} alt="logo" className="navbar-logo"/>
        </div>
    )
}

export default Navbar;