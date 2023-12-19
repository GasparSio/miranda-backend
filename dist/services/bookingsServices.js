"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsServices = void 0;
const bookingsModel_1 = require("../models/bookingsModel");
async function fetchAll() {
    const bookingsResult = await bookingsModel_1.Booking.find();
    return bookingsResult;
}
async function fetchOne(bookingId) {
    const bookingResult = await bookingsModel_1.Booking.findById(bookingId);
    if (!bookingResult) {
        throw new Error("Error on finding a booking with this ID");
    }
    return bookingResult;
}
async function deleteBooking(bookingId) {
    const bookingsResult = await bookingsModel_1.Booking.findByIdAndDelete(bookingId);
    if (!bookingsResult) {
        throw new Error("Error on finding a booking with this ID");
    }
    return bookingsResult;
}
async function updateOneBooking(bookingId, update) {
    const bookingsResult = await bookingsModel_1.Booking.findByIdAndUpdate(bookingId, update);
    if (!bookingsResult) {
        throw new Error('Booking not found');
    }
    return bookingsResult;
}
async function createOneBooking(booking) {
    const bookingResult = await bookingsModel_1.Booking.create(booking);
    if (!bookingResult) {
        throw new Error('Error creating a new Booking');
    }
    return bookingResult;
}
exports.bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};
