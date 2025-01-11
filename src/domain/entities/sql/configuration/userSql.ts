import { Entity } from "typeorm"
import { UserImpl } from "../../models/configuration/userImpl"

@Entity("user")
export class UserSql extends UserImpl {
}