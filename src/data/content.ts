// All copy is verbatim from the Claude Design source of truth:
// design-reference/Leo Garage.dc.html — do not paraphrase when editing.

export type Lang = "en" | "pt";

export interface UiCopy {
  kicker: string;
  heroA: string;
  heroB: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scroll: string;
  workTitle: string;
  projectsKicker: string;
  projectsTitle: string;
  projectsSub: string;
  viewSpec: string;
  backToProjects: string;
  hoverHint: string;
  launch: string;
  specRole: string;
  specYear: string;
  specStack: string;
  specStatus: string;
  theProblem: string;
  theBuild: string;
  outcomes: string;
  skillsKicker: string;
  skillsTitle: string;
  skillsSub: string;
  careerKicker: string;
  careerTitle: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutBase: string;
  aboutCompany: string;
  aboutFocus: string;
  contactKicker: string;
  contactTitle: string;
  contactSub: string;
  contactEmail: string;
  contactCV: string;
  contactLocation: string;
  contactStatus: string;
  contactOpen: string;
  footerTag: string;
  nav: Record<"home" | "projects" | "skills" | "career" | "about" | "contact", string>;
  stats: { value: string; label: string }[];
}

export interface Project {
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
  link?: string;
}

export interface ProjectCar {
  src: string;
  name: string;
  accent: string;
}

const PROJECT_CARS: Record<string, ProjectCar> = {
  "PT-01": {
    src: "/assets/cars/nissan-gtr.png",
    name: "Nissan GT-R R35",
    accent: "rgba(30, 93, 180, .28)",
  },
  "PT-02": {
    src: "/assets/cars/audi-r8.png",
    name: "Audi R8 V10",
    accent: "rgba(215, 25, 32, .28)",
  },
  "PT-03": {
    src: "/assets/cars/toyota-supra.png",
    name: "Toyota GR Supra",
    accent: "rgba(250, 204, 21, .24)",
  },
  "PT-04": {
    src: "/assets/cars/golf-gti.png",
    name: "Volkswagen Golf GTI",
    accent: "rgba(148, 163, 184, .22)",
  },
  "PT-05": {
    src: "/assets/cars/tesla-model-3.png",
    name: "Tesla Model 3 Performance",
    accent: "rgba(226, 232, 240, .2)",
  },
  "PT-06": {
    src: "/assets/car_default.png",
    name: "Porsche 911 Carrera",
    accent: "rgba(215, 25, 32, .2)",
  },
};

export function getProjectCar(code: string): ProjectCar {
  return PROJECT_CARS[code] ?? PROJECT_CARS["PT-06"];
}

export type SkillIconKind =
  | "powerbi"
  | "dax"
  | "model"
  | "excel"
  | "gear"
  | "scrape"
  | "ai"
  | "db"
  | "api";

export interface SkillItem {
  name: string;
  /** devicon class, e.g. "devicon-python-plain colored" */
  icon: string | null;
  /** custom svg icon kind when no devicon exists */
  svg?: SkillIconKind;
  /** proficiency 1-4 */
  lvl: number;
}

export interface SkillGroup {
  code: string;
  name: string;
  label: string;
  items: SkillItem[];
}

export interface CareerEntry {
  period: string;
  role: string;
  org: string;
  desc: string;
}

const GREEN = "#22C55E";
const GOLD = "#FACC15";
const GREY = "rgba(245,246,248,.7)";

