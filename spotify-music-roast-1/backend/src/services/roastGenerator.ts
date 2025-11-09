export function generateRoast(userInput: string): string {
    const roasts = [
        "Your taste in music is as questionable as your choice in friends.",
        "Listening to that song is like eating a soggy sandwich.",
        "If your playlist were a movie, it would be a straight-to-DVD release.",
        "Your music taste is like a black hole; it just sucks.",
        "That song is the musical equivalent of a participation trophy."
    ];

    const randomIndex = Math.floor(Math.random() * roasts.length);
    return `${userInput}, ${roasts[randomIndex]}`;
}