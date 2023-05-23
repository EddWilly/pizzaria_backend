"use strict";
//Todo caso de uso tem uma ENTRADA e uma SAÍDA
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
exports.CreateOrder = void 0;
const order_1 = require("../entities/order/order");
class CreateOrder {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    execute({ orderedAt, price, customer, address, orderedDishes, orderedDrinks }) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = new order_1.Order({
                orderedAt,
                price,
                customer,
                address,
                orderedDishes,
                orderedDrinks
            });
            yield this.ordersRepository.create(order);
            return order;
        });
    }
}
exports.CreateOrder = CreateOrder;
