"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = void 0;
const usersModel_1 = require("../models/usersModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function fetchAll() {
    const usersResult = await usersModel_1.User.find();
    return usersResult;
}
async function fetchOne(userId) {
    const userResult = await usersModel_1.User.findById(userId);
    if (!userResult) {
        throw new Error("Error on finding users with this ID");
    }
    return userResult;
}
async function deleteUser(userId) {
    const userResult = await usersModel_1.User.findByIdAndDelete(userId);
    if (!userResult) {
        throw new Error('User not found');
    }
    else {
        return userResult;
    }
}
async function updateOneUser(userId, update) {
    const userResult = await usersModel_1.User.findByIdAndUpdate(userId, update);
    if (!userResult) {
        throw new Error('User not found');
    }
    return userResult;
}
async function createOneUser(user) {
    user.password = bcryptjs_1.default.hashSync(user.password || '', 10);
    const userResult = await usersModel_1.User.create(user);
    if (!userResult) {
        throw new Error('Error creating a new User');
    }
    return userResult;
}
exports.usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};
