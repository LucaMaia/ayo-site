import type { Evento } from "../data/events";

interface EventCardProps {
  evento: Evento;
}

export default function EventCard({ evento }: EventCardProps) {
  const data = evento.data
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${evento.data}T00:00:00Z`))
    : null;

  return (
    <article className={`event-card${evento.destaque ? " event-featured" : ""}`}>
      <div className="event-image-wrap">
        <img src={evento.imagem} alt="" loading="lazy" />
        {evento.destaque && <span className="event-badge">Destaque</span>}
      </div>
      <div className="event-copy">
        {data && <span className="event-date">{data}</span>}
        <h2>{evento.titulo}</h2>
        <p>{evento.descricao}</p>
        {evento.link && (
          <a
            className="text-link"
            href={evento.link}
            target={evento.link.startsWith("http") ? "_blank" : undefined}
            rel={evento.link.startsWith("http") ? "noreferrer" : undefined}
          >
            {evento.textoBotao}
          </a>
        )}
      </div>
    </article>
  );
}
