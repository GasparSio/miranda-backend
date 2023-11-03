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
exports.bookingsController = void 0;
const express_1 = require("express");
const bookingsServices_1 = require("../services/bookingsServices");
exports.bookingsController = (0, express_1.Router)();
exports.bookingsController.get('/', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingsResult = yield bookingsServices_1.bookingsServices.fetchAll();
        res.json(bookingsResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.get("/:bookingId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingResult = yield bookingsServices_1.bookingsServices.fetchOne(req.params.bookingId);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.delete("/:bookingId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingResult = yield bookingsServices_1.bookingsServices.delete(req.params.bookingId);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.put("/:bookingId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingResult = yield bookingsServices_1.bookingsServices.updateOneBooking(req.params.bookingId, req.body);
        res.json(bookingResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingsResult = yield bookingsServices_1.bookingsServices.createOneBooking(req.body);
        res.json(bookingsResult);
    }
    catch (error) {
        next(error);
    }
}));
