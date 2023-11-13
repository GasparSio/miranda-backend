import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import { usersController } from './controllers/usersController';
import { contactsController } from './controllers/contactsController';
import { roomsController } from './controllers/roomsController';
import { bookingsController } from './controllers/bookingsController';
import { infoController } from './controllers/infoController';
import { loginController } from './controllers/loginController';
import { authMiddleware } from './middleware/authMiddleware';
import mongoose from 'mongoose';

// const mongoUrl: string = process.env.MONGO_URL || '';
const ATLAS_SERVER: string = process.env.ATLAS_SERVER || '';
const URL_LOCAL: string = process.env.ATLAS_SERVER || '';
const MONGO_URL: string = process.env.MONGO_URL || '';
const databaseName: string = process.env.DB_NAME || "";

(async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            dbName: databaseName,
        })
        console.log('Connected to Mongo')
    } catch (error) {
        throw new Error(`${error}`)
     }
})()


export const app = express();

app.use(cors());
app.use(express.json());

// public routes & middleware
app.use("/", infoController);
app.use("/login", loginController);
app.use(authMiddleware);

// private routes
app.use("/bookings", bookingsController);
app.use("/rooms", roomsController);
app.use("/users", usersController);
app.use("/contacts", contactsController);


//ERROR HANDLER. No depende de ninguna ruta
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({error: true, message: 'Application error'});
});
