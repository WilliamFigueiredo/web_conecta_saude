import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function register(req, res) {
  try {
    const { email, senha, cartaoSus } = req.body;
    if (!email || !senha || !cartaoSus) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { cartaoSus }],
    });
    if (existingUser) {
      return res.status(409).json({ erro: "Usuário já cadastrado" });
    }

    const encryptPassword = await bcrypt.hash(senha, 10);

    const newUser = await User.create({
      email,
      senha: encryptPassword,
      cartaoSus,
    });
    return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro no servidor" });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ erro: `Email inválidas` });
    }
    const correctPassword = await bcrypt.compare(senha, user.senha);
    if (!correctPassword) {
      return res.status(401).json({ erro: `Senha inválida` });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(200)
      .json({ mensagem: "Login realizado com sucesso", token });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro no servidor" });
  }
}
