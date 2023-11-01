import { authService } from '../services/loginServices';
import { NextFunction, Request, Response } from 'express'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    let token = req.get('token') || '';
    try {
        authService.verifyJWT(token)
        return next();
    } catch (error) {
        return res.status(401).json('Error: Incorrect Token')
    }
}