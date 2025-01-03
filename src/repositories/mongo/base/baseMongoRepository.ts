import { MongoRepository, ObjectLiteral } from "typeorm";
import BaseRepository from "../../../domain/interfaces/repositories/base/baseRepository";
import { UUID } from "crypto";
import { ObjectId } from "mongodb";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export default class BaseMongoRepositoryImpl<TEntity extends ObjectLiteral> implements BaseRepository<TEntity> {
    constructor(private mongoData: MongoRepository<TEntity>) { }

    async getAll(): Promise<TEntity[]> {
        return await this.mongoData!.find({})
    }

    async get(id: UUID): Promise<TEntity> {
        const condition: any = { where: { _id: new ObjectId(id) } }
        const obj = await this.mongoData!.findOne(condition)
        return obj!
    }

    async create(obj: TEntity): Promise<void> {
        const data = obj as QueryDeepPartialEntity<TEntity>
        await this.mongoData!.insert(data)
    }

    async update(obj: TEntity): Promise<void> {
        const entity: any = await this.mongoData.findOne({where: {id: obj.id}})
        if(entity == null) throw new Error("Nenhum registro encontrado");

        const data = Object.assign(entity, obj)

        await this.mongoData!.update({_id: data._id }, data)
    }

    async delete(id: UUID): Promise<void> {
        const entity: any = await this.mongoData.findOne({where: {_id: new ObjectId(id)}})
        if(entity == null) throw new Error("Nenhum registro encontrado");

        await this.mongoData!.deleteOne(entity)
    }
}