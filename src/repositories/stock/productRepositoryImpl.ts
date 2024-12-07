import { AppDataSource } from "../../db"
import { ProductMongo } from "../../domain/entities/mongo/stock/productMongo"
import { ProductSql } from "../../domain/entities/sql/stock/productSql"
import { Product } from "../../domain/interfaces/entities/stock/product"
import ProductRepository from "../../domain/interfaces/repositories/stock/productRepository"
import GlobalConfiguration from "../../utils/globalConfiguration"
import BaseRepositoryImpl from "../base/baseRepositoryImpl"

export default class ProductRepositoryImpl extends BaseRepositoryImpl<Product> implements ProductRepository {
    constructor() {
        super()
        this.repository = GlobalConfiguration.dbDriver == "mongodb" ? 
            AppDataSource.getMongoRepository(ProductMongo) :
            AppDataSource.getRepository(ProductSql)
    }
}