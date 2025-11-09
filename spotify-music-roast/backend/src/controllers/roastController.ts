import { Request, Response } from 'express';
import { getUserTopTracks, getUserTopArtists } from '../services/spotifyService';
import { generateRoast } from '../services/roastGenerator';

class RoastController {
    async analyzeMusicTaste(req: Request, res: Response) {
        const userId = req.params.userId;

        try {
            const topTracks = await getUserTopTracks(userId);
            const topArtists = await getUserTopArtists(userId);

            const roast = generateRoast(topTracks, topArtists);

            res.status(200).json({
                success: true,
                roast,
            });
        } catch (error) {
            console.error('Error analyzing music taste:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to analyze music taste.',
            });
        }
    }
}

export default new RoastController();