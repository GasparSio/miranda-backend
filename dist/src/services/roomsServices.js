"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsServices = exports.rooms = void 0;
const roomsData_json_1 = __importDefault(require("../data/roomsData.json"));
exports.rooms = roomsData_json_1.default;
async function fetchAll() {
    const roomsResult = await exports.rooms;
    if (roomsResult.length === 0) {
        throw new Error("Error on finding rooms");
    }
    return roomsResult;
}
async function fetchOne(roomId) {
    const roomResult = await exports.rooms.filter((room) => room.id === roomId);
    if (roomResult.length === 0) {
        throw new Error("Error on finding rooms with this ID");
    }
    return roomResult;
}
async function deleteRoom(roomId) {
    // const id = roomId.toString()
    const currentRoomIndex = exports.rooms.findIndex((room) => room.id === roomId);
    if (currentRoomIndex === -1)
        throw new Error('Room not found');
    const result = await exports.rooms.splice(currentRoomIndex, 1);
    return result;
}
async function createOneRoom(room) {
    const initialRoomsLength = exports.rooms.length;
    await exports.rooms.push(room);
    if (exports.rooms.length === initialRoomsLength) {
        throw new Error('Error creating a new Room');
    }
    return room;
}
async function updateOneRoom(roomId, update) {
    // const id = roomId.toString()
    const currentRoomsIndex = exports.rooms.findIndex((room) => room.id === roomId);
    if (currentRoomsIndex === -1)
        throw new Error('Room not found');
    const result = (exports.rooms[currentRoomsIndex] = {
        ...exports.rooms[currentRoomsIndex],
        ...update,
    });
    return result;
}
exports.roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};
