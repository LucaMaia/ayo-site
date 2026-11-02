import { Link } from "react-router-dom";
import TrainingSchedule from "../components/TrainingSchedule";
import { SITE_CONFIG, getWhatsAppLink } from "../data/site-config";

export default function Training() {
  const whatsapp = getWhatsAppLink("Olá! Gostaria de informações sobre os treinos de capoeira.");

  return (
    <div className="page-shell">
      <section className="page-intro page-width">
        <span className="eyebrow">Treinos Ayo</span>
        <h1 className="display-heading">
          O primeiro
          <br />
          passo é <em>chegar.</em>
        </h1>
        <p>
          Um espaço para aprender capoeira, conhecer a roda e descobrir novos
          movimentos no seu próprio ritmo.
        </p>
      </section>
      <section className="training-page-main page-width">
        <div className="training-page-image">
          <img
            src="/assets/images/capoeira-movimento.jpg"
            alt="Praticantes jogam capoeira durante uma roda"
            loading="lazy"
          />
        </div>
        <div className="training-page-info">
          <span className="eyebrow">Encontros semanais</span>
          <h2 className="display-heading">
            Sua roda
            <br />
            começa <em>aqui.</em>
          </h2>
          <TrainingSchedule />
          <div className="teacher-note">
            <span>Com</span>
            <strong>{SITE_CONFIG.responsavel}</strong>
          </div>
          <p className="training-note">
            Nunca praticou? Não tem problema. As informações sobre como
            participar podem ser solicitadas pelo canal de contato do grupo.
          </p>
          {whatsapp ? (
            <a
              className="button button-dark"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Fale pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="text-link" to="/contato">
              Consulte os canais de contato <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </section>
      <section className="training-quote">
        <div className="page-width">
          <span className="eyebrow">A roda é de todos</span>
          <p>
            Ouça o ritmo.
            <br />
            <em>Encontre seu movimento.</em>
          </p>
        </div>
      </section>
    </div>
  );
}
