import type { Lang } from "./content";

export const GREEN = "#22C55E";
export const GOLD = "#FACC15";
export const GREY = "rgba(245,246,248,.7)";

export interface Project {
  slug: string;
  code: string;
  num: string;
  year: string;
  status: string;
  statusColor: string;
  role: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  tags: string[];
  outcomes: string[];
  link: string;
}

const SLUGS = [
  "data-automation-pipeline",
  "bi-forecast-dashboard",
  "commodities-intelligence",
  "apprentice-portal",
  "finance-control-app",
  "market-report-engine",
];

const EN: Project[] = [
  {
    slug: SLUGS[0],
    code: "PT-01",
    num: "01",
    year: "2024",
    status: "Delivered",
    statusColor: GREEN,
    role: "Data Engineer",
    title: "Data Automation Pipeline",
    summary:
      "A Python workflow that extracts data from documents and structures it into clean, repeatable reports.",
    overview:
      "A pipeline that takes raw, messy source documents and turns them into structured, ready-to-use reports — with zero manual copy-paste.",
    problem:
      "A recurring report was assembled by hand every cycle: copying numbers between files, reformatting, double-checking. Slow and error-prone.",
    solution:
      "I built a Python pipeline that reads the source documents, validates the data, and generates the final formatted output automatically on a schedule.",
    tags: ["Python", "Pandas", "Excel", "Automation"],
    outcomes: [
      "Manual assembly time cut from hours to minutes",
      "Consistent, validated output every cycle",
      "Reusable across multiple report types",
    ],
    link: "#",
  },
  {
    slug: SLUGS[1],
    code: "PT-02",
    num: "02",
    year: "2024",
    status: "Delivered",
    statusColor: GREEN,
    role: "BI Developer",
    title: "BI Forecast Dashboard",
    summary:
      "A redesigned Power BI experience that turns long-term forecast data into clear strategic views.",
    overview:
      "A Power BI model and dashboard that makes long-horizon forecast data readable at a glance for decision makers.",
    problem:
      "Forecast data lived in dense spreadsheets that only a few people could interpret, slowing down planning conversations.",
    solution:
      "I rebuilt the data model and designed a focused dashboard with clear hierarchy, drill-downs and a strong visual language.",
    tags: ["Power BI", "DAX", "Modeling", "BI"],
    outcomes: [
      "Forecasts readable by non-analysts",
      "Faster planning conversations",
      "Single source of truth for the data",
    ],
    link: "#",
  },
  {
    slug: SLUGS[2],
    code: "PT-03",
    num: "03",
    year: "2025",
    status: "Award",
    statusColor: GOLD,
    role: "Full-stack",
    title: "Commodities Intelligence",
    summary:
      "A web platform that aggregates market signals and supports commodity forecasting decisions.",
    overview:
      "An internal web platform that pulls in market signals and helps the team reason about commodity price movements.",
    problem:
      "Market intelligence was scattered across feeds, chats and spreadsheets — no single place to see the picture.",
    solution:
      "I built a web app that aggregates the signals, structures them, and presents them in a focused decision-support view.",
    tags: ["Web", "Node.js", "AI", "Forecasting"],
    outcomes: [
      "Recognised internally with an award",
      "Centralised previously scattered intelligence",
      "Faster, better-informed decisions",
    ],
    link: "#",
  },
  {
    slug: SLUGS[3],
    code: "PT-04",
    num: "04",
    year: "2023",
    status: "Delivered",
    statusColor: GREEN,
    role: "Full-stack",
    title: "Apprentice Portal",
    summary:
      "A full-stack portal with analytics built during my apprenticeship to support an internal program.",
    overview:
      "A full-stack internal portal supporting an apprenticeship program, with built-in analytics for the organisers.",
    problem:
      "Program information and progress tracking were spread across manual tools with no shared view.",
    solution:
      "I designed and built a portal that centralises the program content and surfaces analytics for the team.",
    tags: ["Full-stack", "SQL", "Analytics"],
    outcomes: [
      "Centralised program management",
      "Self-serve analytics for organisers",
      "Shipped end-to-end as apprentice",
    ],
    link: "#",
  },
  {
    slug: SLUGS[4],
    code: "PT-05",
    num: "05",
    year: "2025",
    status: "In Dev",
    statusColor: GREY,
    role: "Full-stack",
    title: "Finance Control App",
    summary:
      "A personal finance control app built with a modern full-stack to track and visualise spending.",
    overview:
      "A personal project: a finance control app to track, categorise and visualise spending with a clean modern stack.",
    problem:
      "Existing tools were either too heavy or did not fit how I wanted to track my own finances.",
    solution:
      "I am building a focused app with Next.js and Supabase, designed exactly around the workflow I want.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    outcomes: [
      "Built around a real personal workflow",
      "Modern, maintainable stack",
      "Ongoing — shipped iteratively",
    ],
    link: "#",
  },
  {
    slug: SLUGS[5],
    code: "PT-06",
    num: "06",
    year: "2024",
    status: "Delivered",
    statusColor: GREEN,
    role: "Automation",
    title: "Market Report Engine",
    summary:
      "An engine that compiles recurring market reports from multiple sources into a single deliverable.",
    overview:
      "An automation engine that compiles a recurring market report from several sources into one polished deliverable.",
    problem:
      "Producing the recurring report meant gathering inputs from many places and stitching them together by hand.",
    solution:
      "I built an engine that collects the inputs, applies the formatting rules, and outputs the final report automatically.",
    tags: ["Python", "Automation", "Reports"],
    outcomes: [
      "One-click recurring report",
      "Consistent formatting every time",
      "Hours saved per cycle",
    ],
    link: "#",
  },
];

