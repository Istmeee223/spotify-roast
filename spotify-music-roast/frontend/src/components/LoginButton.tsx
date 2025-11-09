import React from 'react';

const LoginButton: React.FC = () => {
    const handleLogin = () => {
        // Redirect to Spotify authentication
        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/spotify`;
    };

    return (
        <button onClick={handleLogin} className="login-button">
            Login with Spotify
        </button>
    );
};

export default LoginButton;