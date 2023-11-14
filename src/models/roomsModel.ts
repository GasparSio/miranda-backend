import mongoose from "mongoose";
import { roomsInterface } from "../interfaces/roomsInterface";

const roomsSchema = new mongoose.Schema<roomsInterface>({
    "photo": String,
    "roomNumber": String,
	"bedType": String,
	"facilities": [String],
	"price": String,
	"status": String,
})

export const Room = mongoose.model('Room', roomsSchema);