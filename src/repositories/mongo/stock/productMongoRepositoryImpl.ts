import { MongoRepository } from "typeorm";
import Product from "../../../domain/interfaces/entities/stock/product";
import ProductRepository from "../../../domain/interfaces/repositories/stock/productRepository";
import BaseMongoRepositoryImpl from "../base/baseMongoRepository";
import { AppDataSource } from "../../../db";
import { ProductMongo } from "../../../domain/entities/mongo/stock/productMongo";

export default class ProductMongoRepositoryImpl extends BaseMongoRepositoryImpl<Product> implements ProductRepository {
    constructor(private productMongoData: MongoRepository<Product>) {
        productMongoData = AppDataSource.getMongoRepository(ProductMongo)
        super(productMongoData)
    }
}