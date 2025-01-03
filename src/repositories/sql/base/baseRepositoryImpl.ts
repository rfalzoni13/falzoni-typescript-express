import { ObjectLiteral, Repository } from "typeorm";
import { UUID } from "crypto";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import BaseRepository from "../../../domain/interfaces/repositories/base/baseRepository";

export default class BaseRepositoryImpl<TEntity extends ObjectLiteral> implements BaseRepository<TEntity> {

    constructor(private data: Repository<TEntity>) {
    }
    async getAll(): Promise<TEntity[]> {
        return await this.data!.find({})
    }

    async get(id: UUID): Promise<TEntity> {
        const condition: any = { where: { id: id } }
        const obj = await this.data!.findOne(condition)
        return obj!
    }

    async create(obj: TEntity): Promise<void> {
        const data = obj as QueryDeepPartialEntity<TEntity>
        await this.data!.insert(data)
    }

    async update(obj: TEntity): Promise<void> {
        const data = obj as QueryDeepPartialEntity<TEntity>
        await this.data!.update(obj.id!, data)
    }

    async delete(id: UUID): Promise<void> {
        await this.data!.delete(id)
    }
}