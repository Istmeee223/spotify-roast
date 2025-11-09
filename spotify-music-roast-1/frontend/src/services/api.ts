import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const generateRoast = async (userInput) => {
    try {
        const response = await axios.post(`${API_URL}/generate-roast`, { input: userInput });
        return response.data;
    } catch (error) {
        console.error('Error generating roast:', error);
        throw error;
    }
};

export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};