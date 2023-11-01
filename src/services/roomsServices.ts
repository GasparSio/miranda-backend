import roomsData from '../data/roomsData.json';
import { roomsInterface } from "../interfaces/roomsInterface";

export const rooms = roomsData

async function fetchAll() {
  const roomsResult = await rooms
  if (roomsResult.length === 0){
    throw new Error("Error on finding rooms");
  } 
  return roomsResult;
}

async function fetchOne(roomId: string) {
  const roomResult = await rooms.filter((room) => room.id === roomId);
  if (roomResult.length === 0) {
    throw new Error("Error on finding rooms with this ID");
  } 
  return roomResult;
}

async function deleteRoom(roomId: string) {
  // const id = roomId.toString()
const currentRoomIndex = rooms.findIndex((room) => room.id === roomId)

if (currentRoomIndex === -1) throw new Error('Room not found')
const result = await rooms.splice(currentRoomIndex, 1)
return result
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