import React from 'react';

const LoginButton: React.FC = () => {
    const handleLogin = () => {
        // Logic for handling Spotify login
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=YOUR_REDIRECT_URI&scope=YOUR_SCOPES';
    };

    return (
        <button onClick={handleLogin} className="login-button">
            Login with Spotify
        </button>
    );
};

export default LoginButton;