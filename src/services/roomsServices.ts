import { SelectQuery } from '../util/connecionSQL';
import roomsData from '../data/roomsData.json';
import { roomsInterface } from "../interfaces/roomsInterface";
export const rooms = roomsData

async function fetchAll() {
  const result = await SelectQuery(
    'select r.*, GROUP_CONCAT(DISTINCT p.photos) AS all_photos, GROUP_CONCAT(a.amenities) AS all_amenities FROM room r LEFT JOIN photo p ON r.id = p.room_id LEFT JOIN amenity_has_room ah ON r.id = ah.room_id LEFT JOIN amenity a ON ah.amenity_id = a.id GROUP BY r.id;')
  return result;
}

async function fetchOne(roomId: string) {
  const result = await SelectQuery(
    `select r.*, GROUP_CONCAT(DISTINCT p.photos) AS all_photos, GROUP_CONCAT(a.amenities) AS all_amenities FROM room r LEFT JOIN photo p ON r.id = p.room_id LEFT JOIN amenity_has_room ah ON r.id = ah.room_id LEFT JOIN amenity a ON ah.amenity_id = a.id WHERE r.id = ${roomId} GROUP BY r.id;`)
  return result;
}

async function deleteRoom(roomId: string) {
  const result = await SelectQuery(
    `delete from room where id = ${roomId};`)
  return result;
}

async function createOneRoom(room: roomsInterface) {
    const initialRoomsLength = rooms.length;
    await rooms.push(room);
    if (rooms.length === initialRoomsLength) {
      throw new Error('Error creating a new Room');
    }
    return room;
  }

async function updateOneRoom(roomId: string, update: Partial<roomsInterface>) {
    // const id = roomId.toString()
	const currentRoomsIndex = rooms.findIndex((room) => room.id === roomId)
	if (currentRoomsIndex === -1) throw new Error('Room not found')
	const result = (rooms[currentRoomsIndex] = {
		...rooms[currentRoomsIndex],
		...update,
	})
	return result
}

export const roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};