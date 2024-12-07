import { UUID } from "crypto"

export default interface BaseRepository<T> {
    getAll(): Promise<T[]>

    get(id: UUID): Promise<T>

    create(obj: T): Promise<void>
    
    update(obj: T): Promise<void>

    delete(id: UUID): Promise<void>
}