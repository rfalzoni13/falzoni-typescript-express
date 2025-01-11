import { MongoRepository } from "typeorm"
import User from "../../../domain/interfaces/entities/configuration/user"
import UserRepository from "../../../domain/interfaces/repositories/configuration/userRepository"
import BaseMongoRepositoryImpl from "../base/baseMongoRepository"
import { AppDataSource } from "../../../db"
import { UserMongo } from "../../../domain/entities/mongo/configuration/userMongo"

export default class UserMongoRepositoryImpl extends BaseMongoRepositoryImpl<User> implements UserRepository {
    constructor(private userMongoData: MongoRepository<User>) {
        userMongoData = AppDataSource.getMongoRepository(UserMongo)
        super(userMongoData)
    }
}