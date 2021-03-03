"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const _ = require("lodash");
const generateHash_1 = require("../utils/generateHash");
const constants_1 = require("../auth/constants");
let UsersService = class UsersService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.users = this.UserModel.find().exec();
    }
    async getById(id) {
        return this.UserModel.findById(id);
    }
    async getAll() {
        return await this.users;
    }
    async create(userDto) {
        const pass = userDto.password + constants_1.jwtConstants.secret;
        const pass2 = userDto.password2 + constants_1.jwtConstants.secret;
        const hash = generateHash_1.generateMD5(pass);
        if (hash === generateHash_1.generateMD5(pass2)) {
            const newUser = new this.UserModel(_.assignIn(userDto, { password: hash, password2: generateHash_1.generateMD5(pass2) }));
            return await newUser.save();
        }
        else {
            return undefined;
        }
    }
    async remove(id) {
        return this.UserModel.findByIdAndRemove(id);
    }
    async update(id, UserDto) {
        return this.UserModel.findByIdAndUpdate(id, UserDto, { new: true });
    }
    async findOne(username) {
        return (await this.users).find((user) => user.username === username);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map