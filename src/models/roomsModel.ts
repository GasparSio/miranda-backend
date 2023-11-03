import mongoose from "mongoose";
import { roomsInterface } from "../interfaces/roomsInterface";

const roomsSchema = new mongoose.Schema<roomsInterface>({
    "photo": String,
    "roomNumber": String,
	"id": String,
	"bedType": String,
	"facilities": String,
	"price": String,
	"offerprice": String,
	"status": String,
})

export const Room = mongoose.model('Room', roomsSchema);