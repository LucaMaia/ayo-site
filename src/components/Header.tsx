import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getWhatsAppLink, SITE_CONFIG } from "../data/site-config";

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

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .6.5l.7 1.5c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.4 2 1.8.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.4.6-.1.5-.4 1-.8 1.3-.5.4-1.1.5-1.7.4-1-.2-2.2-.8-3.4-1.8-1-.8-1.7-1.9-2-2.8-.3-.8-.2-1.7.4-2.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const whatsapp = getWhatsAppLink();

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
            {whatsapp && (
              <a
                aria-label="Fale com a Mestra Michelinha pelo WhatsApp"
                className="nav-social nav-whatsapp"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
              </a>
            )}
            <NavLink
              className="nav-cta"
              to="/treinos"
              onClick={() => setMenuAberto(false)}
            >
              Venha treinar
            </NavLink>
          </nav>
        </div>
      </header>
      {(SITE_CONFIG.instagram || whatsapp) && (
        <div className="mobile-socials" aria-label="Contatos rápidos">
          {SITE_CONFIG.instagram && (
            <a
              aria-label="Acompanhe o Ayô Capoeira no Instagram"
              className="mobile-social mobile-instagram"
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          )}
          {whatsapp && (
            <a
              aria-label="Fale com a Mestra Michelinha pelo WhatsApp"
              className="mobile-social mobile-whatsapp"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
            </a>
          )}
        </div>
      )}
    </>
  );
}
