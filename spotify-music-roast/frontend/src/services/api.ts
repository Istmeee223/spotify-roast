import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchUserData = async (accessToken) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetchRoastResult = async (accessToken) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/roast`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching roast result:', error);
        throw error;
    }
};