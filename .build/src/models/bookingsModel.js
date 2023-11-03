"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookings = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingsSchema = new mongoose_1.default.Schema({
    "id": String,
    "guest": String,
    "phone_number": String,
    "order_date": String,
    "check_in": String,
    "check_out": String,
    "special_request": String,
    "room_type": String,
    "room_number": String,
    "status": String,
    "photos": String
});
exports.bookings = mongoose_1.default.model('bookings', bookingsSchema);
