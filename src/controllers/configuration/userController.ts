import { inject } from "inversify"
import { TYPES } from "../../di/types"
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils"
import BaseControllerImpl from "../base/baseControllerImpl"
import UserService from "../../domain/interfaces/services/configuration/userService"
import User from "../../domain/interfaces/entities/configuration/user"
import { UserDto } from "../../domain/dto/configuration/userDto"
import { NextFunction, Request, Response } from "express"

/**
 * @swagger
 * tags:
 *   name: User
 */
@controller('/user')
export default class UserController extends BaseControllerImpl<UserDto, User> {
    constructor(@inject(TYPES.UserService) service: UserService) {
        super(service)
    }

    /**
     * @swagger
     * /api/user/getAll:
     *   get:
     *     description: Listar usuários
     *     summary: Obtém lista de usuários
     *     tags: [User]
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/userSchema'
     *       400:
     *         description: Bad Request.
     */
    @httpGet('/getAll')
    public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.getAll(req, res, next)
    }

    /**
     * @swagger
     * /api/user/get/{id}:
     *   get:
     *     description: Listar usuário por Id
     *     summary: Obtém usuário pelo Id
     *     tags: [User]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do usuário
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/userSchema'
     *       400:
     *         description: Bad Request.
     */
    @httpGet("/get/:id")
    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.get(req, res, next)
    }

    /**
     * @swagger
     * /api/user/create:
     *   post:
     *     description: Inserir usuário
     *     summary: Cria um novo registro de usuário
     *     tags: [User]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: user
     *         required: true
     *         description: Objeto do usuário
     *         schema:
     *           $ref: '#/components/schemas/userSchema'
     *     responses:
     *       201:
     *         description: Created
     *       400:
     *         description: Bad Request
     */
    @httpPost('/create')
    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.create(req, res, next)
    }

    /**
     * @swagger
     * /api/user/update:
     *   put:
     *     description: Atualizar usuário
     *     summary: Atualiza o registro atual de um usuário
     *     tags: [User]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: user
     *         required: true
     *         description: Objeto do usuário
     *         schema:
     *           $ref: '#/components/schemas/userSchema'
     *     responses:
     *       200:
     *         description: Success
     *       400:
     *         description: Bad Request
     */
    @httpPut('/update')
    public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.update(req, res, next)
    }

    /**
     * @swagger
     * /api/user/delete/{id}:
     *   delete:
     *     description: Excluir usuário
     *     summary: Deleta o registro de usuário pelo Id
     *     tags: [User]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do usuário
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success
     *       400:
     *         description: Bad Request
     */
    @httpDelete('/delete/:id')
    public async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.delete(req, res, next)
    }
}