import { Container } from "inversify"
import { TYPES } from "./types"
import ProductServiceImpl from "../services/stock/productServiceImpl"
import UserService from "../domain/interfaces/services/configuration/userService"
import UserController from "../controllers/configuration/userController"
import CustomerController from "../controllers/register/customerController"
import CustomerService from "../domain/interfaces/services/register/customerService"
import CustomerServiceImpl from "../services/register/customerServiceImpl"
import ProductService from "../domain/interfaces/services/stock/productService"
import ProductController from "../controllers/stock/productController"
import { InversifyExpressServer } from "inversify-express-utils"
import { UserServiceImpl } from "../services/configuration/userServiceImpl"
import UserRepository from "../domain/interfaces/repositories/configuration/userRepository"
import UserRepositoryImpl from "../repositories/configuration/userRepositoryImpl"
import CustomerRepository from "../domain/interfaces/repositories/register/customerRepository"
import CustomerRepositoryImpl from "../repositories/register/customerRepositoryImpl"
import ProductRepository from "../domain/interfaces/repositories/stock/productRepository"
import ProductRepositoryImpl from "../repositories/stock/productRepositoryImpl"


function getContainer(): Container {
    const container = new Container()
    // User 
    container.bind<UserController>(TYPES.UserController).to(UserController).inTransientScope()
    container.bind<UserService>(TYPES.UserService).to(UserServiceImpl).inTransientScope()
    container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl).inTransientScope()

    // Customer
    container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController).inTransientScope()
    container.bind<CustomerService>(TYPES.CustomerService).to(CustomerServiceImpl).inTransientScope()
    container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepositoryImpl).inTransientScope()

    // Product
    container.bind<ProductController>(TYPES.ProductController).to(ProductController).inTransientScope()
    container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl).inTransientScope()
    container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl).inTransientScope()
    return container
}

const dependencyInjection = {
    getServer: function(): InversifyExpressServer {
        const container = getContainer()
        return new InversifyExpressServer(container, null, { rootPath: '/api'})
    }
}

export default dependencyInjection