// import "./forms.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import ".././blocks/login.css";

import LogoConectaSaude from "../images/navbar/nav__logo.png"; // image_df0565.png
import IconUser from "../images/login/login__icon_user.png";
import IconLock from "../images/login/login__icon_locked.png";
import LogoGovBr from "../images/login/login__gov_logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.erro);
        return;
      }
      alert(data.mensagem);
    } catch (erro) {
      console.log("Erro ao conectar com o servidor", erro);
    }
  }

  return (
    // Adicionado um container principal para centralizar o formulário
    <div className="login-container">
      <div className="form form--login">
        <img
          className="form__logo"
          src={LogoConectaSaude}
          alt="Logo Conecta Saúde BR"
        />

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

        {/* Ajuste na ordem e estrutura para alinhar com a imagem */}
        <div className="form__options">
          <label className="form__remember">
            <input className="form__checkbox" type="checkbox" />
            Lembrar de mim
          </label>
          <Link className="form__forgot-password" to="#">
            Esqueci minha senha
          </Link>
        </div>

        <button className="form__button" onClick={handleLogin}>
          Entrar
        </button>
        <div className="form__divider">
          <span>ou</span>
        </div>

        <Link className="form__gov-login" to="#">
          <img className="form__gov-logo" src={LogoGovBr} alt="Logo Gov.br" />
          <p className="form__gov-text">Entrar com o Gov.br</p>
        </Link>

        {/* Redirecionamento para o cadastro */}
        <div className="form__auth-redirect">
          <span>Ainda não tem conta?</span>
          <Link className="form__auth-link" to="/register">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
