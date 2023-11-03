import { Request, Response, Router, NextFunction } from 'express';
import { usersServices } from '../services/usersServices';
import { usersInterface } from '../interfaces/usersInterface';

export const usersController = Router();

usersController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const usersResult = await usersServices.fetchAll()
        res.json(usersResult)
    } catch (error) {
        next(error)   
    }
})

usersController.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersResult = await usersServices.fetchOne(req.params.userId);
        res.json(usersResult);
    } catch (error) {
      next(error)
    }
  }
);

usersController.delete("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersResult = await usersServices.delete(req.params.userId);
      res.json(usersResult);
    } catch (error) {
      next(error)
    }
  }
);

usersController.put("/:userId", async (req: Request,res: Response, next: NextFunction) => {
    try {
      const usersResult = await usersServices.updateOneUser(req.params.userId, req.body);
      res.json(usersResult);
    } catch (error) {
      next(error)
    }
  }
);

usersController.post("/", async (req: Request<usersInterface>, res: Response, next: NextFunction) => {
    try {
      const usersResult = await usersServices.createOneUser(req.body);
      res.json(usersResult);
    } catch (error) {
      next(error)
    }
  }
);
