import assert from 'assert';
import logMessenger from '../../../src/utils/logMessenger';
import UserRepository from '../../../src/domain/interfaces/repositories/configuration/userRepository';
import UserRepositoryImpl from "../../../src/repositories/sql/configuration/userRepositoryImpl"
import User from '../../../src/domain/interfaces/entities/configuration/user';
import { QueryFailedError, Repository } from 'typeorm';
import { AppDataSource } from '../../../src/db';
import { UserDto } from '../../../src/domain/dto/configuration/userDto'
import { UserSql } from '../../../src/domain/entities/sql/configuration/userSql';
import { userSeed } from '../../seeders/configuration/userSeeder';
import { randomUUID } from 'crypto';

const userData: Repository<User> = AppDataSource.getRepository(UserSql)

describe("test for user repository", () => {
    let repository: UserRepository;
    beforeAll(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de usuário")
            await AppDataSource.initialize()
            userSeed(userData)
            repository = new UserRepositoryImpl(userData)
            logMessenger.createLogSuccess("Conectado à base de dados")
        } catch(error: any) {
            logMessenger.createLogError(error.stack)
        }
    })

    test('should be users return success when get all', async () => {
        const users = await repository.getAll()
        expect(users.length > 0).toBeTruthy()
    })

    test('should be user return success when get by id', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        assert.notEqual(user, null)
    })

    test('should be user return empty when get by wrong id', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b6")
        assert.equal(user, null)
    })

    test('should be return success when create user', async () => {
        const dto = new UserDto(randomUUID(), "Seiya de Pégaso", "pegasoSeiya", "123456", "seiyadepegaso@hotmail.com", "(11) 2222-2222", "ADMIN")
        const user = Object.assign(dto)
        await repository.create(user)
    })

    test('should be return failure when create user', async () => {
        const dto = new UserDto(randomUUID(), null, null, "123456", "seiyadepegaso@hotmail.com", "(11) 2222-2222", "ADMIN")
        const user = Object.assign(dto)
        expect(async() => await repository.create(user)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when update user', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        user.fullName = "Cargueiro atômico"
        user.phoneNumber = "(11) 92212-2121"
        await repository.update(user)
    })

    test('should be return failure when update user', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        user.userName = null!
        expect(async() => await repository.update(user)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when delete user', async () => {
        await repository.delete("c03dfb78-0611-4caa-b923-86652fbad891")
    })

    afterAll(async() => {
        await AppDataSource.destroy()
        logMessenger.createLogInfo("Desconectado da base de dados")
        logMessenger.createLogInfo("Finalizando testes do repositório de usuário")
    })
})
    