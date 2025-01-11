import { CustomerDto } from "../../../dto/register/customerDto"
import Customer from "../../entities/register/customer"
import BaseService from "../base/baseService"

export default interface CustomerService extends BaseService<CustomerDto, Customer> {}