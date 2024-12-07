import { inject, injectable } from "inversify";
import UserService from "../../domain/interfaces/services/configuration/userService";
import { ObjectId, Repository } from "typeorm";
import { AppDataSource } from "../../db";
import BaseServiceImpl from "../base/baseServiceImpl";
import GlobalConfiguration from "../../utils/globalConfiguration";
import User from "../../domain/interfaces/entities/configuration/user";
import { UserMongo } from "../../domain/entities/mongo/configuration/userMongo";
import { UserSql } from "../../domain/entities/sql/configuration/userSql";
import { TYPES } from "../../di/types";
import UserRepository from "../../domain/interfaces/repositories/configuration/userRepository";

@injectable()
export class UserServiceImpl extends BaseServiceImpl<User> implements UserService {    
    constructor(@inject(TYPES.UserRepository) repository: UserRepository) {
        super(repository)
    }
}