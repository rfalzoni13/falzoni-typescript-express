import { ProductDto } from "../../../dto/stock/productDto";
import Product from "../../entities/stock/product";
import BaseService from "../base/baseService";

export default interface ProductService extends BaseService<ProductDto, Product> {}