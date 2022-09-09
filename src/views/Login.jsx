import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="login-header-container">
                    <h1 className="login-header"><span className="blue">Mora</span></h1>
                    <h1 className="login-header">Public Health Days</h1>
                </div>
            </div>
        </div>
    )
}

export default Login;