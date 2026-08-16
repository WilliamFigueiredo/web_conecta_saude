import React, { useContext } from "react";
import "../../blocks/homeContent.css";

import Prontuario from "../../pages/Prontuario";
import Nutrition from "../../pages/Nutrition";
import Exercises from "../../pages/Exercises";
import IaChat from "../../pages/iaChat";

import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import IconLock from "../../images/login/login__icon_locked.png";

function HomeContent() {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-content">
      <div className="home-content__container">
        {/* Item 1: Prontuário Eletrônico Único */}
        <Link to={user ? "/prontuario" : "/login"}>
          <div
            className={`home-content__card ${user ? "" : "home-content__card--locked"}`}
          >
            <div className="home-content__icon" id="icon__prontuario"></div>
            <h3 className="home-content__card-title">
              Prontuário Eletrônico Único
            </h3>
            <p className="home-content__card-text">
              Acesse o registro das suas consultas, exames e vacinas e
              informações médicas.
            </p>

            <div className="home-content__card-lock-overlay">
              <img
                className="home-content__lock-icon"
                src={IconLock}
                alt="Ícone de cadeado"
              />
              <p className="home-content__lock-text">
                Você precisa entrar para acessar esse menu
              </p>
            </div>
          </div>
        </Link>
        {/* Item 2: Nutrição */}
        <Link to={user ? "/nutrition" : "/login"}>
          <div
            className={`home-content__card ${user ? "" : "home-content__card--locked"}`}
          >
            <div className="home-content__icon" id="icon__nutrition"></div>
            <h3 className="home-content__card-title">Nutrição</h3>
            <p className="home-content__card-text">
              Consulte seu histórico nutricional recomendado pelo profissional
              de saúde.
            </p>

            <div className="home-content__card-lock-overlay">
              <img
                className="home-content__lock-icon"
                src={IconLock}
                alt="Ícone de cadeado"
              />
              <p className="home-content__lock-text">
                Você precisa entrar para acessar esse menu
              </p>
            </div>
          </div>
        </Link>
        {/* Item 3: Exercícios */}
        <Link to={user ? "/exercises" : "/login"}>
          <div
            className={`home-content__card ${user ? "" : "home-content__card--locked"}`}
          >
            <div className="home-content__icon" id="icon__exercices"></div>
            <h3 className="home-content__card-title">Exercícios</h3>
            <p className="home-content__card-text">
              Visualize sua tabela de exercícios físicos direcionados por um
              profissional de saúde do SUS.
            </p>

            <div className="home-content__card-lock-overlay">
              <img
                className="home-content__lock-icon"
                src={IconLock}
                alt="Ícone de cadeado"
              />
              <p className="home-content__lock-text">
                Você precisa entrar para acessar esse menu
              </p>
            </div>
          </div>
        </Link>
        {/* Item 4: Suszinho */}

        <Link to={user ? "/iaChat" : "/login"}>
          <div
            className={`home-content__card ${user ? "" : "home-content__card--locked"}`}
          >
            <div className="home-content__icon" id="icon__suszinho"></div>
            <h3 className="home-content__card-title">Suszinho</h3>
            <p className="home-content__card-text">
              Fale com a nossa Inteligência Artificial para sanar suas dúvidas
            </p>

            <div className="home-content__card-lock-overlay">
              <img
                className="home-content__lock-icon"
                src={IconLock}
                alt="Ícone de cadeado"
              />
              <p className="home-content__lock-text">
                Você precisa entrar para acessar esse menu
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeContent;
