import { Link } from "react-router-dom";
import "../../blocks/footer.css";

import footer__logogov from "../../images/footer/footer__logo-gov.png";
import footer__logosus from "../../images/footer/footer__logo-sus.png";

import footer__logo_cellphone from "../../images/footer/footer__logo_cellphone.png";
import footer__logo_message from "../../images/footer/footer__logo_message.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* 1 - Direitos reservados */}
        <div className="footer__about">
          <p className="footer__about-text">
            Portal institucional fictício desenvolvido para fins acadêmicos e de
            demonstração. Inspirado nos serviços digitais de saúde pública
            brasileira. Todos os direitos reservados ©
          </p>
        </div>

        {/* 2 - Logos: SUS e Gov */}
        <div className="footer__logos">
          <img
            className="footer__logo footer__logo--sus"
            src={footer__logosus}
            alt=""
          />

          <img
            className="footer__logo footer__logo--gov"
            src={footer__logogov}
            alt=""
          />
        </div>

        {/* 3 - Links */}
        <div className="footer__links">
          <div className="footer__links-list">
            <Link className="footer__link" to="#">
              • Política de Privacidade
            </Link>

            <Link className="footer__link" to="#">
              • Termos de Uso
            </Link>

            <Link className="footer__link" to="#">
              • Lei Geral de Proteção de Dados (LGPD)
            </Link>

            <Link className="footer__link" to="#">
              • Acessibilidade
            </Link>
          </div>
        </div>

        {/* 4 - Contatos (Hierarquia Reorganizada) */}
        <div className="footer__contacts">
          <div className="footer__contacts-list">
            {/* Bloco Central de Atendimento */}
            <div className="footer__contact-group">
              <p className="footer__contact-title">Central de Atendimento:</p>
              <div className="footer__contact-container">
                <img
                  className="footer__contact-icon"
                  src={footer__logo_message}
                  alt=""
                />
                <p className="footer__contact-text">0800 701 2026</p>
              </div>
            </div>

            {/* Bloco SAC */}
            <div className="footer__contact-group">
              <p className="footer__contact-title">SAC:</p>
              <div className="footer__contact-container">
                <img
                  className="footer__contact-icon"
                  src={footer__logo_message}
                  alt=""
                />
                <p className="footer__contact-text">0800 702 2028</p>
              </div>
            </div>

            {/* Bloco E-mails */}
            <div className="footer__contact-group footer__contact-group--emails">
              <div className="footer__contact-container">
                <img
                  className="footer__contact-icon"
                  src={footer__logo_cellphone}
                  alt=""
                />
                <p className="footer__contact-text">
                  atendimento@conectasaude.gov.demo
                </p>
              </div>

              <div className="footer__contact-container">
                <img
                  className="footer__contact-icon"
                  src={footer__logo_cellphone}
                  alt=""
                />
                <p className="footer__contact-text">
                  suporte@conectasaude.gov.demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
