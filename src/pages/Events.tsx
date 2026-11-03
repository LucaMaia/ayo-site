import EventCard from "../components/EventCard";
import PageIntro from "../components/PageIntro";
import { EVENTOS_VISIVEIS } from "../data/events";

export default function Events() {
  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Agenda Ayô"
        number="01"
        title={
          <>
          A capoeira
          <br />
          também se <em>celebra.</em>
          </>
        }
        description="Rodas, encontros e momentos para viver a cultura da capoeira junto com a comunidade."
      />
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
