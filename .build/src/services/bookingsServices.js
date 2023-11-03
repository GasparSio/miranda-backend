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
exports.bookingsServices = void 0;
const bookingsModel_1 = require("../models/bookingsModel");
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingsResult = yield bookingsModel_1.Booking.find();
        return bookingsResult;
    });
}
function fetchOne(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingResult = yield bookingsModel_1.Booking.findById(bookingId);
        if (!bookingResult) {
            throw new Error("Error on finding a booking with this ID");
        }
        return bookingResult;
    });
}
function deleteBooking(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingsResult = yield bookingsModel_1.Booking.findByIdAndDelete(bookingId);
        if (!bookingsResult) {
            throw new Error("Error on finding a booking with this ID");
        }
        return bookingsResult;
    });
}
function updateOneBooking(bookingId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingsResult = yield bookingsModel_1.Booking.findByIdAndUpdate(bookingId, update);
        if (!bookingsResult) {
            throw new Error('Booking not found');
        }
        return bookingsResult;
    });
}
function createOneBooking(booking) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookingResult = yield bookingsModel_1.Booking.create(booking);
        if (!bookingResult) {
            throw new Error('Error creating a new Booking');
        }
        return bookingResult;
    });
}
exports.bookingsServices = {
    fetchAll,
    fetchOne,
    createOneBooking,
    updateOneBooking,
    delete: deleteBooking,
};
