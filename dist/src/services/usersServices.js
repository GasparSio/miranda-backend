"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = exports.users = void 0;
const usersData_json_1 = __importDefault(require("../data/usersData.json"));
exports.users = usersData_json_1.default;
async function fetchAll() {
    const usersResult = await exports.users;
    if (usersResult.length === 0) {
        throw new Error("Error on finding users");
    }
    return usersResult;
}
async function fetchOne(userId) {
    const userResult = await exports.users.filter((user) => user.employee_id === userId);
    if (userResult.length === 0) {
        throw new Error("Error on finding users with this ID");
    }
    return userResult;
}
async function deleteUser(userId) {
    // const id = userId.toString()
    const currentUserIndex = exports.users.findIndex((user) => user.employee_id === userId);
    if (currentUserIndex === -1) {
        throw new Error('User not found');
    }
    else {
        const result = await exports.users.splice(currentUserIndex, 1);
        return result;
    }
}
async function updateOneUser(userId, update) {
    // const id = userId.toString()
    const currentUserIndex = exports.users.findIndex((user) => user.employee_id === userId);
    if (currentUserIndex === -1)
        throw new Error('User not found');
    const result = (exports.users[currentUserIndex] = {
        ...exports.users[currentUserIndex],
        ...update,
    });
    return result;
}
async function createOneUser(user) {
    const initialUsersLength = exports.users.length;
    await exports.users.push(user);
    if (exports.users.length === initialUsersLength) {
        throw new Error('Error creating a new User');
    }
    return user;
}
exports.usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};
