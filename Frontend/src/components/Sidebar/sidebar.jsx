function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__image-container">
        <img src="" alt="" className="sidebar__image" />
      </div>

      <p className="sidebar__text">
        {" "}
        <span className="sidebar__text-title">Idade:</span> {user.age}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">CPF:</span> {user.cpf}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">Estado:</span> {user.state}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">Cidade:</span> {user.city}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">UBS de Referência:</span>{" "}
        {user.ubs}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">Caps de referência:</span>{" "}
        {user.caps}
      </p>
      <p className="sidebar__text">
        <span className="sidebar__text-title">Cartão do SUS:</span>{" "}
        {user.suscard}
      </p>
    </div>
  );
}

export default Sidebar;
