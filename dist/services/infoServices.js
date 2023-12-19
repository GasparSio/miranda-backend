"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoServices = void 0;
const apiData_json_1 = __importDefault(require("../data/apiData.json"));
async function getApiInfo() {
    const infoDataApi = await apiData_json_1.default;
    if (infoDataApi) {
        return infoDataApi;
    }
    else {
        throw new Error("Error on obtaining general info about API SERVICES");
    }
}
exports.infoServices = {
    getApiInfo
};
