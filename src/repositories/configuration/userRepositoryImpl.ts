import { AppDataSource } from "../../db";
import { UserMongo } from "../../domain/entities/mongo/configuration/userMongo";
import { UserSql } from "../../domain/entities/sql/configuration/userSql";
import User from "../../domain/interfaces/entities/configuration/user";
import UserRepository from "../../domain/interfaces/repositories/configuration/userRepository";
import GlobalConfiguration from "../../utils/globalConfiguration";
import BaseRepositoryImpl from "../base/baseRepositoryImpl";

export default class UserRepositoryImpl extends BaseRepositoryImpl<User> implements UserRepository {
    constructor() {
        super()
        this.repository = GlobalConfiguration.dbDriver == "mongodb" ? 
            AppDataSource.getMongoRepository(UserMongo) :
            AppDataSource.getRepository(UserSql)
    }
}