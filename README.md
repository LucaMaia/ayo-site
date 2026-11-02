# Ayo Capoeira

Site institucional em React, TypeScript e Vite. As rotas são Início (`/`),
Eventos (`/eventos`), O grupo (`/grupo`), Treinos (`/treinos`) e Contato
(`/contato`).

## Desenvolvimento

```sh
npm install
npm run dev
```

`npm run build` executa a checagem de TypeScript e gera a versão de produção em
`dist/`.

## Conteúdo

- **Eventos:** edite `src/data/events.ts`. Adicione objetos a `EVENTOS`, coloque
  banners em `public/assets/images/eventos/` e use o caminho público da imagem
  (por exemplo, `/assets/images/eventos/nome-do-evento.jpg`). O mesmo array
  alimenta a agenda e os destaques da página inicial. Um evento sem `link` não
  mostra botão.
- **Contato, horários e redes sociais:** edite `src/data/site-config.ts`.
  Informe os dias em `diasTreino`, o telefone internacional em
  `whatsappNumero` (somente números) e os links das redes. Localização é
  opcional.
- **História e apresentação:** os espaços reservados estão em
  `src/pages/About.tsx` e `src/pages/Home.tsx`; substitua-os por informações
  confirmadas pelo grupo.

As logos oficiais foram mantidas sem alterações em `public/assets/logo/`.
Fotografias de capoeira são de Julia Rubinic (CC BY 2.0), Estela Neto
(CC BY-SA 4.0) e Paula Rey (CC BY-SA 2.0), via Wikimedia Commons; os créditos
e links das licenças estão no rodapé.
