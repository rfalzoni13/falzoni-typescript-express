import { httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import BaseService from "../../domain/interfaces/services/base/baseService";
import BaseController from "./baseController";

export default abstract class BaseControllerImpl<T> implements BaseController {    
    constructor(private service: BaseService<T>) {}

    public async getAll(req: any, res: any, next: any): Promise<any> {
        try {
            const list = await this.service.getAll()
            return res.json(list)
        } catch (e) {
            next(e)
        }
    }

    public async get(req: any, res: any, next: any): Promise<any> {
        try {
            const obj = await this.service.get(req.params.id)
            return res.json(obj)
        } catch (e) {
            next(e)
        }
    }

    public async create(req: any, res: any, next: any): Promise<any> {
        try {
            await this.service.create(req.body)
            return res.json({ message: "Registro inserido com sucesso!" })
        } catch (e) {
            next(e)
        }
    }

    public async update(req: any, res: any, next: any): Promise<any> {
        try {
            await this.service.update(req.body)
            return res.json({ message: "Registro atualizado com sucesso!" })
        } catch (e) {
            next(e)
        }
    }

    public async delete(req: any, res: any, next: any): Promise<any> {
        try {
            await this.service.delete(req.params.id)
            return res.json({ message: "Registro removido com sucesso!" })
        } catch (e) {
            next(e)
        }
    }
}