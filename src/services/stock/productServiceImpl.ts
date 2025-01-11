import { inject, injectable } from "inversify"
import BaseServiceImpl from "../base/baseServiceImpl"
import ProductService from "../../domain/interfaces/services/stock/productService"
import { TYPES } from "../../di/types"
import ProductRepository from "../../domain/interfaces/repositories/stock/productRepository"
import Product from "../../domain/interfaces/entities/stock/product"
import { ProductDto } from "../../domain/dto/stock/productDto"

@injectable()
export default class ProductServiceImpl extends BaseServiceImpl<ProductDto, Product> implements ProductService {
    constructor(@inject(TYPES.ProductRepository) repository: ProductRepository) {
        super(repository)
    }
}