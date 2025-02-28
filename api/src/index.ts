import express, { json, urlencoded } from "express";
import products from "./routes/products";

const port = 3000;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/products", products);

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
