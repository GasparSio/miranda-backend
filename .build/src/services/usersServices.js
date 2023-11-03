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
exports.usersServices = void 0;
const usersModel_1 = require("../models/usersModel");
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersResult = yield usersModel_1.users.find();
        if (usersResult.length === 0) {
            throw new Error("Error on finding users");
        }
        return usersResult;
    });
}
function fetchOne(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userResult = yield usersModel_1.users.findById(userId);
        if (!userResult) {
            throw new Error("Error on finding users with this ID");
        }
        return userResult;
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userResult = yield usersModel_1.users.findByIdAndDelete(userId);
        if (!userResult) {
            throw new Error('User not found');
        }
        else {
            return userResult;
        }
    });
}
function updateOneUser(userId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const userResult = yield usersModel_1.users.findByIdAndUpdate(userId, update);
        if (!userResult) {
            throw new Error('User not found');
        }
        return userResult;
    });
}
function createOneUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userResult = yield usersModel_1.users.create(user);
        if (!userResult) {
            throw new Error('Error creating a new User');
        }
        return userResult;
    });
}
exports.usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};
