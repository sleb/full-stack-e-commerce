import { NextFunction, Request, Response } from "express";

export const checkIdParam = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid ID" }).send();
  } else {
    next();
  }
};
