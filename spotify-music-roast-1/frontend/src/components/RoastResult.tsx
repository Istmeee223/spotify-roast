import React from 'react';

interface RoastResultProps {
    roastMessage: string;
}

const RoastResult: React.FC<RoastResultProps> = ({ roastMessage }) => {
    return (
        <div className="roast-result">
            <h2>Your Roast:</h2>
            <p>{roastMessage}</p>
        </div>
    );
};

export default RoastResult;