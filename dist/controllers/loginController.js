"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const express_1 = require("express");
const loginServices_1 = require("../services/loginServices");
exports.loginController = (0, express_1.Router)();
exports.loginController.post("/", async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const result = await loginServices_1.authService.login(email, password);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
