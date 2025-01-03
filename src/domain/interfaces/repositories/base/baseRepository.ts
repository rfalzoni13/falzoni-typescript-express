import { UUID } from "crypto"
import { ObjectId } from "mongodb"

export default interface BaseRepository<TEntity> {
    getAll(): Promise<TEntity[]>

    get(id: UUID): Promise<TEntity>

    create(obj: TEntity): Promise<void>
    
    update(obj: TEntity): Promise<void>

    delete(id: UUID): Promise<void>
}