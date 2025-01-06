import { Column, PrimaryColumn } from "typeorm";
import User from "../../../interfaces/entities/configuration/user";
import { UUID } from "crypto";

export class UserImpl implements User {
    @PrimaryColumn()
    id?: UUID

    @Column({
        nullable: false,
        length: 256
    })
    public fullName?: string

    @Column({
        nullable: false,
        length: 256
    })
    public userName?: string

    @Column({
        type: "text"
    })
    public password?: string

    @Column({
        nullable: false,
        length: 256
    })
    public email?: string

    @Column({
        nullable: false,
        length: 128
    })
    public phoneNumber?: string

    @Column({
        length: 20,
        nullable: false
    })
    public role?: string
}