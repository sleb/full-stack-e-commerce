import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  listProducts,
  updateProduct,
} from "../controllers/products";

const products = Router();

products.get("/", (req, res) => listProducts(req, res));
products.get("/:id", (req, res) => getProduct(req, res));
products.post("/", (req, res) => createProduct(req, res));
products.delete("/:id", (req, res) => deleteProduct(req, res));
products.put("/:id", (req, res) => updateProduct(req, res));

export default products;
