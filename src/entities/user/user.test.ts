import { test, expect } from 'vitest'
import { User } from './user'

test('Create an user', () => {
    //Arrange
    const newUserName = "Daniel Stewart"
    const newUserEmail = "danielstewart@gmail.com"
    const newUserPhone = "5938582935"
    const newUserAddress = "Rua Velha, n°60"
    const newUserFavoriteDishes = [12, 34, 45, 15]

    const newUserProps = {
        name: newUserName,
        address: newUserAddress,
        phone: newUserPhone,
        email: newUserEmail,
        favoriteDishes: newUserFavoriteDishes
    }

    //Act
    const user = new User(newUserProps)

    //Assert
    expect(user).toBeInstanceOf(User)
    expect(user.getName).toEqual(newUserName)
    expect(user.getAddress).toEqual(newUserAddress)
    expect(user.getPhone).toEqual(newUserPhone)
    expect(user.getEmail).toEqual(newUserEmail)
    expect(user.getFavoriteDishes).toEqual(newUserFavoriteDishes)
})