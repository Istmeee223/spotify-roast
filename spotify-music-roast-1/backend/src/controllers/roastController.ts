import { Request, Response } from 'express';
import { generateRoast } from '../services/roastGenerator';

export class RoastController {
    public async createRoast(req: Request, res: Response): Promise<void> {
        const userInput = req.body.input;
        try {
            const roastMessage = generateRoast(userInput);
            res.status(200).json({ message: roastMessage });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while generating the roast.' });
        }
    }
}