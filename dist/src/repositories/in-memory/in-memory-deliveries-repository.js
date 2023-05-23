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
exports.InMemoryDeliveriesRepository = void 0;
const date_fns_1 = require("date-fns");
class InMemoryDeliveriesRepository {
    constructor() {
        this.items = [];
    }
    create(delivery) {
        return __awaiter(this, void 0, void 0, function* () {
            this.items.push(delivery);
        });
    }
    findOverlappingDelivery(orderedAt, deliveredAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const overlappingDelivery = this.items.find(delivery => {
                return (0, date_fns_1.areIntervalsOverlapping)({ start: orderedAt, end: deliveredAt }, { start: delivery.getOrderedAt, end: delivery.getDeliveredAt }, { inclusive: true });
            });
            if (!overlappingDelivery) {
                return null;
            }
            return overlappingDelivery;
        });
    }
}
exports.InMemoryDeliveriesRepository = InMemoryDeliveriesRepository;
