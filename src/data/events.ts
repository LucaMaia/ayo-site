export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  data?: string;
  textoBotao: string;
  link?: string;
  destaque?: boolean;
  visivel?: boolean;
}

export const EVENTOS: Evento[] = [];

export const EVENTOS_VISIVEIS = EVENTOS.filter(
  (evento) => evento.visivel !== false,
);
