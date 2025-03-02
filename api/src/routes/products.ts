import { Request, Router } from "express";
import { checkIdParam } from "../controllers/param-id";
import {
  createProduct,
  deleteProduct,
  getProduct,
  listProducts,
  updateProduct,
} from "../controllers/products";
import { ProductData } from "../db/schema/products";

const products = Router();

export interface UpdateProductRequest extends Request {
  params: {
    id: string;
  };
  body: Partial<ProductData>;
}

products.get("/", listProducts);
products.get("/:id", checkIdParam, getProduct);
products.post("/", createProduct);
products.delete("/:id", checkIdParam, deleteProduct);
products.put("/:id", checkIdParam, updateProduct);

export default products;
