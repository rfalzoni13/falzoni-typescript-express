import { Repository } from "typeorm"
import Customer from '../../../src/domain/interfaces/entities/register/customer'

export const customerSeed = (data: Repository<Customer>) => {
    data.insert({
        id: "59ac5877-6017-4d89-9013-110de91c444c",
        name: "Saori Kido",
        document: "321.456.987-12",
        created: new Date(2024, 2, 4, 15, 28, 46)
    })
    data.insert({
        id: "b6d833ff-1563-46cd-b529-22836b846128",
        name: "Metal Greymon",
        document: "987.456.112-01",
        created: new Date(2020, 11, 10, 19, 2, 38)
    })
    data.insert({
        id: "610b1b76-a278-4f88-8d6d-4c33c831b2da",
        name: "Mano War",
        document: "123.123.321-11",
        created: new Date(2025, 0, 31, 8, 4, 59)
    })
    data.insert({
        id: "95d51124-1858-4725-9359-6861a3012a1b",
        name: "Shao Kahn",
        document: "111.222.333-66",
        created: new Date(2023, 10, 28, 16, 8, 10)
    })
}