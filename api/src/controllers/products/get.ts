import { Request, Response } from "express";

export const getProduct = ({ params }: Request, res: Response) => {
  res.send(`Product retrieved (${params.id})`);
};
