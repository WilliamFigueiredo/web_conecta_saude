import express from "express";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); //utilizar isso em todos os backends
app.use(authRouter); //isso pluga as rotas do routers

app.get("/", (reqs, res) => {
  res.send("servidor rodando!");
});

export default app;
