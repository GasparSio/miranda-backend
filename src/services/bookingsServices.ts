import bookingsData from '../data/bookingsData.json';
import { bookingsInterface } from "../interfaces/bookingsInterface";

export const bookings = bookingsData

async function fetchAll() {
  const bookingsResult = await bookings
  if (bookingsResult.length === 0){
    throw new Error("Error on finding bookings");
  } 
  return bookingsResult;
}

async function fetchOne(bookingId: string) {
  const bookingsResult = await bookings.filter((booking) => booking.id === bookingId);
  if (bookingsResult.length === 0) {
    throw new Error("Error on finding a booking with this ID");
  } 
  return bookingsResult;
}

async function deleteBooking(bookingId: string) {
  // const id = userId.toString()
const currentBookingsIndex = bookings.findIndex((booking) => booking.id === bookingId)
  if (currentBookingsIndex === -1) {
    throw new Error('Booking not found')
  }else {
    const result = await bookings.splice(currentBookingsIndex, 1)
    return result
}
}

async function updateOneBooking(bookingId: string, update: Partial<bookingsInterface>) {
    // const id = userId.toString()
	const currentBookingIndex = bookings.findIndex((booking) => booking.id === bookingId)
	if (currentBookingIndex === -1) throw new Error('Booking not found')
	const result = (bookings[currentBookingIndex] = {
		...bookings[currentBookingIndex],
		...update,
	})
	return result
}

async function createOneBooking(booking: bookingsInterface) {
  const initialUsersLength = bookings.length;
  await bookings.push(booking);
  if (bookings.length === initialUsersLength) {
    throw new Error('Error creating a new Booking');
  }
  return booking;
}


export const bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};