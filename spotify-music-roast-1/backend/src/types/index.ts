export type Roast = {
    id: string;
    message: string;
    createdAt: Date;
};

export type User = {
    id: string;
    name: string;
    spotifyId: string;
};

export type Playlist = {
    id: string;
    name: string;
    tracks: Track[];
};

export type Track = {
    id: string;
    name: string;
    artist: string;
    album: string;
};