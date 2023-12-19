import { NextFunction, Request, Response, Router } from 'express';
import { authService } from '../services/loginServices';

export const loginController = Router();

loginController.post("/", async (req: Request<{ email: string; password: string }>, res: Response, next: NextFunction) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const result = await authService.login(email, password);
        res.json(result);
    } catch (error) {
        next(error)
    }
  }
);