import { useEffect, useState } from 'react';
import { fetchUserData, fetchRoast } from '../services/api';

const useSpotify = () => {
    const [userData, setUserData] = useState(null);
    const [roast, setRoast] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
                const roastResult = await fetchRoast(data);
                setRoast(roastResult);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, []);

    return { userData, roast, loading, error };
};

export default useSpotify;