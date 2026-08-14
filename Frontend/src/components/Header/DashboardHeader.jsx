import { Link } from "react-router-dom";
import "../../blocks/header.css";

function HeaderHome () {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__banner-dashboard"> </div>
        <div className="header__content">
          <Link className="header__link" to="#"></Link>
        </div>
      </div>
    </header>
  );
}
export default HeaderHome;
