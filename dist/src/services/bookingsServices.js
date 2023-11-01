"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsServices = exports.bookings = void 0;
const bookingsData_json_1 = __importDefault(require("../data/bookingsData.json"));
exports.bookings = bookingsData_json_1.default;
async function fetchAll() {
    const bookingsResult = await exports.bookings;
    if (bookingsResult.length === 0) {
        throw new Error("Error on finding bookings");
    }
    return bookingsResult;
}
async function fetchOne(bookingId) {
    const bookingsResult = await exports.bookings.filter((booking) => booking.id === bookingId);
    if (bookingsResult.length === 0) {
        throw new Error("Error on finding a booking with this ID");
    }
    return bookingsResult;
}
async function deleteBooking(bookingId) {
    // const id = userId.toString()
    const currentBookingsIndex = exports.bookings.findIndex((booking) => booking.id === bookingId);
    if (currentBookingsIndex === -1) {
        throw new Error('Booking not found');
    }
    else {
        const result = await exports.bookings.splice(currentBookingsIndex, 1);
        return result;
    }
}
async function updateOneBooking(bookingId, update) {
    // const id = userId.toString()
    const currentBookingIndex = exports.bookings.findIndex((booking) => booking.id === bookingId);
    if (currentBookingIndex === -1)
        throw new Error('Booking not found');
    const result = (exports.bookings[currentBookingIndex] = {
        ...exports.bookings[currentBookingIndex],
        ...update,
    });
    return result;
}
async function createOneBooking(booking) {
    const initialUsersLength = exports.bookings.length;
    await exports.bookings.push(booking);
    if (exports.bookings.length === initialUsersLength) {
        throw new Error('Error creating a new Booking');
    }
    return booking;
}
exports.bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};
