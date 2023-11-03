"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsServices = void 0;
const roomsModel_1 = require("../models/roomsModel");
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const roomsResult = yield roomsModel_1.rooms.find();
        if (roomsResult.length === 0) {
            throw new Error("Error on finding rooms");
        }
        return roomsResult;
    });
}
function fetchOne(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomResult = yield roomsModel_1.rooms.findById(roomId);
        if (!roomResult) {
            throw new Error("Error on finding rooms with this ID");
        }
        return roomResult;
    });
}
function deleteRoom(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomResult = yield roomsModel_1.rooms.findByIdAndDelete(roomId);
        if (!roomResult) {
            throw new Error('Room not found');
        }
        return roomResult;
    });
}
function createOneRoom(room) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomResult = yield roomsModel_1.rooms.create(room);
        if (!roomResult) {
            throw new Error('Error creating a new Room');
        }
        return roomResult;
    });
}
function updateOneRoom(roomId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomResult = roomsModel_1.rooms.findByIdAndUpdate(roomId, update);
        if (!roomResult) {
            throw new Error('Room not found');
        }
        return roomResult;
    });
}
exports.roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};
