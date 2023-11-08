import { SelectQuery } from '../util/connecionSQL';
import roomsData from '../data/roomsData.json';
import { roomsInterface } from "../interfaces/roomsInterface";
export const rooms = roomsData

async function fetchAll() {
  const query = 'select r.*, GROUP_CONCAT(DISTINCT p.photos) AS all_photos, GROUP_CONCAT(a.amenities) AS all_amenities FROM room r LEFT JOIN photo p ON r.id = p.room_id LEFT JOIN amenity_has_room ah ON r.id = ah.room_id LEFT JOIN amenity a ON ah.amenity_id = a.id GROUP BY r.id;'
  const values: any[] = [];
  const result = await SelectQuery(query, values)
  return result;
}

async function fetchOne(roomId: string) {
  const query = `select r.*, GROUP_CONCAT(DISTINCT p.photos) AS all_photos, GROUP_CONCAT(a.amenities) AS all_amenities FROM room r LEFT JOIN photo p ON r.id = p.room_id LEFT JOIN amenity_has_room ah ON r.id = ah.room_id LEFT JOIN amenity a ON ah.amenity_id = a.id WHERE r.id =? GROUP BY r.id;`
  const values = [roomId]
  const result = await SelectQuery(query, values)
  return result;
}

async function deleteRoom(roomId: string) {
  const query = `delete from room where id =?;`
  const values = [roomId]
  const result = await SelectQuery(query, values)
  return result;
}

async function createOneRoom(room: roomsInterface) {
  const query =
  `INSERT INTO room 
  (room_number, room_type, description, price, offer_price, discount, status)
  values 
  (?, ?, ?, ?, ?, ?, ?);`
  const values = [
    room.room_number,
    room.room_type,
    room.description,
    room.price,
    room.offer_price,
    room.discount,
    room.status
  ]
  const result = await SelectQuery(query, values)
  return result;
  }

async function updateOneRoom(roomId: string, update: Partial<roomsInterface>) {
	const query =
  `UPDATE room 
  SET room_number=?, room_type=?, description=?, price=?, offer_price=?, discount=?, status=?
  WHERE id =?;`
  const values = [
    update.room_number,
    update.room_type,
    update.description,
    update.price,
    update.offer_price,
    update.discount,
    update.status,
    roomId
  ]
  const result = await SelectQuery(query, values)
	return result
}

export const roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};