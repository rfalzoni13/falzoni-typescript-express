import { BaseDto } from "../base/baseDto"
import { UUID } from "crypto"

export class UserDto extends BaseDto {
    public fullName?: string
    public userName?: string
    public password?: string
    public email?: string
    public phoneNumber?: string
    public role?: string

    constructor(id: UUID, fullName: string | null, userName: string | null, password: string | null, email: string | null, phoneNumber: string | null, role: string | null) {
        super()
        this.id = id
        this.fullName = fullName!
        this.userName = userName!
        this.password = password!
        this.email = email!
        this.phoneNumber = phoneNumber!
        this.role = role!
    }
}