const PT_LIST: Project[] = [
  {
    slug: SLUGS[0],
    code: "PT-01",
    num: "01",
    year: "2024",
    status: "Entregue",
    statusColor: GREEN,
    role: "Engenheiro de Dados",
    title: "Pipeline de Automação de Dados",
    summary:
      "Um fluxo em Python que extrai dados de documentos e os estrutura em relatórios limpos e repetíveis.",
    overview:
      "Um pipeline que pega documentos de origem brutos e desorganizados e os transforma em relatórios estruturados e prontos para uso — sem copiar e colar.",
    problem:
      "Um relatório recorrente era montado à mão a cada ciclo: copiar números entre arquivos, reformatar, conferir. Lento e sujeito a erros.",
    solution:
      "Construí um pipeline em Python que lê os documentos de origem, valida os dados e gera o resultado final formatado automaticamente.",
    tags: ["Python", "Pandas", "Excel", "Automação"],
    outcomes: [
      "Tempo de montagem manual reduzido de horas para minutos",
      "Resultado consistente e validado a cada ciclo",
      "Reutilizável em vários tipos de relatório",
    ],
    link: "#",
  },
  {
    slug: SLUGS[1],
    code: "PT-02",
    num: "02",
    year: "2024",
    status: "Entregue",
    statusColor: GREEN,
    role: "Desenvolvedor BI",
    title: "Dashboard de Previsão (BI)",
    summary:
      "Uma experiência em Power BI redesenhada que transforma dados de previsão de longo prazo em visões estratégicas claras.",
    overview:
      "Um modelo e dashboard em Power BI que tornam dados de previsão de longo prazo legíveis num relance para quem decide.",
    problem:
      "Os dados de previsão viviam em planilhas densas que poucos conseguiam interpretar, travando o planejamento.",
    solution:
      "Reconstruí o modelo de dados e desenhei um dashboard focado, com hierarquia clara, drill-downs e linguagem visual forte.",
    tags: ["Power BI", "DAX", "Modelagem", "BI"],
    outcomes: [
      "Previsões legíveis por não-analistas",
      "Conversas de planejamento mais rápidas",
      "Fonte única de verdade para os dados",
    ],
    link: "#",
  },
  {
    slug: SLUGS[2],
    code: "PT-03",
    num: "03",
    year: "2025",
    status: "Premiado",
    statusColor: GOLD,
    role: "Full-stack",
    title: "Inteligência de Commodities",
    summary:
      "Uma plataforma web que agrega sinais de mercado e apoia decisões de previsão de commodities.",
    overview:
      "Uma plataforma web interna que reúne sinais de mercado e ajuda o time a raciocinar sobre o movimento de preços de commodities.",
    problem:
      "A inteligência de mercado estava espalhada em feeds, chats e planilhas — sem um lugar único para ver o todo.",
    solution:
      "Construí um app web que agrega os sinais, estrutura e apresenta numa visão focada de apoio à decisão.",
    tags: ["Web", "Node.js", "IA", "Previsão"],
    outcomes: [
      "Reconhecido internamente com um prêmio",
      "Centralizou inteligência antes dispersa",
      "Decisões mais rápidas e bem informadas",
    ],
    link: "#",
  },
  {
    slug: SLUGS[3],
    code: "PT-04",
    num: "04",
    year: "2023",
    status: "Entregue",
    statusColor: GREEN,
    role: "Full-stack",
    title: "Portal do Aprendiz",
    summary:
      "Um portal full-stack com analytics construído durante meu aprendizado para apoiar um programa interno.",
    overview:
      "Um portal interno full-stack que apoia um programa de aprendizagem, com analytics embutido para os organizadores.",
    problem:
      "Informações do programa e acompanhamento de progresso estavam espalhados em ferramentas manuais, sem visão compartilhada.",
    solution:
      "Desenhei e construí um portal que centraliza o conteúdo do programa e expõe analytics para o time.",
    tags: ["Full-stack", "SQL", "Analytics"],
    outcomes: [
      "Gestão do programa centralizada",
      "Analytics self-service para organizadores",
      "Entregue de ponta a ponta como aprendiz",
    ],
    link: "#",
  },
  {
    slug: SLUGS[4],
    code: "PT-05",
    num: "05",
    year: "2025",
    status: "Em Dev",
    statusColor: GREY,
    role: "Full-stack",
    title: "App de Controle Financeiro",
    summary:
      "Um app de controle financeiro pessoal feito com stack moderna para acompanhar e visualizar gastos.",
    overview:
      "Um projeto pessoal: um app de controle financeiro para acompanhar, categorizar e visualizar gastos com uma stack moderna e limpa.",
    problem:
      "As ferramentas existentes eram pesadas demais ou não combinavam com o jeito que eu queria controlar minhas finanças.",
    solution:
      "Estou construindo um app focado com Next.js e Supabase, desenhado exatamente em torno do fluxo que eu quero.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    outcomes: [
      "Feito em torno de um fluxo pessoal real",
      "Stack moderna e sustentável",
      "Em andamento — entregue iterativamente",
    ],
    link: "#",
  },
  {
    slug: SLUGS[5],
    code: "PT-06",
    num: "06",
    year: "2024",
    status: "Entregue",
    statusColor: GREEN,
    role: "Automação",
    title: "Motor de Relatórios de Mercado",
    summary:
      "Um motor que compila relatórios de mercado recorrentes de várias fontes em uma única entrega.",
    overview:
      "Um motor de automação que compila um relatório de mercado recorrente, vindo de várias fontes, em uma entrega única e polida.",
    problem:
      "Produzir o relatório recorrente significava juntar entradas de muitos lugares e costurá-las à mão.",
    solution:
      "Construí um motor que coleta as entradas, aplica as regras de formatação e gera o relatório final automaticamente.",
    tags: ["Python", "Automação", "Relatórios"],
    outcomes: [
      "Relatório recorrente em um clique",
      "Formatação consistente sempre",
      "Horas economizadas por ciclo",
    ],
    link: "#",
  },
];

export function getProjects(lang: Lang): Project[] {
  return lang === "pt" ? PT_LIST : EN;
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return getProjects(lang).find((p) => p.slug === slug);
}
