import { Request, Response } from "express";
import { db } from "../../db";

export const listProducts = async (req: Request, res: Response) => {
  const products = await db.query.products.findMany();
  res.json(products);
};
