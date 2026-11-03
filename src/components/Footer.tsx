import { Link } from "react-router-dom";
import { FOTOGRAFIAS, SITE_CONFIG } from "../data/site-config";

export default function Footer() {
  const redes = [
    { label: "Instagram", url: SITE_CONFIG.instagram },
    { label: "Facebook", url: SITE_CONFIG.facebook },
    { label: "YouTube", url: SITE_CONFIG.youtube },
  ].filter((rede) => rede.url);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link aria-label="Ayô Capoeira — início" className="footer-brand" to="/">
          <img
            src="/assets/logo/ayo-capoeira-branca.svg"
            alt="Ayô Capoeira"
            width="130"
            height="130"
            loading="lazy"
          />
        </Link>
        <p className="footer-message">
          Cultura que se aprende
          <br />
          em movimento.
        </p>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <Link to="/grupo">O grupo</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/treinos">Treinos</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Conecte-se</span>
          <Link to="/contato">Contato</Link>
          {redes.map((rede) => (
            <a key={rede.label} href={rede.url} target="_blank" rel="noreferrer">
              {rede.label} ↗
            </a>
          ))}
          {redes.length === 0 && <span className="footer-muted">Redes sociais em breve</span>}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ayô Capoeira</span>
        <span className="photo-credits">
          Fotografias:{" "}
          {FOTOGRAFIAS.map((foto, index) => (
            <span key={foto.url}>
              {index > 0 && " · "}
              <a href={foto.url} target="_blank" rel="noreferrer">
                {foto.nome} ({foto.licenca})
              </a>
            </span>
          ))}
          {" · "}Wikimedia Commons
        </span>
      </div>
    </footer>
  );
}
