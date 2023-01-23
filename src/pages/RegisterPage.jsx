import './RegisterPage.css'
import React, { useState, useRef } from "react";

const RegisterPage = () => {
    const usernames = ["david", "david1", "david2"];
    const [spinnerClass, setSpinnerClass] = useState("spinner");
    const [alertClass, setAlertClass] = useState("alert");
    const spinnerRef = useRef(null);
    const alertRef = useRef(null);
    let timeoutId = null;

    const updateUi = (value) => {
        console.log("value", value);
        setSpinnerClass("spinner");

        const usernameExists = usernames.some((u) => u === value);
        console.log("usernames", usernames);
        console.log("usernameExists", usernameExists);

        if (usernameExists) {
            setAlertClass("alert visible");
        } else {
            setAlertClass("alert");
        }
    };

    const handleStartTyping = () => {
        setSpinnerClass("spinner visible");
    };

    const handleChange = (event) => {
        const { value } = event.target;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => updateUi(value), 500);
    };

    return (
        <div className="login-card">
            <h2>Sign Up</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <div className="username">
                    <input
                        spellCheck={false}
                        className="control"
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        onKeyDown={handleStartTyping}
                    />
                    <div ref={spinnerRef} className={spinnerClass} id="spinner"></div>
                </div>
                <div ref={alertRef} className={alertClass} id="alert">Username already exists</div>
                <input
                    spellCheck={false}
                    className="control"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                <button className="control" type="button">SIGN UP</button>
            </form>
        </div>
    )
};

export default RegisterPage;
