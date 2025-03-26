import { dotenv } from "dotenv";
import { express } from "express";
import { mongoose } from "mongoose";
import { cors } from "cors";
import { bodyParser } from "body-parser";
dotenv.config();

const app = express();

//middlewares:
app.use(cors());
app.use(bodyParser.json());

// conectar ao mongoDB:
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

//importar rotas
import { productRoutes } from "./routes/productRoutes";
import { userRoutes } from "./routes/userRoutes";

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); //operações de usuário

//iniciando servidor:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
