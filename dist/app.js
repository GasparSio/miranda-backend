"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usersController_1 = require("./controllers/usersController");
const contactsController_1 = require("./controllers/contactsController");
const roomsController_1 = require("./controllers/roomsController");
const bookingsController_1 = require("./controllers/bookingsController");
const infoController_1 = require("./controllers/infoController");
const loginController_1 = require("./controllers/loginController");
const authMiddleware_1 = require("./middleware/authMiddleware");
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URL = process.env.DB_URL || '';
const databaseName = process.env.DB_NAME || "";
(async () => {
    try {
        await mongoose_1.default.connect(DB_URL, {
            dbName: databaseName,
        });
        console.log('Connected to Mongo');
    }
    catch (error) {
        throw new Error(`${error}`);
    }
})();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
// public routes & middleware
exports.app.use("/", infoController_1.infoController);
exports.app.use("/login", loginController_1.loginController);
exports.app.use(authMiddleware_1.authMiddleware);
// private routes
exports.app.use("/bookings", bookingsController_1.bookingsController);
exports.app.use("/rooms", roomsController_1.roomsController);
exports.app.use("/users", usersController_1.usersController);
exports.app.use("/contacts", contactsController_1.contactsController);
//ERROR HANDLER. No depende de ninguna ruta
exports.app.use((err, _req, res, _next) => {
    console.error(err);
    return res.status(500).json({ error: true, message: 'Application error' });
});
