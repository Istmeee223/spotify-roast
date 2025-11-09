import React from 'react';

interface RoastResultProps {
    roast: string;
    userData: {
        topTracks: string[];
        topArtists: string[];
    };
}

const RoastResult: React.FC<RoastResultProps> = ({ roast, userData }) => {
    return (
        <div className="roast-result">
            <h2>Your Music Taste Roast</h2>
            <p>{roast}</p>
            <h3>Your Top Tracks:</h3>
            <ul>
                {userData.topTracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
            <h3>Your Top Artists:</h3>
            <ul>
                {userData.topArtists.map((artist, index) => (
                    <li key={index}>{artist}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoastResult;