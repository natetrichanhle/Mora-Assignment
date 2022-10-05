import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../static/logo.jpg";

const Navbar = (userDetails) => {
    const navigate = useNavigate();
    const user = userDetails.user;
    const logout = () => {
		window.open("http://localhost:8000/auth/logout", "_self");
	};

    const userLogout = () => {
        axios.get("http://localhost:8000/api/logout", {withCredentials: true})
            .then(res => {
                navigate("/");
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar-container">
            <img src={Logo} alt="logo" className="navbar-logo"/>
            {
                user ? (
            <ul className="navbar-links">
                <li className="navbar-link navbar-name">
                    {user.name}
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
                <li className="navbar-link" onClick={userLogout}>
                    Logout2
                </li>
            </ul>
            ) : (<></>)
            }
        </div>
    )
}

export default Navbar;