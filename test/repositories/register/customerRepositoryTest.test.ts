import assert from 'assert';
import logMessenger from '../../../src/utils/logMessenger';
import CustomerRepository from '../../../src/domain/interfaces/repositories/register/customerRepository';
import CustomerRepositoryImpl from "../../../src/repositories/sql/register/customerRepositoryImpl"
import Customer from '../../../src/domain/interfaces/entities/register/customer';
import { QueryFailedError, Repository } from 'typeorm';
import { AppDataSource } from '../../../src/db';
import { CustomerDto } from '../../../src/domain/dto/register/customerDto'
import { CustomerSql } from '../../../src/domain/entities/sql/register/customerSql';
import { randomUUID } from 'crypto';
import { customerSeed } from '../../seeders/register/customerSeeder';

const customerData: Repository<Customer> = AppDataSource.getRepository(CustomerSql)

describe("test for customer repository", () => {
    let repository: CustomerRepository;
    beforeAll(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de cliente")
            await AppDataSource.initialize()
            customerSeed(customerData)
            repository = new CustomerRepositoryImpl(customerData)
            logMessenger.createLogSuccess("Conectado à base de dados")
        } catch(error: any) {
            logMessenger.createLogError(error.stack)
        }
    })

    test('should be customers return success when get all', async () => {
        const customers = await repository.getAll()
        expect(customers.length > 0).toBeTruthy()
    })

    test('should be customer return success when get by id', async () => {
        const customer = await repository.get("b6d833ff-1563-46cd-b529-22836b846128")
        assert.notEqual(customer, null)
    })

    test('should be customer return empty when get by wrong id', async () => {
        const customer = await repository.get("d9f18dd3-dfcd-40f1-b739-f9fb250e514e")
        assert.equal(customer, null)
    })

    test('should be return success when create customer', async () => {
        const dto = new CustomerDto(randomUUID(), "Ikki de Fênix", "654-789-445-01")
        const customer = Object.assign(dto)
        await repository.create(customer)
    })

    test('should be return failure when create customer', async () => {
        const dto = new CustomerDto(randomUUID(), null, null)
        const customer = Object.assign(dto)
        expect(async() => await repository.create(customer)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when update customer', async () => {
        const customer = await repository.get("610b1b76-a278-4f88-8d6d-4c33c831b2da")
        customer.name = "Barata tonta"
        customer.document = "655.498.772-47"
        await repository.update(customer)
    })

    test('should be return failure when update customer', async () => {
        const customer = await repository.get("610b1b76-a278-4f88-8d6d-4c33c831b2da")
        customer.name = null!
        expect(async() => await repository.update(customer)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when delete customer', async () => {
        await repository.delete("95d51124-1858-4725-9359-6861a3012a1b")
    })

    afterAll(async() => {
        await AppDataSource.destroy()
        logMessenger.createLogInfo("Desconectado da base de dados")
        logMessenger.createLogInfo("Finalizando testes do repositório de cliente")
    })
})