import { Link } from "react-router-dom";
import "../../blocks/navbar.css";
import nav__logo from "../../images/navbar/nav__logo.png";
import nav__icon from "../../images/navbar/nav__login-icon.png";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/home">
            <img src={nav__logo} alt="" />
          </Link>
        </div>

        <nav className="nav__menu">
          <Link to="/home" className="nav__link">
            Início
          </Link>

          <Link to="/sobre" className="nav__link">
            Sobre
          </Link>

          {user ? (
            <button className="nav__login" onClick={() => setUser(null)}>
              Sair
            </button>
          ) : (
            <Link to="/login" className="nav__login">
              <img className="nav__link-icon" src={nav__icon} alt="" />
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
