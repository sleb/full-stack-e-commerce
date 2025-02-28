import { Request, Response } from "express";

export const updateProduct = ({ params, body }: Request, res: Response) => {
  res.send(`Product ${params.id} updated to: ${JSON.stringify(body)}`);
};
