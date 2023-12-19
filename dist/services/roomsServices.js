"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsServices = void 0;
const roomsModel_1 = require("../models/roomsModel");
async function fetchAll() {
    const roomsResult = await roomsModel_1.Room.find();
    return roomsResult;
}
async function fetchOne(roomId) {
    const roomResult = await roomsModel_1.Room.findById(roomId);
    if (!roomResult) {
        throw new Error("Error on finding rooms with this ID");
    }
    return roomResult;
}
async function deleteRoom(roomId) {
    const roomResult = await roomsModel_1.Room.findByIdAndDelete(roomId);
    if (!roomResult) {
        throw new Error('Room not found');
    }
    return roomResult;
}
async function createOneRoom(room) {
    const roomResult = await roomsModel_1.Room.create(room);
    if (!roomResult) {
        throw new Error('Error creating a new Room');
    }
    return roomResult;
}
async function updateOneRoom(roomId, update) {
    const roomResult = roomsModel_1.Room.findByIdAndUpdate(roomId, update);
    if (!roomResult) {
        throw new Error('Room not found');
    }
    return roomResult;
}
exports.roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};
