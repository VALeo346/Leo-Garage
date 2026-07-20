export type Lang = "en" | "pt";

export interface Stat {
  value: string;
  label: string;
}

export interface UiContent {
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
  stats: Stat[];
}

const EN: UiContent = {
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

const PT: UiContent = {
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

export function getContent(lang: Lang): UiContent {
  return lang === "pt" ? PT : EN;
}
