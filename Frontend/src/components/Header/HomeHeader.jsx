import { Link } from "react-router-dom";
import "../../blocks/header.css";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function HomeHeader() {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <Link to="/login" className="header__container">
        <div
          className={user ? "header__banner-dashboard" : "header__banner-home"}
        ></div>{" "}
        <div className="header__content">
          <div className="header__link" to="#"></div>
        </div>
      </Link>
    </header>
  );
}
export default HomeHeader;
