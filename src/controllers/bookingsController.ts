import { NextFunction, Request, Response, Router } from 'express';
import { bookingsServices } from '../services/bookingsServices';
import { bookingsInterface } from '../interfaces/bookingsInterface';

export const bookingsController = Router();

bookingsController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const bookingsResult = await bookingsServices.fetchAll()
        res.json(bookingsResult)
    } catch (error) {
        next(error)  
    }
})

bookingsController.get("/:bookingId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingResult = await bookingsServices.fetchOne(req.params.bookingId);
        res.json(bookingResult);
    } catch (error) {
      next(error) 
    }
  }
);

bookingsController.delete("/:bookingId", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingResult = await bookingsServices.delete(req.params.bookingId);
      res.json(bookingResult);
    } catch (error) {
      next(error) 
    }
  }
);

bookingsController.put("/:bookingId", async (req: Request,res: Response, next: NextFunction) => {
    try {
      const bookingResult = await bookingsServices.updateOneBooking(req.params.bookingId, req.body);
      res.json(bookingResult);
    } catch (error) {
      next(error) 
    }
  }
);

bookingsController.post("/", async (req: Request<bookingsInterface>, res: Response, next: NextFunction) => {
    try {
      const bookingsResult = await bookingsServices.createOneBooking(req.body);
      res.json(bookingsResult);
    } catch (error) {
      next(error) 
    }
  }
);
