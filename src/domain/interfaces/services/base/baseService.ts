import { BaseDto } from "../../../dto/base/baseDto"
import { BaseEntity } from "../../entities/base/baseEntity"

export default interface BaseService<TDto extends BaseDto, TEntity extends BaseEntity> {
    
    getAll(): Promise<TDto[]>

    get(id: any): Promise<TDto>

    create(obj: TDto): Promise<void>
    
    update(obj: TDto): Promise<void>

    delete(id: any): Promise<void>
}