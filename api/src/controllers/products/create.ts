import { Request, Response } from "express";

export const createProduct = ({ body }: Request, res: Response) => {
  res.send(`Product created: ${JSON.stringify(body)}`);
};
