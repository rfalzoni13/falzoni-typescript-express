import Product from "../../domain/interfaces/entities/stock/product";
import BaseController from "../base/baseController";
import BaseControllerImpl from "../base/baseControllerImpl";
import ProductService from "../../domain/interfaces/services/stock/productService";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "../../di/types";
import { ProductDto } from "../../domain/dto/stock/productDto";
import { NextFunction, Request, Response } from "express";

/**
 * @swagger
 * tags:
 *   name: Product
 */
@controller('/product')
export default class ProductController extends BaseControllerImpl<ProductDto, Product> implements BaseController {
    constructor(@inject(TYPES.ProductService) service: ProductService) {
        super(service)
    }

    /**
     * @swagger
     * /api/product/getAll:
     *   get:
     *     description: Listar produtos
     *     summary: Obtém lista de produtos
     *     tags: [Product]
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     */
    @httpGet('/getAll')
    public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.getAll(req, res, next)
    }

    /**
     * @swagger
     * /api/product/get/{id}:
     *   get:
     *     description: Listar produto por Id
     *     summary: Obtém produto pelo Id
     *     tags: [Product]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do produto
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success
     */
    @httpGet("/get/:id")
    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        return super.get(req, res, next)
    }

    /**
     * @swagger
     * /api/product/create:
     *   post:
     *     description: Inserir produto
     *     summary: Cria um novo registro de produto
     *     tags: [Product]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: product
     *         required: true
     *         description: Objeto do produto
     *         schema:
     *            type: object
     *            properties:
     *              id:
     *                type: string
     *                example: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *              name:
     *                type: string
     *                example: Vídeo Game PolyStation
     *              price:
     *                type: number
     *                example: 399.99
     *              discount:
     *                type: number
     *                example: 0.5
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
     * /api/product/update:
     *   put:
     *     description: Atualizar produto
     *     summary: Atualiza o registro atual de um produto
     *     tags: [Product]
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: product
     *         required: true
     *         description: Objeto do produto
     *         schema:
     *            type: object
     *            properties:
     *              id:
     *                type: string
     *                example: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *              name:
     *                type: string
     *                example: Vídeo Game PolyStation
     *              price:
     *                type: number
     *                example: 399.99
     *              discount:
     *                type: number
     *                example: 0.5
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
     * /api/product/delete/{id}:
     *   delete:
     *     description: Excluir produto
     *     summary: Deleta o registro de produto pelo Id
     *     tags: [Product]
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: Id do produto
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