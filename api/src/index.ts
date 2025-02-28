import express from "express";
import products from "./routes/products";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", products);

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
