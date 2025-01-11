import assert from 'assert'
import logMessenger from '../../../src/utils/logMessenger'
import ProductRepository from '../../../src/domain/interfaces/repositories/stock/productRepository'
import ProductRepositoryImpl from "../../../src/repositories/sql/stock/productRepositoryImpl"
import Product from '../../../src/domain/interfaces/entities/stock/product'
import { QueryFailedError, Repository } from 'typeorm'
import { AppDataSource } from '../../../src/db'
import { ProductDto } from '../../../src/domain/dto/stock/productDto'
import { ProductSql } from '../../../src/domain/entities/sql/stock/productSql'
import { randomUUID } from 'crypto'
import { productSeed } from '../../seeders/stock/productSeeder'

const productData: Repository<Product> = AppDataSource.getRepository(ProductSql)

describe("test for product repository", () => {
    let repository: ProductRepository
    beforeAll(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de produto")
            await AppDataSource.initialize()
            productSeed(productData)
            repository = new ProductRepositoryImpl(productData)
            logMessenger.createLogSuccess("Conectado à base de dados")
        } catch(error: any) {
            logMessenger.createLogError(error.stack)
        }
    })

    test('should be products return success when get all', async () => {
        const products = await repository.getAll()
        expect(products.length > 0).toBeTruthy()
    })

    test('should be product return success when get by id', async () => {
        const product = await repository.get("b2b8ad3f-c054-4220-b75d-66e0dcdb478e")
        assert.notEqual(product, null)
    })

    test('should be product return empty when get by wrong id', async () => {
        const product = await repository.get("cd2b1b60-3728-446e-b6e2-c43b10811f83")
        assert.equal(product, null)
    })

    test('should be return success when create product', async () => {
        const dto = new ProductDto(randomUUID(), "Camiseta Polo Xadrez", 19.99, 0.00)
        const product = Object.assign(dto)
        await repository.create(product)
    })

    test('should be return failure when create product', async () => {
        const dto = new ProductDto(randomUUID(), null, null, null)
        const product = Object.assign(dto)
        expect(async() => await repository.create(product)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when update product', async () => {
        const product = await repository.get("ba32c78a-465a-46aa-ade1-0e3fecbf802b")
        product.name = "Caderno Barbie"
        product.price = 49.99
        product.discount = 5.00
        await repository.update(product)
    })

    test('should be return failure when update product', async () => {
        const product = await repository.get("ba32c78a-465a-46aa-ade1-0e3fecbf802b")
        product.name = null!
        expect(async() => await repository.update(product)).rejects.toThrow(QueryFailedError)
    })

    test('should be return success when delete product', async () => {
        await repository.delete("832a2071-bad3-4c1a-839e-6373186ed77c")
    })

    afterAll(async() => {
        await AppDataSource.destroy()
        logMessenger.createLogInfo("Desconectado da base de dados")
        logMessenger.createLogInfo("Finalizando testes do repositório de produto")
    })
})