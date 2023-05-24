import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export interface UserModelProps {
	name: string,
	address: string,
	phone: string,
	email?: string,
	favoriteDishes: []
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

}