import React, { useState, useEffect } from 'react';
import { LoginButton } from './components/LoginButton';
import { RoastResult } from './components/RoastResult';
import { Spinner } from './components/Spinner';
import { useSpotify } from './hooks/useSpotify';
import './styles/app.css';

const App: React.FC = () => {
    const { userData, loading, error } = useSpotify();
    const [roast, setRoast] = useState<string | null>(null);

    useEffect(() => {
        if (userData) {
            // Call the backend to get the roast based on user data
            fetch('/api/roast', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userData }),
            })
                .then(response => response.json())
                .then(data => setRoast(data.roast))
                .catch(err => console.error('Error fetching roast:', err));
        }
    }, [userData]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error loading user data. Please try again.</div>;
    }

    return (
        <div className="app">
            <h1>Welcome to the Music Taste Roast!</h1>
            {!userData ? (
                <LoginButton />
            ) : (
                <RoastResult roast={roast} />
            )}
        </div>
    );
};

export default App;