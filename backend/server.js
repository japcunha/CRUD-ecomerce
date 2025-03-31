import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

//middlewares:
const app = express();

app.use(cors());  //CORS é um mecanismo de segurança dos navegadores que bloqueia requisições entre diferentes domínios (por padrão)
//permite que outras origens (como seu frontend) façam requisições para o backend.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// conectar ao mongoDB:
mongoose
  .connect("mongodb+srv://joaneAPC:batat4@joanepc.0vxxy.mongodb.net/?retryWrites=true&w=majority&appName=joanepc")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("API Rodando...");
});

//importar rotas
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); //operações de usuário

//iniciando servidor:
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
