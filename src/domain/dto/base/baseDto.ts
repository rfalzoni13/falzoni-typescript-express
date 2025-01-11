import { UUID } from "crypto"
import { BaseEntity } from "../../interfaces/entities/base/baseEntity"

export abstract class BaseDto {
    public id?: UUID
}