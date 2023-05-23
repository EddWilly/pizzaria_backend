"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = void 0;
class Delivery {
    get getOrderedAt() {
        return this.props.orderedAt;
    }
    get getDeliveredAt() {
        return this.props.deliveredAt;
    }
    get getOrder() {
        return this.props.order;
    }
    set setOrderedAt(orderedAt) {
        this.props.orderedAt = orderedAt;
    }
    set setDeliveredAt(deliveredAt) {
        this.props.deliveredAt = deliveredAt;
    }
    set setAddress(order) {
        this.props.order = order;
    }
    constructor(props) {
        const { orderedAt, deliveredAt } = props;
        if (deliveredAt <= orderedAt) {
            throw new Error('Invalid deliver date');
        }
        this.props = props;
    }
}
exports.Delivery = Delivery;
