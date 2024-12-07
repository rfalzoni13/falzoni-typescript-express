import BaseService from "../../domain/interfaces/services/base/baseService";
import { ObjectLiteral } from "typeorm";
import { UUID } from "crypto";
import BaseRepository from "../../domain/interfaces/repositories/base/baseRepository";

export default class BaseServiceImpl<T extends ObjectLiteral> implements BaseService<T> {
    constructor(private repository: BaseRepository<T>) {
    }

    async getAll(): Promise<T[]> {
        return await this.repository.getAll()
    }
    
    async get(id: UUID): Promise<T> {
        return await this.repository.get(id)
    } 

    async create(obj: T): Promise<void> {
        return await this.repository.create(obj)
    }

    async update(obj: T): Promise<void> {
        return await this.repository.update(obj)
    }

    async delete(id: UUID): Promise<void> {
        return await this.repository.delete(id)
    }
}