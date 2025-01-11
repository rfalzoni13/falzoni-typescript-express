import { CustomerImpl } from "../../models/register/customerImpl"
import { BaseMongoEntity } from "../../../interfaces/entities/base/baseMongoEntity"
import { Entity, ObjectId, ObjectIdColumn } from "typeorm"

@Entity("customer")
export class CustomerMongo extends CustomerImpl implements BaseMongoEntity {
    @ObjectIdColumn()
    public _id?: ObjectId
}