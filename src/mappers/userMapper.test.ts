import { User } from '../entities/user/user'
import { UserMapper } from './userMapper'
import { it, describe, expect } from 'vitest'
import { UserMocks } from '../mocks/user-mocks'
import { UserModel } from '../repositories/models/UserModel'

describe('Should be able to map an User object to a User entity', () => {
    it('should map user without favorite dishes', async () => {
        //Arrange
        const userMocker = new UserMocks
        const user: User = userMocker.mockUser()
        console.log(user)
        //Act
        const userMapper = new UserMapper
        const userEntity: UserModel = await userMapper.MapUserClassToUserEntity(user)
        console.log(userEntity)
        //Assert
        expect(userEntity).toBeInstanceOf(UserModel)
        expect(userEntity.name).toEqual(user.getName)
        expect(userEntity.address).toEqual(user.getAddress)
        expect(userEntity.phone).toEqual(user.getPhone)
        expect(userEntity.email).toEqual(user.getEmail)
    })
})