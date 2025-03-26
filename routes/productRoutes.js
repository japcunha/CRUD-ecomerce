import { express } from "express";
import { Product } from "../models/Product";

const router = express.Router();

//criar produto
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

//listar produto:
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(Product);
});

//Atualizar produto;
router.put("/:id", async (req, res) => {});
