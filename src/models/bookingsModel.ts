import mongoose from 'mongoose';
import { bookingsInterface } from '../interfaces/bookingsInterface';

const bookingsSchema = new mongoose.Schema<bookingsInterface>({
    "id": String,
	"guest": String,
	"phone_number": String,
	"order_date": String,
	"check_in": String,
	"check_out": String,
	"special_request": String,
	"room_type": String,
	"room_number": String,
	"status": String,
	"photos": String
})

export const Booking = mongoose.model('Booking', bookingsSchema);

