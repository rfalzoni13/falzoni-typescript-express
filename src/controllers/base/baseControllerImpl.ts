import BaseService from "../../domain/interfaces/services/base/baseService"
import BaseController from "./baseController"
import { BaseDto } from "../../domain/dto/base/baseDto"
import { BaseEntity } from "../../domain/interfaces/entities/base/baseEntity"
import logMessenger from "../../utils/logMessenger"
import { NextFunction, Request, Response } from "express"

export default abstract class BaseControllerImpl<TDto extends BaseDto, TEntity extends BaseEntity> implements BaseController {    
    constructor(private service: BaseService<TDto, TEntity>) {}

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            const list = await this.service.getAll()
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno ${JSON.stringify(list)}`)
            return res.json(list)
        } catch (e: any) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            const obj = await this.service.get(req.params.id)
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: ${JSON.stringify(obj)}`)
            return res.json(obj)
        } catch (e: any) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            await this.service.create(req.body)
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro inserido com sucesso!`)
            return res.json({ message: "Registro inserido com sucesso!" })
        } catch (e: any) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            await this.service.update(req.body)
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro atualizado com sucesso!`)
            return res.json({ message: "Registro atualizado com sucesso!" })
        } catch (e: any) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            await this.service.delete(req.params.id)
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro removido com sucesso!`)
            return res.json({ message: "Registro removido com sucesso!" })
        } catch (e: any) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }
}