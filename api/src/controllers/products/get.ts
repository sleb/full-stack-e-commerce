import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "../../db";
import { products } from "../../db/schema/products";

export const getProduct = async ({ params }: Request, res: Response) => {
  const product = await db.query.products.findFirst({
    where: eq(products.id, parseInt(params.id)),
  });

  if (!product) {
    return res.status(404).json({ error: "Product not found" }).send();
  }

  res.json(product).send();
};
