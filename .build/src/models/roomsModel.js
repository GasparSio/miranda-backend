"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const roomsSchema = new mongoose_1.default.Schema({
    "photo": String,
    "roomNumber": String,
    "id": String,
    "bedType": String,
    "facilities": String,
    "price": String,
    "offerprice": String,
    "status": String,
});
exports.rooms = mongoose_1.default.model('rooms', roomsSchema);
