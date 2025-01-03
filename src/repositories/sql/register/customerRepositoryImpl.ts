import { Repository } from "typeorm"
import BaseRepositoryImpl from "../base/baseRepositoryImpl"
import { CustomerSql } from "../../../domain/entities/sql/register/customerSql"
import Customer from "../../../domain/interfaces/entities/register/customer"
import CustomerRepository from "../../../domain/interfaces/repositories/register/customerRepository"
import { AppDataSource } from "../../../db"

export default class CustomerRepositoryImpl extends BaseRepositoryImpl<Customer> implements CustomerRepository {
    constructor(private customerData: Repository<Customer>) {
        customerData = AppDataSource.getRepository(CustomerSql)
        super(customerData)
    }
}