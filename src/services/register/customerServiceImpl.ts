import { inject, injectable } from "inversify";
import CustomerService from "../../domain/interfaces/services/register/customerService";
import BaseServiceImpl from "../base/baseServiceImpl";
import { Customer } from "../../domain/interfaces/entities/register/customer";
import { TYPES } from "../../di/types";
import CustomerRepository from "../../domain/interfaces/repositories/register/customerRepository";

@injectable()
export default class CustomerServiceImpl extends BaseServiceImpl<Customer> implements CustomerService {
    constructor(@inject(TYPES.CustomerRepository) repository: CustomerRepository) {
        super(repository)
    }
}