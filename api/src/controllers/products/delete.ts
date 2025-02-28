import { Request, Response } from "express";

export const deleteProduct = ({ params }: Request, res: Response) => {
  res.send(`Product deleted: ${params.id}`);
};
