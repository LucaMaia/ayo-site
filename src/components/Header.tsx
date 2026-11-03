import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE_CONFIG } from "../data/site-config";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/eventos", label: "Eventos" },
  { to: "/grupo", label: "O grupo" },
  { to: "/treinos", label: "Treinos" },
  { to: "/contato", label: "Contato" },
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-note">
          <span>Corpo · ritmo · comunidade</span>
          <span>
            {SITE_CONFIG.diasTreino.join(" · ")}{" "}
            <i aria-hidden="true">/</i> {SITE_CONFIG.horario}
          </span>
        </div>
        <div className="header-inner">
          <NavLink
            aria-label="Ayô Capoeira — página inicial"
            className="brand"
            to="/"
            onClick={() => setMenuAberto(false)}
          >
            <img
              src="/assets/logo/ayo-capoeira-oficial.svg"
              alt="Ayô Capoeira"
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
            {SITE_CONFIG.instagram && (
              <a
                aria-label="Acompanhe o Ayô Capoeira no Instagram"
                className="nav-social"
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            )}
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
      {SITE_CONFIG.instagram && (
        <a
          aria-label="Acompanhe o Ayô Capoeira no Instagram"
          className="mobile-instagram"
          href={SITE_CONFIG.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      )}
    </>
  );
}
