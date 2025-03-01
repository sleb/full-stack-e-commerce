import {
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  image: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
  quantity: integer().default(0),
});
