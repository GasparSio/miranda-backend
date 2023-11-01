import { Request, Response, Router } from 'express';
import { roomsInterface } from '../interfaces/roomsInterface';
import { roomsServices } from '../services/roomsServices';

export const roomsController = Router();

roomsController.get('/', async (_req: Request, res: Response) => {
    try {
        const roomsResult = await roomsServices.fetchAll()
        res.json(roomsResult)
    } catch (error) {
        res.status(500).json(`${error}`);    
    }
})

roomsController.get("/:roomId", async (req: Request, res: Response) => {
    try {
      const roomResult = await roomsServices.fetchOne(req.params.roomId);
        res.json(roomResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);

roomsController.delete("/:roomId", async (req: Request, res: Response) => {
    try {
      const roomsResult = await roomsServices.delete(req.params.roomId);
      res.json(roomsResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);

roomsController.post("/", async (req: Request<roomsInterface>, res: Response) => {
  try {
    const roomsResult = await roomsServices.createOneRoom(req.body);
    res.json(roomsResult);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
}
);

roomsController.put("/:roomId", async (req: Request,res: Response) => {
    try {
      const roomsResult = await roomsServices.updateOneRoom(req.params.roomId, req.body);
      res.json(roomsResult);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  }
);


