import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export const fetchUserProfile = async (accessToken) => {
    try {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user profile: ' + error.message);
    }
};

export const fetchUserPlaylists = async (accessToken) => {
    try {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching user playlists: ' + error.message);
    }
};