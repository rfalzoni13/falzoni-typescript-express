import Customer from "../../../interfaces/entities/register/customer";
import { Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiModel, ApiModelProperty } from "swagger-express-ts";
import { UUID } from "crypto";

@ApiModel({
    description: "Objeto de cliente",
    name: "Customer"
})
export class CustomerImpl implements Customer {
    @ApiModelProperty({
        description: "Id de registro do cliente",
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    })
    @PrimaryColumn()
    id?: UUID
    
    @ApiModelProperty({
        description: "Nome do Cliente",
        required: true,
        example: "Monkey D. Luffy"
    })
    @Column({
        nullable: false,
        length: 128
    })
    public name?: string

    @ApiModelProperty({
        description: "Documento do Cliente",
        required: true,
        example: "123.456.789-00"
    })
    @Column({
        nullable: false,
        length: 20
    })
    public document?: string
}