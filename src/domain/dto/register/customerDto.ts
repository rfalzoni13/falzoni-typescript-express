import { UUID } from "crypto";
import { BaseDto } from "../base/baseDto";

export class CustomerDto extends BaseDto {
    public name?: string
    public document?: string

    constructor(id: UUID, name: string | null, document: string | null) {
        super()
        this.id = id
        this.name = name!
        this.document = document!
    }
}