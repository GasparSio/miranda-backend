"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsController = void 0;
const express_1 = require("express");
const bookingsServices_1 = require("../services/bookingsServices");
exports.bookingsController = (0, express_1.Router)();
exports.bookingsController.get('/', async (_req, res, next) => {
    try {
        const bookingsResult = await bookingsServices_1.bookingsServices.fetchAll();
        res.json(bookingsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.bookingsController.get("/:bookingId", async (req, res, next) => {
    try {
        const bookingResult = await bookingsServices_1.bookingsServices.fetchOne(req.params.bookingId);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
});
exports.bookingsController.delete("/:bookingId", async (req, res, next) => {
    try {
        const bookingResult = await bookingsServices_1.bookingsServices.delete(req.params.bookingId);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
});
exports.bookingsController.put("/:bookingId", async (req, res, next) => {
    try {
        const bookingResult = await bookingsServices_1.bookingsServices.updateOneBooking(req.params.bookingId, req.body);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
});
exports.bookingsController.post("/", async (req, res, next) => {
    try {
        const bookingsResult = await bookingsServices_1.bookingsServices.createOneBooking(req.body);
        res.json(bookingsResult);
    }
    catch (error) {
        next(error);
    }
});
