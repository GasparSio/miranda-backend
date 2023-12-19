"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const express_1 = require("express");
const usersServices_1 = require("../services/usersServices");
exports.usersController = (0, express_1.Router)();
exports.usersController.get('/', async (_req, res, next) => {
    try {
        const usersResult = await usersServices_1.usersServices.fetchAll();
        res.json(usersResult);
    }
    catch (error) {
        next(error);
    }
});
exports.usersController.get("/:userId", async (req, res, next) => {
    try {
        const usersResult = await usersServices_1.usersServices.fetchOne(req.params.userId);
        res.json(usersResult);
    }
    catch (error) {
        next(error);
    }
});
exports.usersController.delete("/:userId", async (req, res, next) => {
    try {
        const usersResult = await usersServices_1.usersServices.delete(req.params.userId);
        res.json(usersResult);
    }
    catch (error) {
        next(error);
    }
});
exports.usersController.put("/:userId", async (req, res, next) => {
    try {
        const usersResult = await usersServices_1.usersServices.updateOneUser(req.params.userId, req.body);
        res.json(usersResult);
    }
    catch (error) {
        next(error);
    }
});
exports.usersController.post("/", async (req, res, next) => {
    try {
        const usersResult = await usersServices_1.usersServices.createOneUser(req.body);
        res.json(usersResult);
    }
    catch (error) {
        next(error);
    }
});
