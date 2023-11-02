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
exports.usersController = void 0;
const express_1 = require("express");
const usersServices_1 = require("../services/usersServices");
exports.usersController = (0, express_1.Router)();
exports.usersController.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersResult = yield usersServices_1.usersServices.fetchAll();
        res.json(usersResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.usersController.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersResult = yield usersServices_1.usersServices.fetchOne(req.params.userId);
        res.json(usersResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.usersController.delete("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersResult = yield usersServices_1.usersServices.delete(req.params.userId);
        res.json(usersResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.usersController.put("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersResult = yield usersServices_1.usersServices.updateOneUser(req.params.userId, req.body);
        res.json(usersResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
exports.usersController.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersResult = yield usersServices_1.usersServices.createOneUser(req.body);
        res.json(usersResult);
    }
    catch (error) {
        res.status(500).json(`${error}`);
    }
}));
