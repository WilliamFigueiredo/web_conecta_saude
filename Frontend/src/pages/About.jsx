import "../blocks/staticPage.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-page__container">
        <h1 className="about-page__title">Sobre o Conecta Saúde BR</h1>
        <p className="about-page__text">
          O Conecta Saúde BR nasceu com o objetivo de aproximar os usuários do
          SUS dos serviços de saúde pública, reunindo prontuário eletrônico,
          acompanhamento nutricional, orientação de exercícios e um assistente
          virtual em um só lugar.
        </p>
        <p className="about-page__text">
          Acreditamos que o acesso à informação de saúde deve ser simples,
          rápido e acessível a todos, em qualquer lugar do Brasil.
        </p>
        <p className="about-page__text">
          Este é um projeto desenvolvido com foco em usabilidade, acessibilidade
          e na aproximação entre tecnologia e saúde pública.
        </p>
      </div>
    </div>
  );
}

export default About;
