import { inject } from "inversify";
import { TYPES } from "../../di/types";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import BaseControllerImpl from "../base/baseControllerImpl";
import UserService from "../../domain/interfaces/services/configuration/userService";
import User from "../../domain/interfaces/entities/configuration/user";
import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath } from "swagger-express-ts";
import { UserDto } from "../../domain/dto/configuration/userDto";

@ApiPath({
    path: "/api/user",
    name: "User",
    security: { basicAuth: [] }
})
@controller('/user')
export default class UserController extends BaseControllerImpl<UserDto, User> {
    constructor(@inject(TYPES.UserService) service: UserService) {
        super(service)
    }

    @ApiOperationGet({
        path: "/getAll",
        description: "Listar usuários",
        summary: "Obtém lista de usuários",
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
        description: "Listar usuário por Id",
        summary: "Obtém usuário pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do usuário"
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
        description: "Inserir usuário",
        summary: "Cria um novo registro de usuário",
        parameters: {
            body: { description: "Objeto do usuário", required: true, model: "User" }
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
        description: "Atualizar usuário",
        summary: "Atualiza o registro atual de um usuário",
        parameters: {
            body: { description: "Objeto do usuário", required: true, model: "User" }
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
        description: "Excluir usuário",
        summary: "Deleta o registro de usuário pelo Id",
        parameters: {
            path: {
                description: {
                    name: "id",
                    description: "Id do usuário"
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