import { test, expect } from 'vitest'
import { User, UserProps } from './user'
import { DishMocks } from '../../mocks/dish-mocks'
import { UserMocks } from '../../mocks/user-mocks'

test('Create an user', () => {
	//Arrange
	const userMocker = new UserMocks
	const mockedUser = userMocker.mockUser()

	const newUserProps: UserProps = {
		name: mockedUser.getName,
		address: mockedUser.getAddress,
		phone: mockedUser.getPhone,
		email: mockedUser.getEmail,
		favoriteDishes: mockedUser.getFavoriteDishes
	}

	//Act
	const user = new User(newUserProps)

	//Assert
	expect(user).toBeInstanceOf(User)
	expect(user.getName).toEqual(mockedUser.getName)
	expect(user.getAddress).toEqual(mockedUser.getAddress)
	expect(user.getPhone).toEqual( mockedUser.getPhone)
	expect(user.getEmail).toEqual(mockedUser.getEmail)
	expect(user.getFavoriteDishes).toEqual(mockedUser.getFavoriteDishes)
})