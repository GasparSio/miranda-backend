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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = exports.users = void 0;
const usersData_json_1 = __importDefault(require("../data/usersData.json"));
exports.users = usersData_json_1.default;
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersResult = yield exports.users;
        if (usersResult.length === 0) {
            throw new Error("Error on finding users");
        }
        return usersResult;
    });
}
function fetchOne(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userResult = yield exports.users.filter((user) => user.employee_id === userId);
        if (userResult.length === 0) {
            throw new Error("Error on finding users with this ID");
        }
        return userResult;
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentUserIndex = exports.users.findIndex((user) => user.employee_id === userId);
        if (currentUserIndex === -1) {
            throw new Error('User not found');
        }
        else {
            const result = yield exports.users.splice(currentUserIndex, 1);
            return result;
        }
    });
}
function updateOneUser(userId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentUserIndex = exports.users.findIndex((user) => user.employee_id === userId);
        if (currentUserIndex === -1)
            throw new Error('User not found');
        const result = (exports.users[currentUserIndex] = Object.assign(Object.assign({}, exports.users[currentUserIndex]), update));
        return result;
    });
}
function createOneUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const initialUsersLength = exports.users.length;
        yield exports.users.push(user);
        if (exports.users.length === initialUsersLength) {
            throw new Error('Error creating a new User');
        }
        return user;
    });
}
exports.usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};
