import { Router } from 'express';
import RoastController from '../controllers/roastController';

const router = Router();
const roastController = new RoastController();

export const setRoutes = (app) => {
    app.use('/api', router);
    router.post('/roast', roastController.generateRoast);
    // Add more routes as needed
};