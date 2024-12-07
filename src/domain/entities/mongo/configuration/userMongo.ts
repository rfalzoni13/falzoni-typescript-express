import { Entity, ObjectIdColumn } from "typeorm";
import { UserImpl } from "../../models/configuration/userImpl";
import { ObjectId } from "mongodb";
import { BaseMongoEntity } from "../../../interfaces/entities/base/baseMongoEntity";

@Entity("user")
export class UserMongo extends UserImpl implements BaseMongoEntity {
    @ObjectIdColumn()
    public _id?: ObjectId
}