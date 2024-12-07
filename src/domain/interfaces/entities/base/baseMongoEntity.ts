import { ObjectId } from "mongodb";

export interface BaseMongoEntity {
    _id?: ObjectId
}