const UI_EN: UiCopy = {
  kicker: "Leonardo Viana — Software Engineer",
  heroA: "Digital engines, built for",
  heroB: "performance.",
  heroSub:
    "I build automation systems, BI dashboards and full-stack tools that turn manual, repetitive work into solutions that run on their own. Welcome to the garage.",
  ctaPrimary: "Explore the garage",
  ctaSecondary: "Get in touch",
  scroll: "Scroll",
  workTitle: "Selected work",
  projectsKicker: "The Showroom",
  projectsTitle: "Projects",
  projectsSub:
    "Every project is an engine — designed, tuned and shipped. Open a spec sheet to look under the hood.",
  viewSpec: "View spec",
  backToProjects: "Back to projects",
  hoverHint: "Hover for full spec →",
  launch: "Launch project",
  specRole: "Role",
  specYear: "Year",
  specStack: "Stack",
  specStatus: "Status",
  theProblem: "The problem",
  theBuild: "The build",
  outcomes: "Outcomes",
  skillsKicker: "Workshop Tools",
  skillsTitle: "Skills",
  skillsSub: "The toolkit on the wall — grouped by bay, the way a real garage is organised.",
  careerKicker: "Track Record",
  careerTitle: "Career",
  aboutKicker: "Driver Profile",
  aboutTitle: "About Leo",
  aboutP1:
    "I am a software engineer who likes building things that quietly do the work for you. My background mixes data, automation and full-stack development — the kind of engineering that removes friction instead of adding it.",
  aboutP2:
    "Today I work at Bosch in Brazil, building internal tools, BI dashboards and automation pipelines. Outside of that, Leo Garage is where my personal projects live.",
  aboutBase: "Base",
  aboutCompany: "Company",
  aboutFocus: "Focus",
  contactKicker: "Control Room",
  contactTitle: "Let's build something.",
  contactSub:
    "Looking for someone to engineer high-performance digital tools? The garage door is open.",
  contactEmail: "Email me",
  contactCV: "Download CV",
  contactLocation: "Location",
  contactStatus: "Status",
  contactOpen: "Open to opportunities",
  footerTag: "Engineering excellence · Delivering impact",
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    career: "Career",
    about: "About",
    contact: "Contact",
  },
  stats: [
    { value: "2+", label: "Years building" },
    { value: "6", label: "Projects shipped" },
    { value: "Bosch", label: "Current base" },
    { value: "Data · Auto", label: "Core focus" },
  ],
};

const UI_PT: UiCopy = {
  kicker: "Leonardo Viana — Engenheiro de Software",
  heroA: "Motores digitais, feitos para",
  heroB: "performance.",
  heroSub:
    "Construo sistemas de automação, dashboards de BI e ferramentas full-stack que transformam trabalho manual e repetitivo em soluções que rodam sozinhas. Bem-vindo à garagem.",
  ctaPrimary: "Explorar a garagem",
  ctaSecondary: "Falar comigo",
  scroll: "Rolar",
  workTitle: "Trabalhos selecionados",
  projectsKicker: "O Showroom",
  projectsTitle: "Projetos",
  projectsSub:
    "Cada projeto é um motor — projetado, ajustado e entregue. Abra a ficha técnica para ver por dentro.",
  viewSpec: "Ver ficha",
  backToProjects: "Voltar aos projetos",
  hoverHint: "Passe o mouse para ver tudo →",
  launch: "Acessar projeto",
  specRole: "Função",
  specYear: "Ano",
  specStack: "Stack",
  specStatus: "Status",
  theProblem: "O problema",
  theBuild: "A construção",
  outcomes: "Resultados",
  skillsKicker: "Ferramentas da Oficina",
  skillsTitle: "Skills",
  skillsSub: "As ferramentas na parede — agrupadas por baia, como uma oficina de verdade.",
  careerKicker: "Trajetória",
  careerTitle: "Carreira",
  aboutKicker: "Perfil do Piloto",
  aboutTitle: "Sobre o Leo",
  aboutP1:
    "Sou engenheiro de software e gosto de construir coisas que fazem o trabalho por você, em silêncio. Minha base mistura dados, automação e desenvolvimento full-stack — a engenharia que remove atrito em vez de criar.",
  aboutP2:
    "Hoje trabalho na Bosch, no Brasil, construindo ferramentas internas, dashboards de BI e pipelines de automação. Fora isso, o Leo Garage é onde vivem meus projetos pessoais.",
  aboutBase: "Base",
  aboutCompany: "Empresa",
  aboutFocus: "Foco",
  contactKicker: "Sala de Controle",
  contactTitle: "Vamos construir algo.",
  contactSub:
    "Procurando alguém para projetar ferramentas digitais de alta performance? A porta da garagem está aberta.",
  contactEmail: "Me enviar e-mail",
  contactCV: "Baixar CV",
  contactLocation: "Localização",
  contactStatus: "Status",
  contactOpen: "Aberto a oportunidades",
  footerTag: "Excelência em engenharia · Gerando impacto",
  nav: {
    home: "Início",
    projects: "Projetos",
    skills: "Skills",
    career: "Carreira",
    about: "Sobre",
    contact: "Contato",
  },
  stats: [
    { value: "2+", label: "Anos construindo" },
    { value: "6", label: "Projetos entregues" },
    { value: "Bosch", label: "Base atual" },
    { value: "Dados · Auto", label: "Foco principal" },
  ],
};

