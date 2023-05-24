import { Dish } from "../dish/dish"

export interface UserProps {
    name: string,
    address: string,
    phone: string,
    email?: string,
    favoriteDishes: Dish[]
}

export class User {
    private props: UserProps

    get getName (): string {
        return this.props.name
    }

    get getAddress (): string {
        return this.props.address
    }

    get getPhone (): string {
        return this.props.phone
    }

    get getEmail (): string | undefined {
        return this.props.email
    }

    get getFavoriteDishes (): Dish[] {
        return this.props.favoriteDishes
    }
    
    set setName (name: string) {
        this.props.name = name
    }

    set setAddress (address: string) {
        this.props.address = address
    }

    set setPhone (phone: string) {
        this.props.phone = phone
    }

    set setEmail (email: string) {
        this.props.address = email
    }

    set setFavoriteDishes (favoriteDishes: Dish[]) {
        this.props.favoriteDishes = favoriteDishes
    }

    constructor(props: UserProps) {
        this.props = props
    }
}