import Product from "../../domain/interfaces/entities/stock/product";
import BaseController from "../base/baseController";
import BaseControllerImpl from "../base/baseControllerImpl";
import ProductService from "../../domain/interfaces/services/stock/productService";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "../../di/types";
import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath } from "swagger-express-ts";
import { ProductDto } from "../../domain/dto/stock/productDto";

@ApiPath({
    path: "/api/product",
    name: "Product",
    security: { basicAuth: [] }
})
@controller('/product')
export default class ProductController extends BaseControllerImpl<ProductDto, Product> implements BaseController {
    constructor(@inject(TYPES.ProductService) service: ProductService) {
        super(service)
    }

    @ApiOperationGet({
        path: "/getAll",
        description: "Listar produtos",
        summary: "Obtém lista de produtos",
        responses: {
            200: { description: "Success" }
        }
    })
    @httpGet('/getAll')
    public async getAll(req: any, res: any, next: any): Promise<any> {
        return super.getAll(req, res, next)
    }

    @ApiOperationGet({
        path: "/get/{id}",
        description: "Listar produto por Id",
        summary: "Obtém produto pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do produto"
                }
            }
        },
        responses: {
            200: { description: "Success" }
        }
    })
    @httpGet("/get/:id")
    public async get(req: any, res: any, next: any): Promise<any> {
        return super.get(req, res, next)
    }

    @ApiOperationPost({
        path: "/create",
        description: "Inserir produto",
        summary: "Cria um novo registro de produto",
        parameters: {
            body: { description: "Objeto do produto", required: true, model: "Product" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Bad Request" }
        }
    })
    @httpPost('/create')
    public async create(req: any, res: any, next: any): Promise<any> {
        return super.create(req, res, next)
    }

    @ApiOperationPut({
        path: "/update",
        description: "Atualizar produto",
        summary: "Atualiza o registro atual de um produto",
        parameters: {
            body: { description: "Objeto do produto", required: true, model: "Product" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Bad Request" }
        }
    })
    @httpPut('/update')
    public async update(req: any, res: any, next: any): Promise<any> {
        return super.update(req, res, next)
    }

    @ApiOperationDelete({
        path: "/delete/{id}",
        description: "Excluir produto",
        summary: "Deleta o registro de produto pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do produto"
                }
            }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Bad Request" }
        }
    })
    @httpDelete('/delete/:id')
    public async delete(req: any, res: any, next: any): Promise<any> {
        return super.delete(req, res, next)
    }
}