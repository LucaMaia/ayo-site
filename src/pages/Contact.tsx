import { SITE_CONFIG, getWhatsAppLink } from "../data/site-config";
import PageIntro from "../components/PageIntro";

export default function Contact() {
  const whatsapp = getWhatsAppLink();
  const redes = [
    { label: "Instagram", url: SITE_CONFIG.instagram },
    { label: "Facebook", url: SITE_CONFIG.facebook },
    { label: "YouTube", url: SITE_CONFIG.youtube },
  ].filter((rede) => rede.url);

  return (
    <div className="page-shell contact-page">
      <PageIntro
        eyebrow="Contato"
        number="04"
        title={
          <>
          A conversa
          <br />
          também <em>começa aqui.</em>
          </>
        }
        description="Quer conhecer os treinos ou saber mais sobre o Ayô? Fale com a Mestra Michelinha e tire suas dúvidas."
      />
      <section className="contact-options page-width" id="redes">
        <article className="contact-option">
          <span className="eyebrow">Mensagem direta</span>
          <h2>WhatsApp</h2>
          {whatsapp ? (
            <a
              className="button button-dark"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Fale com a Mestra Michelinha
            </a>
          ) : (
            <p className="contact-unavailable">
              Canal de WhatsApp a ser divulgado.
            </p>
          )}
        </article>
        <article className="contact-option">
          <span className="contact-icon" aria-hidden="true">
            ✳
          </span>
          <span className="eyebrow">Acompanhe</span>
          <h2>Redes sociais</h2>
          {redes.length > 0 ? (
            <div className="social-links">
              {redes.map((rede) => (
                <a
                  className="button button-ghost"
                  href={rede.url}
                  key={rede.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {rede.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="contact-unavailable">
              Os perfis do grupo serão divulgados em breve.
            </p>
          )}
        </article>
        {SITE_CONFIG.localizacao && (
          <article className="contact-option">
            <span className="contact-icon" aria-hidden="true">
              ◎
            </span>
            <span className="eyebrow">Onde estamos</span>
            <h2>Localização</h2>
            <p>{SITE_CONFIG.localizacao}</p>
          </article>
        )}
      </section>
    </div>
  );
}