const PROJECTS_EN: Project[] = [
  {
    code: "PT-01", num: "01", year: "2024", status: "Delivered", statusColor: GREEN,
    role: "Data Engineer", title: "Data Automation Pipeline",
    summary: "A Python workflow that extracts data from documents and structures it into clean, repeatable reports.",
    overview: "A pipeline that takes raw, messy source documents and turns them into structured, ready-to-use reports — with zero manual copy-paste.",
    problem: "A recurring report was assembled by hand every cycle: copying numbers between files, reformatting, double-checking. Slow and error-prone.",
    solution: "I built a Python pipeline that reads the source documents, validates the data, and generates the final formatted output automatically on a schedule.",
    tags: ["Python", "Pandas", "Excel", "Automation"],
    outcomes: [
      "Manual assembly time cut from hours to minutes",
      "Consistent, validated output every cycle",
      "Reusable across multiple report types",
    ],
  },
  {
    code: "PT-02", num: "02", year: "2024", status: "Delivered", statusColor: GREEN,
    role: "BI Developer", title: "BI Forecast Dashboard",
    summary: "A redesigned Power BI experience that turns long-term forecast data into clear strategic views.",
    overview: "A Power BI model and dashboard that makes long-horizon forecast data readable at a glance for decision makers.",
    problem: "Forecast data lived in dense spreadsheets that only a few people could interpret, slowing down planning conversations.",
    solution: "I rebuilt the data model and designed a focused dashboard with clear hierarchy, drill-downs and a strong visual language.",
    tags: ["Power BI", "DAX", "Modeling", "BI"],
    outcomes: [
      "Forecasts readable by non-analysts",
      "Faster planning conversations",
      "Single source of truth for the data",
    ],
  },
  {
    code: "PT-03", num: "03", year: "2025", status: "Award", statusColor: GOLD,
    role: "Full-stack", title: "Commodities Intelligence",
    summary: "A web platform that aggregates market signals and supports commodity forecasting decisions.",
    overview: "An internal web platform that pulls in market signals and helps the team reason about commodity price movements.",
    problem: "Market intelligence was scattered across feeds, chats and spreadsheets — no single place to see the picture.",
    solution: "I built a web app that aggregates the signals, structures them, and presents them in a focused decision-support view.",
    tags: ["Web", "Node.js", "AI", "Forecasting"],
    outcomes: [
      "Recognised internally with an award",
      "Centralised previously scattered intelligence",
      "Faster, better-informed decisions",
    ],
  },
  {
    code: "PT-04", num: "04", year: "2023", status: "Delivered", statusColor: GREEN,
    role: "Full-stack", title: "Apprentice Portal",
    summary: "A full-stack portal with analytics built during my apprenticeship to support an internal program.",
    overview: "A full-stack internal portal supporting an apprenticeship program, with built-in analytics for the organisers.",
    problem: "Program information and progress tracking were spread across manual tools with no shared view.",
    solution: "I designed and built a portal that centralises the program content and surfaces analytics for the team.",
    tags: ["Full-stack", "SQL", "Analytics"],
    outcomes: [
      "Centralised program management",
      "Self-serve analytics for organisers",
      "Shipped end-to-end as apprentice",
    ],
  },
  {
    code: "PT-05", num: "05", year: "2025", status: "In Dev", statusColor: GREY,
    role: "Full-stack", title: "Finance Control App",
    summary: "A personal finance control app built with a modern full-stack to track and visualise spending.",
    overview: "A personal project: a finance control app to track, categorise and visualise spending with a clean modern stack.",
    problem: "Existing tools were either too heavy or did not fit how I wanted to track my own finances.",
    solution: "I am building a focused app with Next.js and Supabase, designed exactly around the workflow I want.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    outcomes: [
      "Built around a real personal workflow",
      "Modern, maintainable stack",
      "Ongoing — shipped iteratively",
    ],
  },
  {
    code: "PT-06", num: "06", year: "2024", status: "Delivered", statusColor: GREEN,
    role: "Automation", title: "Market Report Engine",
    summary: "An engine that compiles recurring market reports from multiple sources into a single deliverable.",
    overview: "An automation engine that compiles a recurring market report from several sources into one polished deliverable.",
    problem: "Producing the recurring report meant gathering inputs from many places and stitching them together by hand.",
    solution: "I built an engine that collects the inputs, applies the formatting rules, and outputs the final report automatically.",
    tags: ["Python", "Automation", "Reports"],
    outcomes: [
      "One-click recurring report",
      "Consistent formatting every time",
      "Hours saved per cycle",
    ],
  },
];

