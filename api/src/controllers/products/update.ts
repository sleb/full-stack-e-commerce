import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { ZodError } from "zod";
import { db } from "../../db";
import { products, productUpdateSchema } from "../../db/schema/products";

export const updateProduct = async (
  { params: { id }, body }: Request,
  res: Response,
) => {
  try {
    const product = productUpdateSchema.parse(body);
    const [result] = await db
      .update(products)
      .set(product)
      .where(eq(products.id, parseInt(id)))
      .returning({ id: products.id });
    res.send(result);
  } catch (e) {
    console.error(e);

    if (e instanceof ZodError) {
      res.status(400).json({ error: e.errors }).send();
    } else {
      res.status(500).json({ error: "Internal Server Error" }).send();
    }
  }
};
