import { Request, Response, Router } from 'express';
import { usersServices } from '../services/usersServices';
import { usersInterface } from '../interfaces/usersInterface';

export const usersController = Router();

usersController.get('/', async (_req: Request, res: Response) => {
    try {
        const usersResult = await usersServices.fetchAll()
        res.json(usersResult)
    } catch (error) {
        res.status(500).json(`${error}`);    
    }
})

usersController.get("/:userId", async (req: Request, res: Response) => {
    try {
      const usersResult = await usersServices.fetchOne(req.params.userId);
        res.json(usersResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);

usersController.delete("/:userId", async (req: Request, res: Response) => {
    try {
      const usersResult = await usersServices.delete(req.params.userId);
      res.json(usersResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);

usersController.put("/:userId", async (req: Request,res: Response) => {
    try {
      const usersResult = await usersServices.updateOneUser(req.params.userId, req.body);
      res.json(usersResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);

usersController.post("/", async (req: Request<usersInterface>, res: Response) => {
    try {
      const usersResult = await usersServices.createOneUser(req.body);
      res.json(usersResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);
