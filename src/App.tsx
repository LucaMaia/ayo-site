import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Training from "./pages/Training";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const metadata: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Ayô Capoeira — Cultura em movimento",
        description:
          "Conheça o Ayô Capoeira: cultura, movimento, treinos e próximos encontros.",
      },
      "/eventos": {
        title: "Eventos — Ayô Capoeira",
        description:
          "Confira rodas, encontros e eventos do Ayô Capoeira.",
      },
      "/grupo": {
        title: "O grupo — Ayô Capoeira",
        description:
          "Conheça o Ayô Capoeira e acompanhe a história do grupo.",
      },
      "/treinos": {
        title: "Treinos — Ayô Capoeira",
        description:
          "Saiba mais sobre os treinos de capoeira com a Mestra Michelinha.",
      },
      "/contato": {
        title: "Contato — Ayô Capoeira",
        description:
          "Encontre os canais de contato e redes sociais do Ayô Capoeira.",
      },
    };
    const page = metadata[pathname] ?? metadata["/"];
    document.title = page.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", page.description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/grupo" element={<About />} />
          <Route path="/treinos" element={<Training />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
