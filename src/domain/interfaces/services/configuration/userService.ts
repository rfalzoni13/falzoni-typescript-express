import { UserDto } from "../../../dto/configuration/userDto";
import User from "../../entities/configuration/user";
import BaseService from "../base/baseService";

export default interface UserService extends BaseService<UserDto, User> {}