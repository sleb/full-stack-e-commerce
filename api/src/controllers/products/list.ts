import { Request, Response } from "express";

export const listProducts = (req: Request, res: Response) => {
  res.send("Product List");
};
