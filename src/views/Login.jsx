import React from "react";
import Navbar from "../components/Navbar";

import Google from "../static/google.png"
import Github from "../static/github.png"
import Facebook from "../static/facebook.png"

const Login = () => {

    return (
        <div>
            <div className="container">
                <div className="login-header-container">
                    <h1 className="login-header"><span className="blue">Mora</span></h1>
                    <h1 className="login-header">Public Health Days</h1>
                </div>
                <div className="login">
                    <div className="wrapper">
                        <div className="left">
                            <div className="loginButton google">
                                <img src={Google} alt="" className="icon" />
                                Google
                            </div>
                            <div className="loginButton facebook">
                                <img src={Facebook} alt="" className="icon" />
                                Facebook
                            </div>
                            <div className="loginButton github">
                                <img src={Github} alt="" className="icon" />
                                Github
                            </div>
                        </div>
                        <div className="center">
                            <div className="line" />
                            <div className="or">OR</div>
                        </div>
                        <div className="right">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Password" />
                            <button className="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;