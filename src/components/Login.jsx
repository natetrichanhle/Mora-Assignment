import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../static/google.png"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const googleAuth = () => {
		window.open(
			"http://localhost:8000/auth/google/callback",
			"_self"
		);
	};

    const loginUser = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
            withCredentials: true,
        })
        const data = await response.json();
        console.log(data)
    }

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
                            <div className="loginButton google" onClick={googleAuth}>
                                <img src={Google} alt="" className="icon" />
                                Google
                            </div>
                        </div>
                        <div className="center">
                            <div className="line" />
                            <div className="or">OR</div>
                        </div>
                        <div className="right">
                            <form className="right" onSubmit={loginUser}>
                                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                                <input
                                    type="text"
                                    value={email} name="email"
                                    placeholder="Email"
                                    onChange={(e) => {setEmail(e.target.value)}} />
                                <input
                                    type="password"
                                    value={password}
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                                <input
                                    type="submit" className="submit" placeholder="Log In"
                                />
                            </form>
                            <Link to="/signup" className="signup">
                                Don't have an account? Sign up here.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;