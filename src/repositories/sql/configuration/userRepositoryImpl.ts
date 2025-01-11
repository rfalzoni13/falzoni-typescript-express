import { Repository } from "typeorm"
import BaseRepositoryImpl from "../base/baseRepositoryImpl"
import { AppDataSource } from "../../../db"
import { UserSql } from "../../../domain/entities/sql/configuration/userSql"
import User from "../../../domain/interfaces/entities/configuration/user"
import UserRepository from "../../../domain/interfaces/repositories/configuration/userRepository"

export default class UserRepositoryImpl extends BaseRepositoryImpl<User> implements UserRepository {    
    constructor(private userData: Repository<User>) {
        userData = AppDataSource.getRepository(UserSql)
        super(userData)
    }
}