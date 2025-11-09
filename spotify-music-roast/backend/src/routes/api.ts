import { Router } from 'express';
import { RoastController } from '../controllers/roastController';

const router = Router();
const roastController = new RoastController();

// Route to fetch user Spotify data
router.get('/spotify/user-data', roastController.getUserData);

// Route to generate a music taste roast
router.post('/spotify/generate-roast', roastController.generateRoast);

export default router;