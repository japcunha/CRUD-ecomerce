import express  from "express";
import  Product  from "../models/Product.js";
 const app = express
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
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
});

// Deletar Produto
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Produto removido" });
});

export default router; 
