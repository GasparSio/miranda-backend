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
exports.bookingsServices = exports.bookings = void 0;
const bookingsData_json_1 = __importDefault(require("../data/bookingsData.json"));
exports.bookings = bookingsData_json_1.default;
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingsResult = yield exports.bookings;
        if (bookingsResult.length === 0) {
            throw new Error("Error on finding bookings");
        }
        return bookingsResult;
    });
}
function fetchOne(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingsResult = yield exports.bookings.filter((booking) => booking.id === bookingId);
        if (bookingsResult.length === 0) {
            throw new Error("Error on finding a booking with this ID");
        }
        return bookingsResult;
    });
}
function deleteBooking(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentBookingsIndex = exports.bookings.findIndex((booking) => booking.id === bookingId);
        if (currentBookingsIndex === -1) {
            throw new Error('Booking not found');
        }
        else {
            const result = yield exports.bookings.splice(currentBookingsIndex, 1);
            return result;
        }
    });
}
function updateOneBooking(bookingId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentBookingIndex = exports.bookings.findIndex((booking) => booking.id === bookingId);
        if (currentBookingIndex === -1)
            throw new Error('Booking not found');
        const result = (exports.bookings[currentBookingIndex] = Object.assign(Object.assign({}, exports.bookings[currentBookingIndex]), update));
        return result;
    });
}
function createOneBooking(booking) {
    return __awaiter(this, void 0, void 0, function* () {
        const initialUsersLength = exports.bookings.length;
        yield exports.bookings.push(booking);
        if (exports.bookings.length === initialUsersLength) {
            throw new Error('Error creating a new Booking');
        }
        return booking;
    });
}
exports.bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};
