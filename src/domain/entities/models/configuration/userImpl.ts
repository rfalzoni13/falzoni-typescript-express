import { Column, PrimaryGeneratedColumn } from "typeorm";
import User from "../../../interfaces/entities/configuration/user";
import { ApiModel, ApiModelProperty } from "swagger-express-ts";
import { UUID } from "crypto";

@ApiModel({
    description: "Objeto de usuário",
    name: "User"
})
export class UserImpl implements User {
    @ApiModelProperty({
        description: "Id do Usuário",
        example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    })
    @PrimaryGeneratedColumn()
    id?: UUID

    @ApiModelProperty({
        description: "Nome completo do Usuário",
        required: true,
        example: "Seiya de Pégaso"
    })
    @Column({
        nullable: false,
        length: 256
    })
    public fullName?: string

    @ApiModelProperty({
        description: "Nick de acesso do Usuário",
        required: true,
        example: "seiyapegaso13"
    })
    @Column({
        nullable: false,
        length: 256
    })
    public userName?: string

    @ApiModelProperty({
        description: "Senha do Usuário",
        required: true,
        example: "123456"
    })
    @Column({
        type: "text"
    })
    public password?: string

    @ApiModelProperty({
        description: "Email do Usuário",
        required: true,
        example: "seiya_pegaso@email.com"
    })
    @Column({
        nullable: false,
        length: 256
    })
    public email?: string

    @ApiModelProperty({
        description: "Celular do Usuário",
        required: true,
        example: "(11) 92222-2222"
    })
    @Column({
        nullable: false,
        length: 128
    })
    public phoneNumber?: string

    @ApiModelProperty({
        description: "Perfil de acesso do Usuário",
        required: true,
        example: "USER"
    })
    @Column({
        length: 20
    })
    public role?: string
}