import { NextFunction, Request, Response, Router } from "express";
import { infoServices } from '../services/infoServices';

export const infoController = Router();

infoController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const infoResult = await infoServices.getApiInfo()
        res.json(infoResult)
    } catch (error) {
        next(error)
    }
})