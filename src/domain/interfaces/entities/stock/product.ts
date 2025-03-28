import { BaseEntity } from "../base/baseEntity"

export default interface Product extends BaseEntity {
    name?: string
    price?: number
    discount?: number
    created?: Date
    modified?: Date
}