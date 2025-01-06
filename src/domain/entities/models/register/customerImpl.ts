import Customer from "../../../interfaces/entities/register/customer";
import { Column, PrimaryColumn } from "typeorm";
import { UUID } from "crypto";

export class CustomerImpl implements Customer {
    @PrimaryColumn()
    id?: UUID

    @Column({
        nullable: false,
        length: 128
    })
    public name?: string

    @Column({
        nullable: false,
        length: 20
    })
    public document?: string
}