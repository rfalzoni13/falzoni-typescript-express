import Customer from "../../../interfaces/entities/register/customer"
import { Column, PrimaryColumn } from "typeorm"
import { UUID } from "crypto"

export class CustomerImpl implements Customer {
    @PrimaryColumn()
    id?: UUID

    @Column({
        length: 128
    })
    public name?: string

    @Column({
        length: 20
    })
    public document?: string

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