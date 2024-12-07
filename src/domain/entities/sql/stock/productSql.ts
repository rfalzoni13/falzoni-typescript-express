import { Entity } from "typeorm";
import { ProductImpl } from "../../models/stock/productImpl";

@Entity("product")
export class ProductSql extends ProductImpl {
}