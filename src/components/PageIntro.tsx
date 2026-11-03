import type { ReactNode } from "react";

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  number: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  number,
}: PageIntroProps) {
  return (
    <section className="page-intro page-width" aria-labelledby="page-title">
      <span className="page-intro-number">{number}</span>
      <div className="page-intro-title">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-heading" id="page-title">
          {title}
        </h1>
      </div>
      <p>{description}</p>
    </section>
  );
}
