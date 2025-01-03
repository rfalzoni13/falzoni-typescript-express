import { MongoRepository, Repository } from "typeorm"
import BaseRepositoryImpl from "../base/baseRepositoryImpl"
import Product from "../../../domain/interfaces/entities/stock/product"
import ProductRepository from "../../../domain/interfaces/repositories/stock/productRepository"
import { AppDataSource } from "../../../db"
import { ProductSql } from "../../../domain/entities/sql/stock/productSql"

export default class ProductRepositoryImpl extends BaseRepositoryImpl<Product> implements ProductRepository {
    constructor(private productData: Repository<Product>) {
        productData = AppDataSource.getRepository(ProductSql)
        super(productData)
    }
}