import { it, expect } from "vitest"
import { UserModel, UserModelProps } from "./UserModel"

it('Should be able to create a new UserModel object and use setAll method', () => {
	//Arrange
	const userModelProps: UserModelProps = {
		name: "Ed Willy",
		address: "Rua X",
		phone: "49825102501",
		email: "lawiletxd@live.com",
		favoriteDishes: "1, 2"
	}
	//Act
	const user: UserModel = new UserModel()
	user.setAll(userModelProps)
	//Assert
	expect(user).toBeInstanceOf(UserModel)
	expect(user.name).toEqual(userModelProps.name)
	expect(user.address).toEqual(userModelProps.address)
	expect(user.phone).toEqual(userModelProps.phone)
	expect(user.email).toEqual(userModelProps.email)
	expect(user.favoriteDishes).toEqual(userModelProps.favoriteDishes)
})
