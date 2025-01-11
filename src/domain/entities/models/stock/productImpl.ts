import Product from "../../../interfaces/entities/stock/product"
import { Column, PrimaryColumn } from "typeorm"
import { UUID } from "crypto"

export class ProductImpl implements Product {
    @PrimaryColumn()
    id?: UUID

    @Column({
        length: 512
    })
    public name?: string

    @Column({
        nullable: false,
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public price?: number

    @Column({
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public discount?: number
}