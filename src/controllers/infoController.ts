import { Request, Response, Router } from "express";
import { infoServices } from '../services/infoServices';

export const infoController = Router();

infoController.get('/', async (_req: Request, res: Response) => {
    try {
        const infoResult = await infoServices.getApiInfo()
        res.json(infoResult)
    } catch (error) {
        res.status(500).json(`${error}`);
    }
})