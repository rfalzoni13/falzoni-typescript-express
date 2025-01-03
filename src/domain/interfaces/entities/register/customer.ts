import { BaseEntity } from "../base/baseEntity"

export default interface Customer extends BaseEntity {
    name?: string
    document?: string
}