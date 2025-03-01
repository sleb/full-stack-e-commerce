import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  listProducts,
  updateProduct,
} from "../controllers/products";

const products = Router();

products.get("/", listProducts);
products.get("/:id", getProduct);
products.post("/", createProduct);
products.delete("/:id", deleteProduct);
products.put("/:id", updateProduct);

export default products;
