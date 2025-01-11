import { Entity, ObjectIdColumn } from "typeorm"
import { BaseMongoEntity } from "../../../interfaces/entities/base/baseMongoEntity"
import { ProductImpl } from "../../models/stock/productImpl"
import { ObjectId } from "mongodb"

@Entity("product")
export class ProductMongo extends ProductImpl implements BaseMongoEntity {
    @ObjectIdColumn()
    public _id?: ObjectId
}