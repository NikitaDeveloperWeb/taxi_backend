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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const users_shema_1 = require("../../users/schemas/users.shema");
let Order = class Order {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", users_shema_1.User)
], Order.prototype, "operator", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "from", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "to", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "time", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "child", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "bagage", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "fulfilled", void 0);
Order = __decorate([
    mongoose_1.Schema()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map