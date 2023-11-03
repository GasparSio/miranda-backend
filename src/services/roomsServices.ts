import { roomsInterface } from "../interfaces/roomsInterface";
import { Room } from '../models/roomsModel';

async function fetchAll() {
  const roomsResult = await Room.find()
  return roomsResult;
}

async function fetchOne(roomId: string) {
  const roomResult = await Room.findById(roomId);
  if (!roomResult) {
    throw new Error("Error on finding rooms with this ID");
  } 
  return roomResult;
}

async function deleteRoom(roomId: string) {
const roomResult = await Room.findByIdAndDelete(roomId)
if (!roomResult) {
  throw new Error('Room not found')
}
  return roomResult
}

async function createOneRoom(room: roomsInterface) {
    const roomResult = await Room.create(room);
    if (!roomResult) {
      throw new Error('Error creating a new Room');
    }
    return roomResult;
  }

async function updateOneRoom(roomId: string, update: Partial<roomsInterface>) {
	const roomResult = Room.findByIdAndUpdate(roomId, update)
	if (!roomResult) {
    throw new Error('Room not found')
  }
	return roomResult
}

export const roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};