import { authService } from '../services/loginServices';
import { NextFunction, Request, Response } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.get('token') || '';
        authService.verifyJWT(token)
        return next();
    } catch (error) {
        return res.status(401).json('Error: Incorrect Token')
    }
}