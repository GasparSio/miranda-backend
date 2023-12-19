"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsController = void 0;
const express_1 = require("express");
const roomsServices_1 = require("../services/roomsServices");
exports.roomsController = (0, express_1.Router)();
exports.roomsController.get('/', async (_req, res, next) => {
    try {
        const roomsResult = await roomsServices_1.roomsServices.fetchAll();
        res.json(roomsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.roomsController.get("/:roomId", async (req, res, next) => {
    try {
        const roomResult = await roomsServices_1.roomsServices.fetchOne(req.params.roomId);
        res.json(roomResult);
    }
    catch (error) {
        next(error);
    }
});
exports.roomsController.delete("/:roomId", async (req, res, next) => {
    try {
        const roomsResult = await roomsServices_1.roomsServices.delete(req.params.roomId);
        res.json(roomsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.roomsController.post("/", async (req, res, next) => {
    try {
        const roomsResult = await roomsServices_1.roomsServices.createOneRoom(req.body);
        res.json(roomsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.roomsController.put("/:roomId", async (req, res, next) => {
    try {
        const roomsResult = await roomsServices_1.roomsServices.updateOneRoom(req.params.roomId, req.body);
        res.json(roomsResult);
    }
    catch (error) {
        next(error);
    }
});
