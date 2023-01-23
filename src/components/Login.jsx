import React, { useState } from "react";
import './Login.css'

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-card">
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <input
                    spellCheck={false}
                    className="control"
                    type="text"
                    placeholder="Username"
                />
                <div className="password">
                    <input
                        spellCheck={false}
                        className="control"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        className="toggle"
                        type="button"
                        onClick={togglePassword}
                    ></button>
                </div>
                <button className="control" type="button">LOGIN</button>
            </form>
        </div>
    )
};

export default Login;
