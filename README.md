# Leo Garage

Portfólio pessoal de Leonardo Viana com tema de garagem/automotivo, implementado em **Next.js 15** (App Router) + **TypeScript** a partir do design `Leo Garage.dc.html` (Claude Design).

## Rodando

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Estrutura

- `app/` — rotas: Home (`/`), Projetos (`/projects`), Detalhe (`/projects/[slug]`), Skills (`/skills`), Carreira (`/career`), Contato (`/contact`)
- `components/` — fundo persistente (partículas, parallax, Ken Burns), nav, barra de telemetria, ícones SVG
- `lib/` — conteúdo bilíngue (EN/PT): textos de UI, projetos, skills e carreira
- `public/assets/` — imagens (fundo da garagem e carro em SVG)

## Recursos

- Idioma EN/PT com toggle na nav (persistido em `localStorage`)
- Fundo "vivo" que nunca remonta entre rotas (fica no layout raiz)
- Navegação por teclado (← →) no showroom de projetos
- Fontes: Bricolage Grotesque, Anton e Space Mono via `next/font`
