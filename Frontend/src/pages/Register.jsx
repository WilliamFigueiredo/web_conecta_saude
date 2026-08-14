import { useState } from "react";
import { Link } from "react-router-dom";

import ".././blocks/login.css";
import LogoConectaSaude from "../images/navbar/nav__logo.png";
import IconUser from "../images/login/login__icon_user.png";
import IconLock from "../images/login/login__icon_locked.png";

function Register() {
  const [cartaoSus, setCartaoSus] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
}

async function handleRegister() {
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha, cartaoSus }),
    });
    const data = await response.json;
    if (!response.ok) {
      alert(data.erro)
      return;
    }
  } catch (erro) {
    console.log("Erro ao conectar com o servidor");
  }

  return (
    <div className="login-container">
      <div className="form form--register">
        <img
          className="form__logo"
          src={LogoConectaSaude}
          alt="Logo Conecta Saúde BR"
        />

        {/* Input de Cartão do SUS */}
        <div className="form__field">
          <img
            className="form__field-icon"
            src={IconUser}
            alt="Ícone de cartão do SUS"
          />
          <input
            className="form__input"
            type="text"
            placeholder="Cartão do SUS (Somente números)"
            maxLength="15"
            value={cartaoSus}
            onChange={(e) => setCartaoSus(e.target.value)}
            required
          />
        </div>

        {/* Input de Email */}
        <div className="form__field">
          <img
            className="form__field-icon"
            src={IconUser}
            alt="Ícone de email"
          />
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Input de Senha */}
        <div className="form__field">
          <img
            className="form__field-icon"
            src={IconLock}
            alt="Ícone de cadeado"
          />
          <input
            className="form__input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button className="form__button" onClick={handleRegister}>
          Cadastrar
        </button>

        {/* Redirecionamento para o login, equivalente ao form__divider + form__gov-login do Login.jsx */}
        <div className="form__auth-redirect">
          <span>Já tem uma conta?</span>
          <Link className="form__auth-link" to="/login">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
