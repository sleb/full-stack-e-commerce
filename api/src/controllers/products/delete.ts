import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "../../db";
import { products } from "../../db/schema/products";

export const deleteProduct = async (
  { params, path }: Request,
  res: Response,
) => {
  try {
    await db.delete(products).where(eq(products.id, parseInt(params.id)));
    res.status(204).send();
  } catch (e) {
    console.error(`Error deleting product: ${e}`);
    res
      .status(500)
      .json({ error: `Error deleting product: ${e}` })
      .send();
  }
};
