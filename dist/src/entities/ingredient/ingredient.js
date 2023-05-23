"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
class Ingredient {
    get getName() {
        return this.props.name;
    }
    get getPrice() {
        return this.props.price;
    }
    get getAvailability() {
        return this.props.available;
    }
    set setName(name) {
        this.props.name = name;
    }
    set setPrice(price) {
        this.props.price = price;
    }
    set setAvailability(available) {
        this.props.available = available;
    }
    constructor(props) {
        this.props = props;
    }
}
exports.Ingredient = Ingredient;