const PROJECTS_PT: Project[] = [
  {
    code: "PT-01", num: "01", year: "2024", status: "Entregue", statusColor: GREEN,
    role: "Engenheiro de Dados", title: "Pipeline de Automação de Dados",
    summary: "Um fluxo em Python que extrai dados de documentos e os estrutura em relatórios limpos e repetíveis.",
    overview: "Um pipeline que pega documentos de origem brutos e desorganizados e os transforma em relatórios estruturados e prontos para uso — sem copiar e colar.",
    problem: "Um relatório recorrente era montado à mão a cada ciclo: copiar números entre arquivos, reformatar, conferir. Lento e sujeito a erros.",
    solution: "Construí um pipeline em Python que lê os documentos de origem, valida os dados e gera o resultado final formatado automaticamente.",
    tags: ["Python", "Pandas", "Excel", "Automação"],
    outcomes: [
      "Tempo de montagem manual reduzido de horas para minutos",
      "Resultado consistente e validado a cada ciclo",
      "Reutilizável em vários tipos de relatório",
    ],
  },
  {
    code: "PT-02", num: "02", year: "2024", status: "Entregue", statusColor: GREEN,
    role: "Desenvolvedor BI", title: "Dashboard de Previsão (BI)",
    summary: "Uma experiência em Power BI redesenhada que transforma dados de previsão de longo prazo em visões estratégicas claras.",
    overview: "Um modelo e dashboard em Power BI que tornam dados de previsão de longo prazo legíveis num relance para quem decide.",
    problem: "Os dados de previsão viviam em planilhas densas que poucos conseguiam interpretar, travando o planejamento.",
    solution: "Reconstruí o modelo de dados e desenhei um dashboard focado, com hierarquia clara, drill-downs e linguagem visual forte.",
    tags: ["Power BI", "DAX", "Modelagem", "BI"],
    outcomes: [
      "Previsões legíveis por não-analistas",
      "Conversas de planejamento mais rápidas",
      "Fonte única de verdade para os dados",
    ],
  },
  {
    code: "PT-03", num: "03", year: "2025", status: "Premiado", statusColor: GOLD,
    role: "Full-stack", title: "Inteligência de Commodities",
    summary: "Uma plataforma web que agrega sinais de mercado e apoia decisões de previsão de commodities.",
    overview: "Uma plataforma web interna que reúne sinais de mercado e ajuda o time a raciocinar sobre o movimento de preços de commodities.",
    problem: "A inteligência de mercado estava espalhada em feeds, chats e planilhas — sem um lugar único para ver o todo.",
    solution: "Construí um app web que agrega os sinais, estrutura e apresenta numa visão focada de apoio à decisão.",
    tags: ["Web", "Node.js", "IA", "Previsão"],
    outcomes: [
      "Reconhecido internamente com um prêmio",
      "Centralizou inteligência antes dispersa",
      "Decisões mais rápidas e bem informadas",
    ],
  },
  {
    code: "PT-04", num: "04", year: "2023", status: "Entregue", statusColor: GREEN,
    role: "Full-stack", title: "Portal do Aprendiz",
    summary: "Um portal full-stack com analytics construído durante meu aprendizado para apoiar um programa interno.",
    overview: "Um portal interno full-stack que apoia um programa de aprendizagem, com analytics embutido para os organizadores.",
    problem: "Informações do programa e acompanhamento de progresso estavam espalhados em ferramentas manuais, sem visão compartilhada.",
    solution: "Desenhei e construí um portal que centraliza o conteúdo do programa e expõe analytics para o time.",
    tags: ["Full-stack", "SQL", "Analytics"],
    outcomes: [
      "Gestão do programa centralizada",
      "Analytics self-service para organizadores",
      "Entregue de ponta a ponta como aprendiz",
    ],
  },
  {
    code: "PT-05", num: "05", year: "2025", status: "Em Dev", statusColor: GREY,
    role: "Full-stack", title: "App de Controle Financeiro",
    summary: "Um app de controle financeiro pessoal feito com stack moderna para acompanhar e visualizar gastos.",
    overview: "Um projeto pessoal: um app de controle financeiro para acompanhar, categorizar e visualizar gastos com uma stack moderna e limpa.",
    problem: "As ferramentas existentes eram pesadas demais ou não combinavam com o jeito que eu queria controlar minhas finanças.",
    solution: "Estou construindo um app focado com Next.js e Supabase, desenhado exatamente em torno do fluxo que eu quero.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    outcomes: [
      "Feito em torno de um fluxo pessoal real",
      "Stack moderna e sustentável",
      "Em andamento — entregue iterativamente",
    ],
  },
  {
    code: "PT-06", num: "06", year: "2024", status: "Entregue", statusColor: GREEN,
    role: "Automação", title: "Motor de Relatórios de Mercado",
    summary: "Um motor que compila relatórios de mercado recorrentes de várias fontes em uma única entrega.",
    overview: "Um motor de automação que compila um relatório de mercado recorrente, vindo de várias fontes, em uma entrega única e polida.",
    problem: "Produzir o relatório recorrente significava juntar entradas de muitos lugares e costurá-las à mão.",
    solution: "Construí um motor que coleta as entradas, aplica as regras de formatação e gera o relatório final automaticamente.",
    tags: ["Python", "Automação", "Relatórios"],
    outcomes: [
      "Relatório recorrente em um clique",
      "Formatação consistente sempre",
      "Horas economizadas por ciclo",
    ],
  },
];

