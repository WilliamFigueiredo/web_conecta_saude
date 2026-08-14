import { Link } from "react-router-dom";
// import "../../blocks/footer.css";

function Content() {
  return (
    <container className="container">
      {/* Container DASHBOARD */}

      <div className="content__container" id="content-dashboard">
        {/* Histórico Clínico */}
        <Link to="#" className="content-box content-box-dashboard">
          <img className="content__icon" src="" alt="" />
          <h1 className="content_title">Histórico Clínico</h1>
          <p className="content_paragraph">
            Consulte e baixe suas receitas médicas de forma rápida, segura e
            sempre que precisar.
          </p>
        </Link>
        {/* Exames*/}
        <Link to="#" className="content-box content-box-dashboard">
          <img className="content__icon" src="" alt="" />
          <h1 className="content_title">Exames</h1>
          <p className="content_paragraph">
            Consulte seus exames realizados e faça o download dos resultados
            disponíveis.
          </p>
        </Link>
        {/* Vacinação */}
        <Link to="#" className="content-box content-box-dashboard">
          <img className="content__icon" src="" alt="" />
          <h1 className="content_title">Vacinação</h1>
          <p className="content_paragraph">
            Visualize seu histórico de vacinas e acompanhe as doses registradas.
          </p>
        </Link>
        {/* Agendamentos */}
        <Link to="#" className="content-box content-box-dashboard">
          <img className="content__icon" src="" alt="" />
          <h1 className="content_title">Agendamentos</h1>
          <p className="content_paragraph">
            Confira suas consultas agendadas e acompanhe datas, horários e
            locais de atendimento.
          </p>
        </Link>
      </div>
    </container>
  );
}

export default Content;
