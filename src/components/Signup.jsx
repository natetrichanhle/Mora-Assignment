import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../static/google.png"

const Signup = (props, {setUser}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [errors, setErrors] = useState(false);

    const googleAuth = () => {
		window.open(
			"http://localhost:8000/auth/google/callback",
			"_self"
		);
	};

    const registerUser = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/register", 
        JSON.stringify({
            username,
            email,
            password,
            confirmPassword
        }),
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        })
            .then(res => {
                setUser(res.data.user)
                navigate("");
                console.log(res)
            })
            .catch(err => console.log(err))
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
                            <form className="right" onSubmit={registerUser}>
                                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                                <input
                                    type="text"
                                    value={username} name="username"
                                    placeholder="Username"
                                    onChange={(e) => {setUsername(e.target.value)}} />
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                                <input
                                    type="password"
                                    value={password}
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    name=""
                                    placeholder="Confirm Password"
                                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                                />
                                <input
                                    type="submit" className="submit" placeholder="Log In"
                                />
                            </form>
                            <Link to="/" className="signup">
                                Have an account already? Log in here.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;