// import "./forms.css";

function Appointment() {
  return (
    <div
      className="
    
    
    form form--appointment"
    >
      {/* Logo */}
      <img className="form__logo" src="" alt="" />

      {/* Especialidade */}
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="Especialidade"
          required
        />
      </div>

      {/* Unidade de saúde */}
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="Unidade de Saúde"
          required
        />
      </div>

      {/* Data da consulta */}
      <div className="form__field">
        <input className="form__input" type="date" required />
      </div>

      {/* Hora da consulta */}
      <div className="form__field">
        <input className="form__input" type="time" required />
      </div>

      {/* Notas adicionais */}
      <div className="form__field">
        <textarea
          className="form__input form__textarea"
          placeholder="Notas adicionais"
        />
      </div>

      {/* Botão de envio */}
      <button className="form__button">Agendar</button>
    </div>
  );
}

export default Appointment;
