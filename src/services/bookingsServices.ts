import { bookingsInterface } from "../interfaces/bookingsInterface";
import { bookings } from '../models/bookingsModel';


async function fetchAll() {
  const bookingsResult = await bookings.find()
  if (bookingsResult.length === 0){
    throw new Error("Error on finding bookings");
  } 
  return bookingsResult;
}

async function fetchOne(bookingId: string) {
  const bookingResult = await bookings.findById(bookingId);
  if (!bookingResult) {
    throw new Error("Error on finding a booking with this ID");
  } 
  return bookingResult;
}

async function deleteBooking(bookingId: string) {
  const bookingsResult = await bookings.findByIdAndDelete(bookingId)
  if (!bookingsResult) {
    throw new Error("Error on finding a booking with this ID");
  } 
  return bookingsResult;
}

async function updateOneBooking(bookingId: string, update: Partial<bookingsInterface>) {
	const bookingsResult = await bookings.findByIdAndUpdate(bookingId, update)
	if (!bookingsResult) {
    throw new Error('Booking not found')
  }
	return bookingsResult
}

async function createOneBooking(booking: bookingsInterface) {
  const bookingResult = await bookings.create(booking);
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