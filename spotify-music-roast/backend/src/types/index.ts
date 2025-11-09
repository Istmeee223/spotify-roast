export interface User {
    id: string;
    displayName: string;
    email: string;
    topTracks: Track[];
    topArtists: Artist[];
}

export interface Track {
    id: string;
    name: string;
    artist: string;
    album: string;
    popularity: number;
}

export interface Artist {
    id: string;
    name: string;
    genres: string[];
}

export interface Roast {
    message: string;
    severity: 'mild' | 'medium' | 'savage';
}