import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string

	@Column()
	address!: string

	@Column()
	phone!: string

	@Column()
	email!: string

	@Column()
	favoriteDishes!: string
}