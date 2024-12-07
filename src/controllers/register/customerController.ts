import { inject } from "inversify";
import { TYPES } from "../../di/types";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import BaseControllerImpl from "../base/baseControllerImpl";
import CustomerService from "../../domain/interfaces/services/register/customerService";
import { Customer } from "../../domain/interfaces/entities/register/customer";
import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath } from "swagger-express-ts";

@ApiPath({
    path: "/api/customer",
    name: "Customer",
    security: { basicAuth: [] }
})
@controller('/customer')
export default class CustomerController extends BaseControllerImpl<Customer> {
    constructor(@inject(TYPES.CustomerService) service: CustomerService) {
        super(service)
    }

    @ApiOperationGet({
        path: "/getAll",
        description: "Listar clientes",
        summary: "Obtém lista de clientes",
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
        description: "Listar cliente por Id",
        summary: "Obtém cliente pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do cliente"
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
        description: "Inserir cliente",
        summary: "Cria um novo registro de cliente",
        parameters: {
            body: { description: "Objeto do cliente", required: true, model: "Customer" }
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
        description: "Atualizar cliente",
        summary: "Atualiza o registro atual de um cliente",
        parameters: {
            body: { description: "Objeto do cliente", required: true, model: "Customer" }
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
        description: "Excluir cliente",
        summary: "Deleta o registro de cliente pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do cliente"
                }
            }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Bad Request" }
        }
    })
    @httpDelete('/delete')
    public async delete(req: any, res: any, next: any): Promise<any> {
        return super.delete(req, res, next)
    }
}