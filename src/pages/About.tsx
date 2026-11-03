import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";

const temas = [
  {
    numero: "01",
    titulo: "Nossa história",
    texto:
      "Este espaço está reservado para contar a história do Ayô Capoeira, com as palavras e memórias do próprio grupo.",
  },
  {
    numero: "02",
    titulo: "Filosofia e valores",
    texto:
      "Aqui serão compartilhados os princípios que orientam o grupo, a convivência na roda e o aprendizado.",
  },
  {
    numero: "03",
    titulo: "Trajetória",
    texto:
      "Um registro dos caminhos percorridos, das rodas, apresentações e atividades culturais do Ayô.",
  },
];

export default function About() {
  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="O grupo"
        number="02"
        title={
          <>
          Uma cultura
          <br />
          feita de <em>encontros.</em>
          </>
        }
        description="O Ayô Capoeira é um espaço de movimento, música e troca. Esta página reúne a história do grupo — contada por quem faz parte dela."
      />

      <section className="about-image page-width">
        <img
          src="/assets/images/capoeira-encontro.jpg"
          alt="Roda de capoeira ao ar livre ao entardecer"
          loading="lazy"
        />
        <span className="image-caption">
          A roda: um espaço de escuta, jogo e participação.
        </span>
      </section>

      <section className="about-values page-width">
        <div className="about-values-heading">
          <span className="eyebrow">A identidade do Ayô</span>
          <h2 className="display-heading">
            Em construção,
            <br />
            com <em>história.</em>
          </h2>
          <p>
            Os próximos capítulos serão escritos com as histórias, experiências
            e registros compartilhados pela comunidade do grupo.
          </p>
        </div>
        <div className="about-list">
          {temas.map((tema) => (
            <article className="about-list-item" key={tema.numero}>
              <span className="about-list-number">{tema.numero}</span>
              <div>
                <h3>{tema.titulo}</h3>
                <p>{tema.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="page-width about-cta-inner">
          <span className="eyebrow eyebrow-light">Faça parte do movimento</span>
          <h2 className="display-heading">
            A roda tem
            <br />
            lugar para você.
          </h2>
          <Link className="button button-gold" to="/treinos">
            Conheça os treinos
          </Link>
        </div>
      </section>
    </div>
  );
}
