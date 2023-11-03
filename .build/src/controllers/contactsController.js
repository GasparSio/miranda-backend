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
exports.contactsController = void 0;
const express_1 = require("express");
const contactsServices_1 = require("../services/contactsServices");
exports.contactsController = (0, express_1.Router)();
exports.contactsController.get('/', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactsResult = yield contactsServices_1.contactsServices.fetchAll();
        res.json({ contactsResult });
    }
    catch (error) {
        next(error);
    }
}));
exports.contactsController.get("/:contactId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactsResult = yield contactsServices_1.contactsServices.fetchOne(req.params.contactId);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.contactsController.delete("/:contactId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactsResult = yield contactsServices_1.contactsServices.delete(req.params.contactId);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.contactsController.put("/:contactId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactsResult = yield contactsServices_1.contactsServices.updateOneContact(req.params.contactId, req.body);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
}));
exports.contactsController.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactsResult = yield contactsServices_1.contactsServices.createOneContact(req.body);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
}));