const SKILLS_EN: SkillGroup[] = [
  {
    code: "01", name: "Engine Room", label: "Backend & APIs",
    items: [
      { name: "Python", icon: "devicon-python-plain colored", lvl: 4 },
      { name: "Django", icon: "devicon-django-plain", lvl: 3 },
      { name: "Flask", icon: "devicon-flask-original", lvl: 3 },
      { name: "REST APIs", icon: null, svg: "api", lvl: 3 },
    ],
  },
  {
    code: "02", name: "Body Shop", label: "Frontend Frameworks",
    items: [
      { name: "Angular", icon: "devicon-angularjs-plain colored", lvl: 4 },
      { name: "React", icon: "devicon-react-original colored", lvl: 3 },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", lvl: 4 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", lvl: 4 },
    ],
  },
  {
    code: "03", name: "Paint Booth", label: "Web Experience",
    items: [
      { name: "Next.js", icon: "devicon-nextjs-plain", lvl: 3 },
      { name: "Vite", icon: "devicon-vitejs-plain colored", lvl: 3 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored", lvl: 4 },
      { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored", lvl: 4 },
    ],
  },
  {
    code: "04", name: "Mobile Bay", label: "Cross-platform Apps",
    items: [
      { name: "Flutter", icon: "devicon-flutter-plain colored", lvl: 3 },
      { name: "Dart", icon: "devicon-dart-plain colored", lvl: 3 },
      { name: "Responsive UI", icon: "devicon-css3-plain colored", lvl: 4 },
      { name: "HTTP Integration", icon: null, svg: "api", lvl: 3 },
    ],
  },
  {
    code: "05", name: "Dashboard Bay", label: "Data & Analytics",
    items: [
      { name: "Power BI", icon: null, svg: "powerbi", lvl: 4 },
      { name: "Excel", icon: null, svg: "excel", lvl: 4 },
      { name: "SQL", icon: null, svg: "db", lvl: 3 },
      { name: "Data Modeling", icon: null, svg: "model", lvl: 3 },
    ],
  },
  {
    code: "06", name: "Garage Tools", label: "Runtime & Workflow",
    items: [
      { name: "Git", icon: "devicon-git-plain colored", lvl: 4 },
      { name: "GitHub", icon: "devicon-github-original", lvl: 4 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", lvl: 3 },
      { name: "Express", icon: "devicon-express-original", lvl: 3 },
    ],
  },
];

const SKILLS_PT: SkillGroup[] = [
  {
    code: "01", name: "Sala de Máquinas", label: "Backend & APIs",
    items: SKILLS_EN[0].items,
  },
  {
    code: "02", name: "Funilaria", label: "Frameworks Frontend",
    items: SKILLS_EN[1].items,
  },
  {
    code: "03", name: "Cabine de Pintura", label: "Experiência Web",
    items: SKILLS_EN[2].items,
  },
  {
    code: "04", name: "Baia Mobile", label: "Apps Multiplataforma",
    items: SKILLS_EN[3].items,
  },
  {
    code: "05", name: "Baia de Dashboards", label: "Dados & Analytics",
    items: [
      { name: "Power BI", icon: null, svg: "powerbi", lvl: 4 },
      { name: "Excel", icon: null, svg: "excel", lvl: 4 },
      { name: "SQL", icon: null, svg: "db", lvl: 3 },
      { name: "Modelagem de Dados", icon: null, svg: "model", lvl: 3 },
    ],
  },
  {
    code: "06", name: "Ferramentas", label: "Runtime & Workflow",
    items: SKILLS_EN[5].items,
  },
];

const CAREER_EN: CareerEntry[] = [
  {
    period: "2024 — Present", role: "Software / Data Engineer", org: "Bosch · Brazil",
    desc: "Building internal tools, BI dashboards and automation pipelines that remove manual work and turn data into decisions.",
  },
  {
    period: "2023 — 2024", role: "Junior Developer", org: "Bosch · Brazil",
    desc: "Moved into full-stack and data work — shipped internal apps and started automating recurring reporting.",
  },
  {
    period: "2022 — 2023", role: "Apprentice", org: "Bosch · Brazil",
    desc: "Started in the apprenticeship program, learning engineering fundamentals and building my first full-stack portal.",
  },
  {
    period: "Ongoing", role: "Builder · Leo Garage", org: "Personal projects",
    desc: "Outside of work, building personal projects — the garage where I experiment with new stacks and ideas.",
  },
];

const CAREER_PT: CareerEntry[] = [
  {
    period: "2024 — Atual", role: "Engenheiro de Software / Dados", org: "Bosch · Brasil",
    desc: "Construindo ferramentas internas, dashboards de BI e pipelines de automação que removem trabalho manual e transformam dados em decisões.",
  },
  {
    period: "2023 — 2024", role: "Desenvolvedor Júnior", org: "Bosch · Brasil",
    desc: "Migrei para trabalho full-stack e de dados — entreguei apps internos e comecei a automatizar relatórios recorrentes.",
  },
  {
    period: "2022 — 2023", role: "Aprendiz", org: "Bosch · Brasil",
    desc: "Comecei no programa de aprendizagem, aprendendo os fundamentos de engenharia e construindo meu primeiro portal full-stack.",
  },
  {
    period: "Contínuo", role: "Builder · Leo Garage", org: "Projetos pessoais",
    desc: "Fora do trabalho, construindo projetos pessoais — a garagem onde experimento novas stacks e ideias.",
  },
];

export function getUiCopy(lang: Lang): UiCopy {
  return lang === "pt" ? UI_PT : UI_EN;
}

export function getProjects(lang: Lang): Project[] {
  return lang === "pt" ? PROJECTS_PT : PROJECTS_EN;
}

export function getSkills(lang: Lang): SkillGroup[] {
  return lang === "pt" ? SKILLS_PT : SKILLS_EN;
}

export function getCareer(lang: Lang): CareerEntry[] {
  return lang === "pt" ? CAREER_PT : CAREER_EN;
}

export function getAboutTraits(lang: Lang): string[] {
  return lang === "pt"
    ? ["Orientado a dados", "Mentalidade de automação", "Full-stack", "Foco em performance"]
    : ["Data-driven", "Automation mindset", "Full-stack", "Performance-focused"];
}

export interface AboutSpecRow {
  k: string;
  v: string;
  color: string;
}

export function getAboutSpec(lang: Lang): AboutSpecRow[] {
  const c = getUiCopy(lang);
  return [
    { k: c.aboutBase, v: "Campinas · SP · Brazil", color: "#F5F6F8" },
    { k: c.aboutCompany, v: "Bosch", color: "#F5F6F8" },
    { k: c.specRole, v: lang === "pt" ? "Eng. de Software / Dados" : "Software / Data Engineer", color: "#F5F6F8" },
    { k: c.aboutFocus, v: lang === "pt" ? "Dados · Automação · BI" : "Data · Automation · BI", color: "#F5F6F8" },
    { k: c.contactStatus, v: c.contactOpen, color: GREEN },
  ];
}

/** URL slug for a project, e.g. "PT-01" -> "pt-01" */
export function projectSlug(p: Project): string {
  return p.code.toLowerCase();
}
