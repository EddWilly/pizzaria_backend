"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
class Dish {
    get getName() {
        return this.props.name;
    }
    get getPrice() {
        return this.props.price;
    }
    get getIngredients() {
        return this.props.ingredients;
    }
    set setName(name) {
        this.props.name = name;
    }
    set setPrice(price) {
        this.props.price = price;
    }
    set setingredientsIds(ingredients) {
        this.props.ingredients = ingredients;
    }
    constructor(props) {
        this.props = props;
    }
}
exports.Dish = Dish;
