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
	id!: string

	@Column({ type: 'varchar' })
	name!: string

	@Column({ type: 'varchar' })
	address!: string

	@Column({ type: 'varchar' })
	phone!: string

	@Column({ type: 'varchar', nullable: true })
	email?: string

	@Column({
		type: "varchar",
		length: 350,
		nullable: true
	})
	favoriteDishes: string = ""

	setAll(userProps: UserModelProps) {
		const { name, address, phone, email, favoriteDishes } = userProps
		this.name = name
		this.address = address
		this.phone = phone
		this.email = email
		this.favoriteDishes = favoriteDishes
	}
}