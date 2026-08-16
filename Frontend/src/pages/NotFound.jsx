import { Link } from "react-router-dom";
import "../blocks/staticPage.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">Página não encontrada</h1>
        <p className="not-found-page__text">
          O link que você acessou não existe ou foi movido.
        </p>
        <Link to="/home" className="not-found-page__link">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
