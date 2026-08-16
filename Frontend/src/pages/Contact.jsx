import "../blocks/staticPage.css";

import footer__logo_cellphone from "../images/footer/footer__logo_cellphone.png";
import footer__logo_message from "../images/footer/footer__logo_message.png";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <h1 className="contact-page__title">Fale Conosco</h1>
        <p className="contact-page__text">
          Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato
          com a nossa equipe pelos canais abaixo.
        </p>

        <div className="contact-page__contact-list">
          <div className="contact-page__contact-item">
            <span className="contact-page__contact-label">Email</span>
            <div className="contact-page__contact-value-container">
              <img
                className="contact-page__contact-icon"
                src={footer__logo_cellphone}
                alt=""
              />
              <span className="contact-page__contact-value">
                contato@conectasaude.com.br
              </span>
            </div>
          </div>

          <div className="contact-page__contact-item">
            <span className="contact-page__contact-label">Telefone</span>
            <div className="contact-page__contact-value-container">
              <img
                className="contact-page__contact-icon"
                src={footer__logo_message}
                alt=""
              />
              <span className="contact-page__contact-value">
                0800 000 0000
              </span>
            </div>
          </div>

          <div className="contact-page__contact-item">
            <span className="contact-page__contact-label">
              Horário de atendimento
            </span>
            <span className="contact-page__contact-value">
              Segunda a sexta, das 8h às 18h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
