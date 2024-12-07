import { UUID } from "crypto";
import { ObjectId } from "mongodb";

export default interface BaseService<T> {
    
    getAll(): Promise<T[]>

    get(id: UUID): Promise<T>

    create(obj: T): Promise<void>
    
    update(obj: T): Promise<void>

    delete(id: UUID): Promise<void>
}