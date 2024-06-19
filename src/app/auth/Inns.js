"use client"

import "@/app/styles/innskraning.css";
import { useState } from 'react';

function Inns() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validUsername = 'ja'; // Replace with your username
    const validPassword = 'ne'; // Replace with your password

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === validUsername && password === validPassword) {
            // Navigate to the next page
            window.location.href = '/gogn/nanargogn';
        } else {
            setErrorMessage('Rangt notendanafn eða lykilorð');
        }
    };

    return (
        <div className="login-container">
            <h2>Skráðu þig inn</h2>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Notendanafn:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Lykilorð:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
                {errorMessage && <p id="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
}
export default Inns; 