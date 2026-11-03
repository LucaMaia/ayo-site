import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import TrainingSchedule from "../components/TrainingSchedule";
import { EVENTOS_VISIVEIS } from "../data/events";

export default function Home() {
  const proximosEventos = EVENTOS_VISIVEIS.slice(0, 2);

  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="/assets/images/capoeira-movimento.jpg"
          alt="Roda de capoeira com um praticante em movimento"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <span className="hero-kicker">
            <span className="gold-dot" /> Capoeira é encontro
          </span>
          <h1>
            Raiz que
            <br />
            <span>se move.</span>
          </h1>
          <p>
            Uma expressão viva de cultura, musicalidade e comunidade.
            Entre na roda com o Ayô Capoeira.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/treinos">
              Conheça os treinos
            </Link>
            <Link className="hero-text-link" to="/grupo">
              Descubra o grupo
            </Link>
          </div>
        </div>
        <span className="hero-index">01 — AYÔ CAPOEIRA</span>
        <a className="hero-scroll" href="#encontro">
          <span /> Role para explorar
        </a>
      </section>

      <section className="intro-section section-pad" id="encontro">
        <div className="page-width intro-grid">
          <div>
            <span className="eyebrow">Corpo, ritmo, comunidade</span>
            <h2 className="display-heading">
              A roda abre
              <br />
              espaço para <em>todos.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Capoeira é jogo, música e troca. No Ayô, cada movimento é um
              convite para aprender, compartilhar e fazer parte de uma cultura
              que segue viva.
            </p>
            <Link className="button button-ghost" to="/grupo">
              Conheça o Ayô
            </Link>
          </div>
        </div>
      </section>

      <section className="training-band section-pad">
        <div className="page-width training-band-grid">
          <div className="training-band-copy">
            <span className="eyebrow eyebrow-light">Encontre seu ritmo</span>
            <h2 className="display-heading">
              A próxima roda
              <br />
              começa com você.
            </h2>
            <p>
              Não precisa saber jogar para começar. Chegue como você é e
              descubra a capoeira no seu tempo.
            </p>
            <Link className="button button-outline" to="/treinos">
              Saiba sobre os treinos
            </Link>
          </div>
          <TrainingSchedule compact />
        </div>
      </section>

      <section className="events-preview section-pad">
        <div className="page-width">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">A roda continua</span>
              <h2 className="display-heading">Próximos encontros</h2>
            </div>
            <Link className="text-link events-all-link" to="/eventos">
              Todos os eventos
            </Link>
          </div>
          {proximosEventos.length > 0 ? (
            <div className="event-grid">
              {proximosEventos.map((evento) => (
                <EventCard key={evento.id} evento={evento} />
              ))}
            </div>
          ) : (
            <div className="empty-events">
              <span className="empty-mark" aria-hidden="true">
                ✳
              </span>
              <p>Novos encontros serão anunciados em breve.</p>
              <Link className="button button-ghost" to="/eventos">
                Acompanhe a agenda <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="home-photo">
        <img
          src="/assets/images/capoeira-roda.jpg"
          alt="Pessoas reunidas em uma roda de capoeira em Salvador"
          loading="lazy"
        />
        <div className="home-photo-overlay">
          <span className="eyebrow eyebrow-light">Tradição que se compartilha</span>
          <p>O jogo acontece entre todos.</p>
        </div>
      </section>

      <section className="teacher-section section-pad">
        <div className="page-width teacher-grid">
          <div className="teacher-number">01<span>/</span>01</div>
          <div>
            <span className="eyebrow">Quem conduz a roda</span>
            <h2 className="display-heading">Mestra Michelinha</h2>
            <p className="teacher-placeholder">
              Este espaço está reservado para apresentar a trajetória e a
              história da Mestra Michelinha. Em breve, mais sobre quem conduz
              nossos treinos.
            </p>
            <Link className="button button-ghost" to="/treinos">
              Sobre as aulas
            </Link>
          </div>
          <div className="teacher-seal" aria-hidden="true">
            <img src="/assets/logo/ayo-capoeira-oficial.svg" alt="" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
