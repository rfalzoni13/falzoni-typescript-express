import { FindOneOptions, ObjectLiteral, Repository } from "typeorm";
import BaseRepository from "../../domain/interfaces/repositories/base/baseRepository";
import { UUID } from "crypto";
import { AppDataSource } from "../../db";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export default class BaseRepositoryImpl<T extends ObjectLiteral> implements BaseRepository<T> {
    protected repository: Repository<T>
    
    constructor() {
        this.repository = AppDataSource.getMongoRepository("base")
    }

    async getAll(): Promise<T[]> {
        return await this.repository.find({})
    }
    
    async get(id: UUID): Promise<T> {
        const options = {
            id: id
        } as FindOneOptions<T>
        const obj = await this.repository.findOne(options)
        return obj!
    } 

    async create(obj: T): Promise<void> {
        const data = obj as QueryDeepPartialEntity<T>
        await this.repository.insert(data)
    }

    async update(obj: T): Promise<void> {
        const data = obj as QueryDeepPartialEntity<T>
        await this.repository.update("id", data)
    }

    async delete(id: UUID): Promise<void> {
        await this.repository.delete(id) 
    }
}