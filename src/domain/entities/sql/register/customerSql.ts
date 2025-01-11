import { Entity } from "typeorm"
import { CustomerImpl } from "../../models/register/customerImpl"

@Entity("customer")
export class CustomerSql extends CustomerImpl {
}