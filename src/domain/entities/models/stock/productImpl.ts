import Product from "../../../interfaces/entities/stock/product";
import { Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiModel, ApiModelProperty } from "swagger-express-ts";
import { UUID } from "crypto";

@ApiModel({
    description: "Objeto de produto",
    name: "Product"
})
export class ProductImpl implements Product {
    @ApiModelProperty({
        description: "Id de registro do produto",
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    })
    @PrimaryColumn()
    id?: UUID
    
    @ApiModelProperty({
        description: "Nome do Produto",
        required: true,
        example: "Vídeo Game PolyStation"
    })
    @Column({
        length: 512
    })
    public name?: string

    @ApiModelProperty({
        description: "Preço do produto",
        required: true,
        example: 399.99
    })
    @Column({
        nullable: false,
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public price?: number

    @ApiModelProperty({
        description: "Desconto no preço do produto",
        required: true,
        example: 0.5
    })
    @Column({
        type: "decimal",
        precision: 18,
        scale: 2
    })
    public discount?: number
}