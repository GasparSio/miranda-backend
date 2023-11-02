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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsServices = exports.rooms = void 0;
const roomsData_json_1 = __importDefault(require("../data/roomsData.json"));
exports.rooms = roomsData_json_1.default;
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const roomsResult = yield exports.rooms;
        if (roomsResult.length === 0) {
            throw new Error("Error on finding rooms");
        }
        return roomsResult;
    });
}
function fetchOne(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        const roomResult = yield exports.rooms.filter((room) => room.id === roomId);
        if (roomResult.length === 0) {
            throw new Error("Error on finding rooms with this ID");
        }
        return roomResult;
    });
}
function deleteRoom(roomId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = roomId.toString()
        const currentRoomIndex = exports.rooms.findIndex((room) => room.id === roomId);
        if (currentRoomIndex === -1)
            throw new Error('Room not found');
        const result = yield exports.rooms.splice(currentRoomIndex, 1);
        return result;
    });
}
function createOneRoom(room) {
    return __awaiter(this, void 0, void 0, function* () {
        const initialRoomsLength = exports.rooms.length;
        yield exports.rooms.push(room);
        if (exports.rooms.length === initialRoomsLength) {
            throw new Error('Error creating a new Room');
        }
        return room;
    });
}
function updateOneRoom(roomId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = roomId.toString()
        const currentRoomsIndex = exports.rooms.findIndex((room) => room.id === roomId);
        if (currentRoomsIndex === -1)
            throw new Error('Room not found');
        const result = (exports.rooms[currentRoomsIndex] = Object.assign(Object.assign({}, exports.rooms[currentRoomsIndex]), update));
        return result;
    });
}
exports.roomsServices = {
    fetchAll,
    fetchOne,
    createOneRoom,
    updateOneRoom,
    delete: deleteRoom,
};
