# Leo Garage

Portfólio pessoal de Leonardo Viana — tema garagem/motorsport, implementado a partir do
design criado no [Claude Design](https://claude.ai/design) (`design-reference/Leo Garage.dc.html`
na pasta pai é a fonte da verdade visual).

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** (tokens do design em `src/app/globals.css`)
- **next/font**: Bricolage Grotesque · Anton · Space Mono
- **Devicon** (CDN) + SVGs customizados portados do design
- Canvas nativo para as partículas do fundo vivo

## Rodando

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção
```

## Estrutura

```
src/
├── app/                  # rotas: / · /projects · /projects/[code] · /skills · /career · /contact
├── components/
│   ├── atoms/            # Reveal (reveal-on-scroll)
│   ├── molecules/        # TechIcon (devicon + SVGs custom)
│   └── organisms/        # GarageShell, LivingBackground, Nav, TelemetryBar, WorkCarousel
├── data/content.ts       # todo o conteúdo EN/PT — verbatim do design
└── lib/i18n.tsx          # toggle EN/PT persistido em localStorage
```

## Fidelidade ao design

O shell (fundo vivo com parallax + partículas + scanline, HUD nos cantos, barra de
telemetria com relógio e marquee) vive no layout raiz e **nunca remonta** entre rotas,
exatamente como o SPA do design. Keyframes (`lg*`), cores (`#050608`, `#D71920`,
`#F5F6F8`), tipografia e todos os textos EN/PT foram portados 1:1.
