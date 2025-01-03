import { BaseEntity } from "../base/baseEntity"

export default interface User extends BaseEntity {
    fullName?: string
    userName?: string
    password?: string
    email?: string
    phoneNumber?: string
    role?: string
}