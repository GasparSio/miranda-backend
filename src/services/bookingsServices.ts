import { bookingsInterface } from "../interfaces/bookingsInterface";
import { Booking } from '../models/bookingsModel';


async function fetchAll() {
  const bookingsResult = await Booking.find()
  return bookingsResult;
}

async function fetchOne(bookingId: string) {
  const bookingResult = await Booking.findById(bookingId);
  if (!bookingResult) {
    throw new Error("Error on finding a booking with this ID");
  } 
  return bookingResult;
}

async function deleteBooking(bookingId: string) {
  const bookingsResult = await Booking.findByIdAndDelete(bookingId)
  if (!bookingsResult) {
    throw new Error("Error on finding a booking with this ID");
  } 
  return bookingsResult;
}

async function updateOneBooking(bookingId: string, update: Partial<bookingsInterface>) {
	const bookingsResult = await Booking.findByIdAndUpdate(bookingId, update)
	if (!bookingsResult) {
    throw new Error('Booking not found')
  }
	return bookingsResult
}

async function createOneBooking(booking: bookingsInterface) {
  const bookingResult = await Booking.create(booking);
  if (!bookingResult) {
    throw new Error('Error creating a new Booking');
  }
  return bookingResult;
}


export const bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};