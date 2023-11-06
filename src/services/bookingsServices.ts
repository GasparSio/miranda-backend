import bookingsData from '../data/bookingsData.json';
import { bookingsInterface } from "../interfaces/bookingsInterface";
import { SelectQuery } from '../util/connecionSQL';

export const bookings = bookingsData

async function fetchAll() {
  const result = await SelectQuery(
    'select b.*, r.room_number, r.room_type, GROUP_CONCAT(p.photos) AS all_photos FROM booking b LEFT JOIN room r ON b.room_id = r.id LEFT JOIN photo p ON r.id = p.room_id GROUP BY b.id;')
  return result;
}

async function fetchOne(bookingId: string) {
  const result = await SelectQuery(
    `select b.*, r.room_number, r.room_type, GROUP_CONCAT(p.photos) AS all_photos FROM booking b LEFT JOIN room r ON b.room_id = r.id LEFT JOIN photo p ON r.id = p.room_id WHERE b.id = ${bookingId} GROUP BY b.id;`)
  return result;
}

async function deleteBooking(bookingId: string) {
  const result = await SelectQuery(
    `delete from booking where id = ${bookingId};`)
  return result;
}

async function updateOneBooking(bookingId: string, update: Partial<bookingsInterface>) {
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