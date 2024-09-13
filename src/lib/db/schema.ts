import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
    productId: integer("product_id").primaryKey(),
    name: text("name"),
    price: integer("price"),
});