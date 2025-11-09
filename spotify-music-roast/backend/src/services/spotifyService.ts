import axios from 'axios';
import { SpotifyApiResponse, UserTopTracks, UserTopArtists } from '../types';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export const getUserTopTracks = async (accessToken: string): Promise<UserTopTracks> => {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/tracks`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};

export const getUserTopArtists = async (accessToken: string): Promise<UserTopArtists> => {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/top/artists`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};