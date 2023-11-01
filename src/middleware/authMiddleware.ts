import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const userAgent: string = req.get('User-Agent') || '';
    if(!userAgent.includes('Chrome'))
        return res.status(400).json({error: true, message: 'You need to use Firefox'})
        next()
    return;
}