import React, { useState } from 'react';
import Hero2 from '../components/Hero2';
import img2 from '../assets/img/li.jpeg';
import '../css/login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [wingPointId, setWingPointId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !wingPointId) {
            setErrorMessage('Both fields are required.');
            return;
        }

        setErrorMessage('');
        console.log('Email:', email);
        console.log('Wing Point ID:', wingPointId);
    };

    return (
      <>
        <Hero2 pageName="LOGIN" image={img2} />

        <div className="login-page-container">
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Member Login</h2>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="input-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="wingPointId">Wing Point ID:</label>
                        <input
                            type="text"
                            id="wingPointId"
                            value={wingPointId}
                            onChange={(e) => setWingPointId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                    <p className="forgot-password">Forgot Password?</p>
                </form>
            </div>
            <div className="rewards-section">
                <div className="rewards-header">
                    <h2>WING POINTS</h2>
                </div>
                <p>AirRewards, the most generous loyalty program in the region, offers you:</p>
                <ul>
                    <li>Earn up to 10% cash back as points on all your spends.</li>
                    <li>Redemption on any flight anytime with no restrictions.</li>
                    <li>Don't have enough points? Use cash for the rest!</li>
                    <li>Earn and share points with family accounts.</li>
                </ul>
            </div>
        </div>
      </>
    );
};

export default LoginPage;
