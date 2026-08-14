import mongoose from "mongoose";
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Conectado");
  } catch (erro) {
    console.error("Erro ao conectar no MongoDB:", erro);
    process.exit(1);
  }
}
