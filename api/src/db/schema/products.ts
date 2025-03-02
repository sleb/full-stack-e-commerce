import {
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  image: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
});

export type ProductData = typeof products.$inferInsert;
export type Product = typeof products.$inferSelect;

export const productInsertSchema = createInsertSchema(products);
export const productSelectSchema = createSelectSchema(products);
export const productUpdateSchema = createUpdateSchema(products);
