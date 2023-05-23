"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    get getOrderedAt() {
        return this.props.orderedAt;
    }
    get getPrice() {
        return this.props.price;
    }
    get getCustomer() {
        return this.props.customer;
    }
    get getAddress() {
        return this.props.address;
    }
    get getOrderedDishes() {
        return this.props.orderedDishes;
    }
    get getOrderedDrinks() {
        return this.props.orderedDrinks;
    }
    set setOrderedAt(orderedAt) {
        this.props.orderedAt = orderedAt;
    }
    set setPrice(price) {
        this.props.price = price;
    }
    set setCustomer(customer) {
        this.props.customer = customer;
    }
    set setAddress(address) {
        this.props.address = address;
    }
    set setOrderedDishes(orderedDishes) {
        this.props.orderedDishes = orderedDishes;
    }
    set setOrderedDrinks(orderedDrinks) {
        this.props.orderedDrinks = orderedDrinks;
    }
    constructor(props) {
        this.props = props;
    }
}
exports.Order = Order;
