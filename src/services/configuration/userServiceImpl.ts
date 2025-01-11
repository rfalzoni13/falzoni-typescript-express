import { inject, injectable } from "inversify"
import UserService from "../../domain/interfaces/services/configuration/userService"
import BaseServiceImpl from "../base/baseServiceImpl"
import User from "../../domain/interfaces/entities/configuration/user"
import { TYPES } from "../../di/types"
import UserRepository from "../../domain/interfaces/repositories/configuration/userRepository"
import { UserDto } from "../../domain/dto/configuration/userDto"
import passwordUtil from "../../utils/passwordUtil"

@injectable()
export class UserServiceImpl extends BaseServiceImpl<UserDto, User> implements UserService {    
    constructor(@inject(TYPES.UserRepository) repository: UserRepository) {
        super(repository)
    }

    async create(obj: UserDto): Promise<void> {
        obj.password = passwordUtil.hashPassword(obj.password!)
        return super.create(obj)
    }
}