"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoController = void 0;
const express_1 = require("express");
const infoServices_1 = require("../services/infoServices");
exports.infoController = (0, express_1.Router)();
exports.infoController.get('/', async (_req, res, next) => {
    try {
        const infoResult = await infoServices_1.infoServices.getApiInfo();
        res.json(infoResult);
    }
    catch (error) {
        next(error);
    }
});
