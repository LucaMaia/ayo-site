import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/eventos", label: "Eventos" },
  { to: "/grupo", label: "O grupo" },
  { to: "/treinos", label: "Treinos" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink
          aria-label="Ayo Capoeira — página inicial"
          className="brand"
          to="/"
          onClick={() => setMenuAberto(false)}
        >
          <img
            src="/assets/logo/ayo-capoeira-oficial.svg"
            alt="Ayo Capoeira"
            width="64"
            height="64"
          />
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="main-navigation"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span />
          <span />
        </button>
        <nav
          aria-label="Navegação principal"
          className={`main-navigation${menuAberto ? " is-open" : ""}`}
          id="main-navigation"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuAberto(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            className="nav-cta"
            to="/treinos"
            onClick={() => setMenuAberto(false)}
          >
            Venha treinar <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
