export const SITE_CONFIG = {
  horario: "18h30 às 19h30",
  responsavel: "Mestra Michelinha",
  diasTreino: [] as string[],
  whatsappNumero: "",
  instagram: "",
  facebook: "",
  youtube: "",
  localizacao: "",
};

export const FOTOGRAFIAS = [
  {
    nome: "Julia Rubinic",
    licenca: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Capoeira_in_Salvador_Brazil.jpg",
  },
  {
    nome: "Estela Neto",
    licenca: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Roda_de_Capoeira_tradicional_do_Engenho_da_Rainha_1.jpg",
  },
  {
    nome: "Paula Rey",
    licenca: "CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Roda_do_Capoeira_-_Flickr_-_pulguita.jpg",
  },
];

export function getWhatsAppLink(message = "Olá! Gostaria de saber mais sobre o Ayo Capoeira.") {
  const numero = SITE_CONFIG.whatsappNumero.replace(/\D/g, "");
  return numero
    ? `https://wa.me/${numero}?text=${encodeURIComponent(message)}`
    : "";
}
