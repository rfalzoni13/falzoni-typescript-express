import { AppDataSource } from "../../db"
import { CustomerMongo } from "../../domain/entities/mongo/register/customerMongo"
import { CustomerSql } from "../../domain/entities/sql/register/customerSql"
import { Customer } from "../../domain/interfaces/entities/register/customer"
import CustomerRepository from "../../domain/interfaces/repositories/register/customerRepository"
import GlobalConfiguration from "../../utils/globalConfiguration"
import BaseRepositoryImpl from "../base/baseRepositoryImpl"

export default class CustomerRepositoryImpl extends BaseRepositoryImpl<Customer> implements CustomerRepository {
    constructor() {
        super()
        this.repository = GlobalConfiguration.dbDriver == "mongodb" ? 
            AppDataSource.getMongoRepository(CustomerMongo) :
            AppDataSource.getRepository(CustomerSql)
    }
}