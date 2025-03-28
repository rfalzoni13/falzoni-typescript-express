import { UUID } from "crypto"
import GlobalConfiguration from "../../../utils/globalConfiguration"
import { ProductImpl } from "../../entities/models/stock/productImpl"
import { ProductMongo } from "../../entities/mongo/stock/productMongo"
import Product from "../../interfaces/entities/stock/product"
import { BaseDto } from "../base/baseDto"

export class ProductDto extends BaseDto {
    public name?: string
    public price?: number
    public discount?: number
    public created?: Date
    public modified?: Date

    constructor(id: UUID, name: string | null, price: number | null, discount: number | null, created: Date | null, modified: Date | null) {
        super()
        this.id = id
        this.name = name!
        this.price = price!
        this.discount = discount!
        this.created = created!
        this.modified = modified!
    }
}