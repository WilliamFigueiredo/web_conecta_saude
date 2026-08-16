import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ".././blocks/login.css";
import LogoConectaSaude from "../images/navbar/nav__logo.png";
import IconUser from "../images/login/login__icon_user.png";
import IconLock from "../images/login/login__icon_locked.png";

function Register() {
  const [cartaoSus, setCartaoSus] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleRegister() {
    if (!cartaoSus || !email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    if (cartaoSus.length < 6 || isNaN(cartaoSus)) {
      setErro("Cartão inválido");
      return;
    }

    if (!email.includes("@")) {
      setErro("Email inválido");
      return;
    }

    if (senha.length < 6) {
      setErro("Senha inválida");
      return;
    }

    setErro("");
    alert("Cadastro realizado com sucesso");
    navigate("/login");
  }

  return (
    <div className="login-container">
      <div className="form form--register">
        <img
          className="form__logo"
          src={LogoConectaSaude}
          alt="Logo Conecta Saúde BR"
        />

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
            minLength="6"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {erro && <p className="form__error">{erro}</p>}

        <button className="form__button" onClick={handleRegister}>
          Cadastrar
        </button>

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
