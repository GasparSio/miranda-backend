import bookingsData from '../data/bookingsData.json';
import { bookingsInterface } from "../interfaces/bookingsInterface";
import { SelectQuery } from '../util/connecionSQL';

export const bookings = bookingsData

async function fetchAll() {
    const query = `
    select b.*, r.room_number, r.room_type, 
    GROUP_CONCAT(p.photos) AS all_photos 
    FROM booking b 
    LEFT JOIN room r 
    ON b.room_id = r.id 
    LEFT JOIN photo p ON r.id = p.room_id GROUP BY b.id;`
    const values: any[] = [];
    const result = await SelectQuery(query, values)
    return result;
}

async function fetchOne(bookingId: string) {
    const query = `
    select b.*, r.room_number, r.room_type, 
    GROUP_CONCAT(p.photos) AS all_photos 
    FROM booking b 
    LEFT JOIN room r 
    ON b.room_id = r.id 
    LEFT JOIN photo p ON r.id = p.room_id 
    WHERE b.id =? GROUP BY b.id;`
    const values = [bookingId]
    const result = await SelectQuery(query, values)
    return result;
}

async function deleteBooking(bookingId: string) {
    const query = `delete from booking where id =?;`
    const values = [bookingId]
    const result = await SelectQuery(query, values)
    return result;
}

async function createOneBooking(booking: bookingsInterface) {
  const query =
  `INSERT INTO booking 
  (guest, phone_number, order_date, check_in, check_out, special_request, status, room_id) 
  values 
  (?, ?, ?, ?, ?, ?, ?, ?);`
  const values = [
    booking.guest,
    booking.phone_number,
    booking.order_date,
    booking.check_in,
    booking.check_out,
    booking.special_request,
    booking.status,
    booking.room_id
  ]
  const result = await SelectQuery(query, values)
  return result;
}

async function updateOneBooking(bookingId: string, update: Partial<bookingsInterface>) {
	const query =
  `UPDATE booking 
  SET guest=?, phone_number=?, order_date=?, check_in=?, check_out=?, special_request=?, status=?, room_id=?
  WHERE id =?;`
  const values = [
    update.guest,
    update.phone_number,
    update.order_date,
    update.check_in,
    update.check_out,
    update.special_request,
    update.status,
    update.room_id,
    bookingId
  ]
  const result = await SelectQuery(query, values)
  return result;
}

export const bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};