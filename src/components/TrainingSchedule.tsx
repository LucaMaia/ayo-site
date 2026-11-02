import { SITE_CONFIG } from "../data/site-config";

interface TrainingScheduleProps {
  compact?: boolean;
}

export default function TrainingSchedule({
  compact = false,
}: TrainingScheduleProps) {
  const dias =
    SITE_CONFIG.diasTreino.length > 0
      ? SITE_CONFIG.diasTreino.join(", ")
      : "Dias a confirmar";

  return (
    <div className={`schedule-card${compact ? " schedule-card-compact" : ""}`}>
      <span className="eyebrow">Encontro semanal</span>
      <div className="schedule-time">{SITE_CONFIG.horario}</div>
      <div className="schedule-divider" />
      <div className="schedule-detail">
        <span>Dias</span>
        <strong>{dias}</strong>
      </div>
      <div className="schedule-detail">
        <span>Com</span>
        <strong>{SITE_CONFIG.responsavel}</strong>
      </div>
    </div>
  );
}
