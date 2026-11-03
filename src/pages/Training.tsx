import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import TrainingSchedule from "../components/TrainingSchedule";
import { getWhatsAppLink } from "../data/site-config";

export default function Training() {
  const whatsapp = getWhatsAppLink("Olá! Gostaria de informações sobre os treinos de capoeira.");

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Treinos Ayô"
        number="03"
        title={
          <>
          O primeiro
          <br />
          passo é <em>chegar.</em>
          </>
        }
        description="Um espaço para aprender capoeira, conhecer a roda e descobrir novos movimentos no seu próprio ritmo."
      />
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
              Fale pelo WhatsApp
            </a>
          ) : (
            <Link className="button button-ghost" to="/contato">
              Consulte os canais de contato
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
