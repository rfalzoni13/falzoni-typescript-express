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
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public price?: number

    @Column({
        nullable: true,
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public discount?: number

    @Column({
        type: "datetime"
    })
    public created?: Date

    @Column({
        nullable: true,
        type: "datetime"
    })
    public modified?: Date
}