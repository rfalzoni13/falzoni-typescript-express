import Customer from "../../domain/interfaces/entities/register/customer"
import { inject } from "inversify"
import { TYPES } from "../../di/types"
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils"
import BaseControllerImpl from "../base/baseControllerImpl"
import CustomerService from "../../domain/interfaces/services/register/customerService"
import { CustomerDto } from "../../domain/dto/register/customerDto"

/**
 * @swagger
 * tags:
 *   name: Customer
 */
@controller('/customer')
export default class CustomerController extends BaseControllerImpl<CustomerDto, Customer> {
    constructor(@inject(TYPES.CustomerService) service: CustomerService) {
        super(service)
    }

    /**
     * @swagger
     * /api/customer/getAll:
     *   get:
     *     description: Listar clientes
     *     summary: Obtém lista de clientes
     *     tags: [Customer]
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
     *                 $ref: '#/components/schemas/customerSchema'
     *       400:
     *         description: Bad Request
     */
    @httpGet('/getAll')
    public async getAll(req: any, res: any, next: any): Promise<any> {
        return super.getAll(req, res, next)
    }

    /**
     * @swagger
     * /api/customer/get/{id}:
     *   get:
     *     description: Listar cliente por Id
     *     summary: Obtém cliente pelo Id
     *     tags: [Customer]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do cliente
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/customerSchema'
     *       400:
     *         description: Bad Request
     */
    @httpGet("/get/:id")
    public async get(req: any, res: any, next: any): Promise<any> {
        return super.get(req, res, next)
    }

    /**
     * @swagger
     * /api/customer/create:
     *   post:
     *     description: Inserir cliente
     *     summary: Cria um novo registro de cliente
     *     tags: [Customer]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: customer
     *         required: true
     *         description: Objeto do cliente
     *         schema:
     *            $ref: '#/components/schemas/customerSchema'
     *     responses:
     *       201:
     *         description: Created
     *       400:
     *         description: Bad Request
     */
    @httpPost('/create')
    public async create(req: any, res: any, next: any): Promise<any> {
        return super.create(req, res, next)
    }

    /**
     * @swagger
     * /api/customer/update:
     *   put:
     *     description: Atualizar cliente
     *     summary: Atualiza o registro atual de um cliente
     *     tags: [Customer]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: customer
     *         required: true
     *         description: Objeto do cliente
     *         schema:
     *            $ref: '#/components/schemas/customerSchema'
     *     responses:
     *       200:
     *         description: Success
     *       400:
     *         description: Bad Request
     */
    @httpPut('/update')
    public async update(req: any, res: any, next: any): Promise<any> {
        return super.update(req, res, next)
    }

    /**
     * @swagger
     * /api/customer/delete/{id}:
     *   delete:
     *     description: Excluir cliente
     *     summary: Deleta o registro de cliente pelo Id
     *     tags: [Customer]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do cliente
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success
     *       400:
     *         description: Bad Request
     */
    @httpDelete('/delete/:id')
    public async delete(req: any, res: any, next: any): Promise<any> {
        return super.delete(req, res, next)
    }
}