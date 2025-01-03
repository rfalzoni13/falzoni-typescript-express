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
import CustomerRepository from "../domain/interfaces/repositories/register/customerRepository"
import ProductRepository from "../domain/interfaces/repositories/stock/productRepository"
import UserRepositoryImpl from "../repositories/sql/configuration/userRepositoryImpl"
import CustomerRepositoryImpl from "../repositories/sql/register/customerRepositoryImpl"
import ProductRepositoryImpl from "../repositories/sql/stock/productRepositoryImpl"
import GlobalConfiguration from "../utils/globalConfiguration"
import UserMongoRepositoryImpl from "../repositories/mongo/configuration/userMongoRepositoryImpl"
import CustomerMongoRepositoryImpl from "../repositories/mongo/register/customerMongoRepositoryImpl"
import ProductMongoRepositoryImpl from "../repositories/mongo/stock/productMongoRepositoryImpl"

const container = new Container()

function getRepositoryContainer(): void {

    if(GlobalConfiguration.dbDriver === "mongodb") {
        // MongoDb
        container.bind<UserRepository>(TYPES.UserRepository).to(UserMongoRepositoryImpl).inTransientScope()
        container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerMongoRepositoryImpl).inTransientScope()
        container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductMongoRepositoryImpl).inTransientScope()
    } else {
        // SQL
        container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl).inTransientScope()
        container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepositoryImpl).inTransientScope()
        container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl).inTransientScope()
    }
}

function getContainer(): Container {
    // User 
    container.bind<UserController>(TYPES.UserController).to(UserController).inTransientScope()
    container.bind<UserService>(TYPES.UserService).to(UserServiceImpl).inTransientScope()
    
    // Customer
    container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController).inTransientScope()
    container.bind<CustomerService>(TYPES.CustomerService).to(CustomerServiceImpl).inTransientScope()

    // Product
    container.bind<ProductController>(TYPES.ProductController).to(ProductController).inTransientScope()
    container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl).inTransientScope()    

    getRepositoryContainer()

    return container
}

const dependencyInjection = {
    getInversifyServer: function(): InversifyExpressServer {
        const container = getContainer()
        return new InversifyExpressServer(container, null, { rootPath: '/api'})
    }
}

export default dependencyInjection