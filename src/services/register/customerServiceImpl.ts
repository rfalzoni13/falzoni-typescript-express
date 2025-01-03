import { inject, injectable } from "inversify";
import CustomerService from "../../domain/interfaces/services/register/customerService";
import BaseServiceImpl from "../base/baseServiceImpl";
import { TYPES } from "../../di/types";
import CustomerRepository from "../../domain/interfaces/repositories/register/customerRepository";
import Customer from "../../domain/interfaces/entities/register/customer";
import { CustomerDto } from "../../domain/dto/register/customerDto";

@injectable()
export default class CustomerServiceImpl extends BaseServiceImpl<CustomerDto, Customer> implements CustomerService {
    constructor(@inject(TYPES.CustomerRepository) repository: CustomerRepository) {
        super(repository)
    }
}