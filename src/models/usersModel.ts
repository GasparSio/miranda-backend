import mongoose from "mongoose";
import { usersInterface } from "../interfaces/usersInterface";

const usersSchema = new mongoose.Schema<usersInterface>({
    "full_name": { type: String, required: true },
    "email": { type: String, required: true },
    "photo": { type: String },
    "start_date": { type: String, required: true },
    "description": { type: String, required: true },
    "phone_number": { type: String, required: true },
    "password": { type: String, required: true },
    "status": { type: String, required: true },
})

export const User = mongoose.model('User', usersSchema);
