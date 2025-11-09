import { useState, useEffect } from 'react';

const useSpotify = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const response = await fetch('/api/auth/spotify');
                if (!response.ok) {
                    throw new Error('Failed to fetch access token');
                }
                const data = await response.json();
                setAccessToken(data.accessToken);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAccessToken();
    }, []);

    return { accessToken, error, loading };
};

export default useSpotify;