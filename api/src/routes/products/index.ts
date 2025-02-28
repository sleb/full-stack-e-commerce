import { Router } from "express";

const products = Router();

products.get("/", (req, res) => {
  res.send("Products");
});

products.get("/:id", (req, res) => {
  res.send(`Product ${req.params.id}`);
});

products.post("/", (req, res) => {
  res.send("New Product created");
});

export default products;
