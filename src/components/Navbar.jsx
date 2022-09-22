import React from "react";
import { Link } from "react-router-dom";

import Logo from "../static/logo.jpg";

const Navbar = ({user}) => {

    const logout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
    }

    return (
        <div className="navbar-container">
            <img src={Logo} alt="logo" className="navbar-logo"/>
            {
                user ? (
            <ul className="navbar-links">
                <li className="user-avatar">
                    <img src={user.photos[0].value} alt="" className="avatar" />
                </li>
                <li className="navbar-link navbar-name">
                    {user.displayName}
                </li>
                <li className="navbar-link">
                    <Link to='/events' className="links">Events</Link>
                </li>
                <li className="navbar-link">
                    <Link to='/Agenda' className="links">Agenda</Link>
                </li>
                <li className="navbar-link" onClick={logout}>
                    Logout
                </li>
            </ul>
            ) : (<></>)
            }
        </div>
    )
}

export default Navbar;