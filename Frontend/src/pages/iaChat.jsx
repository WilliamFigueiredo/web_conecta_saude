import React, { useState } from "react";
import ".././blocks/iaChat.css";

// Você pode importar a imagem aqui se for usá-la como um asset
// import backgroundSuszinho from "../../images/background_suszinho.png";

function IaChat() {
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputVal }]);
    setInputVal("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Olá! Sou o SUSzinho, o assistente virtual do Conecta Saúde BR. Como posso te ajudar hoje?",
        },
      ]);
    }, 1000);
  };

  return (
    <section className="ia-chat">
      <div className="ia-chat__container">
        {/* O título foi movido para DENTRO do quadrado */}
        {/* <h1 className="ia-chat__title">Fale com a Nossa IA</h1> */}

        {/* Quadro Único Integro (Título + Mensagens + Input) */}
        <div className="ia-chat__box">
          {/* Novo local do Título */}
          <h1 className="ia-chat__title">Fale com o SUSzinho</h1>

          {/* Área Interna de Mensagens (com classe condicional para o background) */}
          <div
            className={`ia-chat__content ${messages.length > 0 ? "ia-chat__content--history" : ""}`}
          >
            {messages.length === 0 ? (
              <div className="ia-chat__welcome">
                <p className="ia-chat__welcome-text">
                  Tire suas dúvidas sobre consultas, exames, vacinas e serviços
                  do SUS.
                </p>
                <div className="ia-chat__suggestions">
                  <button
                    className="ia-chat__suggestion-btn"
                    onClick={() => setInputVal("Como agendar uma consulta?")}
                  >
                    "Como agendar uma consulta?"
                  </button>
                  <button
                    className="ia-chat__suggestion-btn"
                    onClick={() =>
                      setInputVal("Quais são as vacinas disponíveis?")
                    }
                  >
                    "Quais são as vacinas disponíveis?"
                  </button>
                </div>
              </div>
            ) : (
              <div className="ia-chat__history">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`ia-chat__message ${
                      msg.sender === "user"
                        ? "ia-chat__message--user"
                        : "ia-chat__message--ai"
                    }`}
                  >
                    <p className="ia-chat__message-text">{msg.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Embutido no Quadro */}
          <form className="ia-chat__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="ia-chat__input"
              placeholder="Digite sua dúvida aqui..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="ia-chat__submit-btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default IaChat;
