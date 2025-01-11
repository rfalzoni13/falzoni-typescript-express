import { MongoRepository } from "typeorm"
import Customer from "../../../domain/interfaces/entities/register/customer"
import CustomerRepository from "../../../domain/interfaces/repositories/register/customerRepository"
import BaseMongoRepositoryImpl from "../base/baseMongoRepository"
import { AppDataSource } from "../../../db"
import { CustomerMongo } from "../../../domain/entities/mongo/register/customerMongo"

export default class CustomerMongoRepositoryImpl extends BaseMongoRepositoryImpl<Customer> implements CustomerRepository {
    constructor(private customerMongoData: MongoRepository<Customer>) {
        customerMongoData = AppDataSource.getMongoRepository(CustomerMongo)
        super(customerMongoData)
    }
}