import { NextFunction, Request, Response, Router } from 'express';
import { authService } from '../services/loginServices';

export const loginController = Router();

loginController.post("/", async (req: Request<{ username: string; email: string }>, res: Response, next: NextFunction) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const result = await authService.login(username, email);
        res.json(result);
    } catch (error) {
        next(error)
    }
  }
);