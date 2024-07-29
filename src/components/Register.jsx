import React, { useState } from 'react';
import './Register.css';

function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.elements.password.value;

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
        } else {
            setErrorMessage('');
            setIsSubmitted(true);
            // Add your register logic here
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {isSubmitted && !errorMessage && <div className="popup-message">Registered successfully</div>}
        </div>
    );
}

export default Register;