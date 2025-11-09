import { UserMusicData } from '../types';

export function generateRoast(userMusicData: UserMusicData): string {
    const { topTracks, topArtists } = userMusicData;

    let roast = "Your music taste is like a buffet of bad decisions. ";

    if (topTracks.length === 0) {
        roast += "It's like you haven't even tried to listen to anything good.";
    } else {
        roast += `Your top track is "${topTracks[0].name}" by ${topTracks[0].artist}. `;
        roast += `I hope you enjoy listening to that on repeat while your friends question your taste. `;
    }

    if (topArtists.length > 0) {
        roast += `And let's not forget your top artist: ${topArtists[0].name}. `;
        roast += `I guess you really enjoy ${topArtists[0].genre}... or maybe you just haven't discovered anything else.`;
    }

    roast += " Keep it up, and you might just become the punchline of your own playlist.";

    return roast;
}