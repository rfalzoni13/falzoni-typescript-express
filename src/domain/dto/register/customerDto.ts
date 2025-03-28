import { UUID } from "crypto"
import { BaseDto } from "../base/baseDto"

export class CustomerDto extends BaseDto {
    public name?: string
    public document?: string
    public created?: Date
    public Modified?: Date

    constructor(id: UUID, name: string | null, document: string | null, created: Date | null, modified: Date | null) {
        super()
        this.id = id
        this.name = name!
        this.document = document!
        this.created = created!
        this.Modified = modified!
    }
}