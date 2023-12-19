"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsController = void 0;
const express_1 = require("express");
const contactsServices_1 = require("../services/contactsServices");
exports.contactsController = (0, express_1.Router)();
exports.contactsController.get('/', async (_req, res, next) => {
    try {
        const contactsResult = await contactsServices_1.contactsServices.fetchAll();
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.contactsController.get("/:contactId", async (req, res, next) => {
    try {
        const contactsResult = await contactsServices_1.contactsServices.fetchOne(req.params.contactId);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.contactsController.delete("/:contactId", async (req, res, next) => {
    try {
        const contactsResult = await contactsServices_1.contactsServices.delete(req.params.contactId);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.contactsController.put("/:contactId", async (req, res, next) => {
    try {
        const contactsResult = await contactsServices_1.contactsServices.updateOneContact(req.params.contactId, req.body);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
});
exports.contactsController.post("/", async (req, res, next) => {
    try {
        const contactsResult = await contactsServices_1.contactsServices.createOneContact(req.body);
        res.json(contactsResult);
    }
    catch (error) {
        next(error);
    }
});
