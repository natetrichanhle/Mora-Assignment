import React from "react";
import { Link } from "react-router-dom";

import Logo from "../static/logo.jpg";

const Navbar = ({user}) => {

    return (
        <div className="navbar-container">
            <img src={Logo} alt="logo" className="navbar-logo"/>
            {
                user ? (
            <ul className="navbar-links">
                <li>
                    <Link to='/events' className="navbar-link">Events</Link>
                </li>
                <li>
                    <Link to='/Agenda' className="navbar-link">Agenda</Link>
                </li>
                <li>
                    <Link to='/' className="navbar-link">Logout</Link>
                </li>
            </ul>
            ) : (<Link></Link>)
            }
        </div>
    )
}

export default Navbar;