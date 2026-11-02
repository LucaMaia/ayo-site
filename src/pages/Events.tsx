import EventCard from "../components/EventCard";
import { EVENTOS_VISIVEIS } from "../data/events";

export default function Events() {
  return (
    <div className="page-shell">
      <section className="page-intro page-width">
        <span className="eyebrow">Agenda Ayo</span>
        <h1 className="display-heading">
          A capoeira
          <br />
          também se <em>celebra.</em>
        </h1>
        <p>
          Rodas, encontros e momentos para viver a cultura da capoeira junto
          com a comunidade.
        </p>
      </section>
      <section className="page-width events-page-list">
        {EVENTOS_VISIVEIS.length > 0 ? (
          <div className="event-grid">
            {EVENTOS_VISIVEIS.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </div>
        ) : (
          <div className="events-empty-state">
            <span className="empty-mark" aria-hidden="true">
              ✳
            </span>
            <div>
              <span className="eyebrow">Agenda em movimento</span>
              <h2>Novos encontros em breve.</h2>
              <p>
                Assim que um evento for confirmado, os detalhes aparecerão
                aqui. A gente se encontra na roda.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
