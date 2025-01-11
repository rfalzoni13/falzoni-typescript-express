import { Repository } from 'typeorm'
import passwordUtil from '../../../src/utils/passwordUtil'
import User from '../../../src/domain/interfaces/entities/configuration/user'

export const userSeed = (data: Repository<User>) => {
    data.insert({
        id: "15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5",
        fullName: "James Hetfield",
        userName: "jhetfield",
        password: passwordUtil.hashPassword("123456"),
        email: "jameshetfield@hotmail.com",
        phoneNumber: "(44) 2222-2222",
        role: "ADMIN"
    })
    data.insert({
        id: "19bdb45d-795c-4c21-a156-3c25f6b34039",
        fullName: "Roronoa Zoro",
        userName: "roronoaz",
        password: passwordUtil.hashPassword("654321"),
        email: "zoro_r@gmail.com",
        phoneNumber: "(55) 3333-3333",
        role: "USER"
    })
    data.insert({
        id: "c03dfb78-0611-4caa-b923-86652fbad891",
        fullName: "Sasuke Uchira",
        userName: "suchira",
        password: passwordUtil.hashPassword("321987"),
        email: "sasuke_uchira_ninja@yahoo.com",
        phoneNumber: "(11) 4444-4444",
        role: "USER"
    })
}