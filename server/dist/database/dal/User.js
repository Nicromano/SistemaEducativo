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
exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("../models/User"));
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.create(payload);
    return user;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        // @todo throw custom error
        throw new Error('not found');
    }
    const updatedUser = yield user.update(payload);
    return updatedUser;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(id);
    if (!user) {
        // @todo throw custom error
        throw new Error('not found');
    }
    return user;
});
exports.getById = getById;
const deleteById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUserCount = yield User_1.default.destroy({
        where: { ID }
    });
    return !!deletedUserCount;
});
exports.deleteById = deleteById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.default.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
