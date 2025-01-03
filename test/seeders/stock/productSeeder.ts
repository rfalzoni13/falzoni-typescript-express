import { Repository } from "typeorm"
import Product from '../../../src/domain/interfaces/entities/stock/product';

export const productSeed = (data: Repository<Product>) => {
    data.insert({
        id: "ba32c78a-465a-46aa-ade1-0e3fecbf802b",
        name: "Caderno Power Rangers",
        price: 29.99,
        discount: 0.00
    })
    data.insert({
        id: "832a2071-bad3-4c1a-839e-6373186ed77c",
        name: "Video Game Super Nintendo",
        price: 399.99,
        discount: 40.00
    })
    data.insert({
        id: "b2b8ad3f-c054-4220-b75d-66e0dcdb478e",
        name: "Notebook Gamer",
        price: 8999.99,
        discount: 25.00
    })
}