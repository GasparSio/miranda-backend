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
exports.roomsController = void 0;
const express_1 = require("express");
const roomsServices_1 = require("../services/roomsServices");
exports.roomsController = (0, express_1.Router)();
exports.roomsController.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsResult = yield roomsServices_1.roomsServices.fetchAll();
        res.json(roomsResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.roomsController.get("/:roomId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomResult = yield roomsServices_1.roomsServices.fetchOne(req.params.roomId);
        res.json(roomResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.roomsController.delete("/:roomId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsResult = yield roomsServices_1.roomsServices.delete(req.params.roomId);
        res.json(roomsResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.roomsController.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsResult = yield roomsServices_1.roomsServices.createOneRoom(req.body);
        res.json(roomsResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.roomsController.put("/:roomId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsResult = yield roomsServices_1.roomsServices.updateOneRoom(req.params.roomId, req.body);
        res.json(roomsResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
