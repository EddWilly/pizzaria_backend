import { add } from "date-fns"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export interface UserModelProps {
	
	name: string,
	address: string,
	phone: string,
	email?: string,
	favoriteDishes: string
}

@Entity("user")
export class UserModel {

	@PrimaryGeneratedColumn("uuid")
	id!: number

	@Column()
	name!: string

	@Column()
	address!: string

	@Column()
	phone!: string

	@Column()
	email?: string

	@Column()
	favoriteDishes: string = ""

	setAll(userProps: UserModelProps) {
		const { name, address, phone, email } = userProps
		this.name = name
		this.address = address
		this.phone = phone
		this.email = email
	}

	setFavoriteDishes(favoriteDishes: Array<number>) {
		this.favoriteDishes
	}
}