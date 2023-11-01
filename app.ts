import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import { usersController } from './src/controllers/usersController';
import { contactsController } from './src/controllers/contactsController';
import { roomsController } from './src/controllers/roomsController';
import { bookingsController } from './src/controllers/bookingsController';
import { infoController } from './src/controllers/infoController';
// import { authMiddleware } from './src/middleware/authMiddleware';

export const app = express();

app.use(cors());
app.use(express.json());

// public routes & middleware
app.use("/", infoController);
// app.use("/login", loginController);
// app.use(authMiddleware);

// private routes
app.use("/bookings", bookingsController);
app.use("/rooms", roomsController);
app.use("/users", usersController);
app.use("/contacts", contactsController);




//No depende de ninguna ruta
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({error: true, message: 'Application error'});
});
