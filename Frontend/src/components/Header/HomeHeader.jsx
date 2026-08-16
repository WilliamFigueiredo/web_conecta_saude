import { Link } from "react-router-dom";
import "../../blocks/header.css";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function HomeHeader() {
  const { user } = useContext(AuthContext);

  return (
    <header className="header">
      {user ? (
        <div className="header__container">
          <div className="header__banner-dashboard"></div>
          <div className="header__content">
            <div className="header__link"></div>
          </div>
        </div>
      ) : (
        <Link to="/login" className="header__container">
          <div className="header__banner-home"></div>
          <div className="header__content">
            <div className="header__link"></div>
          </div>
        </Link>
      )}
    </header>
  );
}
export default HomeHeader;
