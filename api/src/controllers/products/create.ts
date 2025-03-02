import { Request, Response } from "express";
import { ZodError } from "zod";
import { db } from "../../db";
import { productInsertSchema, products } from "../../db/schema/products";

export const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const product = productInsertSchema.parse(body);
    const [result] = await db
      .insert(products)
      .values(product)
      .returning({ id: products.id });
    res.status(201).json(result);
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: `Invalid request body: ${e.message}` });
    } else {
      console.error(`error adding product: ${e}`);
      res.status(500).json({ error: `Error adding product: ${e}` });
    }
  }
};
