"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    get getName() {
        return this.props.name;
    }
    get getAddress() {
        return this.props.address;
    }
    get getPhone() {
        return this.props.phone;
    }
    get getEmail() {
        return this.props.email;
    }
    get getFavoriteDishes() {
        return this.props.favoriteDishes;
    }
    set setName(name) {
        this.props.name = name;
    }
    set setAddress(address) {
        this.props.address = address;
    }
    set setPhone(phone) {
        this.props.phone = phone;
    }
    set setEmail(email) {
        this.props.address = email;
    }
    set setFavoriteDishes(favoriteDishes) {
        this.props.favoriteDishes = favoriteDishes;
    }
    constructor(props) {
        this.props = props;
    }
}
exports.User = User;
