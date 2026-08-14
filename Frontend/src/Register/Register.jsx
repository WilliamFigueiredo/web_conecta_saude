import "./forms.css";

function Register() {
  return (
    <div className="form form--register">
      {/* Logo */}
      <img className="form__logo" src="" alt="" />

      {/* Nome Completo */}
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="Nome Completo"
          required
        />
      </div>

      {/* Data de Nascimento */}
      <div className="form__field">
        <input className="form__input" type="date" required />
      </div>

      {/* CPF */}
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="CPF"
          maxLength="14"
          required
        />
      </div>

      {/* Estado */}
      <div className="form__field">
        <select className="form__input" required>
          <option value="">Estado</option>
        </select>
      </div>

      {/* Cidade */}
      <div className="form__field">
        <select className="form__input" required>
          <option value="">Cidade</option>
        </select>
      </div>

      {/* UBS de Referência */}
      <div className="form__field">
        <select className="form__input" required>
          <option value="">UBS de Referência</option>
        </select>
      </div>

      {/* CAPS de Referência */}
      <div className="form__field">
        <select className="form__input">
          <option value="">CAPS de Referência</option>
        </select>
      </div>

      {/* Cartão SUS */}
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="Cartão do SUS"
          maxLength="15"
        />
      </div>

      {/* Botão */}
      <button className="form__button">Cadastrar</button>
    </div>
  );
}

export default Register;
