import type { Lang } from "./content";

export type SvgKind = "powerbi" | "dax" | "model" | "excel" | "gear" | "scrape" | "ai";

export interface SkillItem {
  name: string;
  icon: string | null; // devicon class
  svg?: SvgKind; // custom svg icon fallback
  lvl: number; // 1-4
}

export interface SkillGroup {
  code: string;
  name: string;
  label: string;
  items: SkillItem[];
}

const EN: SkillGroup[] = [
  {
    code: "01",
    name: "Engine Room",
    label: "Backend & Data",
    items: [
      { name: "Python", icon: "devicon-python-plain colored", lvl: 4 },
      { name: "SQL", icon: "devicon-postgresql-plain colored", lvl: 4 },
      { name: "Pandas / ETL", icon: "devicon-pandas-original colored", lvl: 4 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", lvl: 3 },
    ],
  },
  {
    code: "02",
    name: "Dashboard Bay",
    label: "BI & Analytics",
    items: [
      { name: "Power BI", icon: null, svg: "powerbi", lvl: 4 },
      { name: "DAX", icon: null, svg: "dax", lvl: 3 },
      { name: "Data Modeling", icon: null, svg: "model", lvl: 4 },
      { name: "Excel", icon: null, svg: "excel", lvl: 4 },
    ],
  },
  {
    code: "03",
    name: "Body Shop",
    label: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original colored", lvl: 3 },
      { name: "Next.js", icon: "devicon-nextjs-plain", lvl: 3 },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", lvl: 3 },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", lvl: 4 },
    ],
  },
  {
    code: "04",
    name: "Pit Automation",
    label: "Automation & AI",
    items: [
      { name: "Automation", icon: null, svg: "gear", lvl: 4 },
      { name: "Web Scraping", icon: null, svg: "scrape", lvl: 4 },
      { name: "LLM Integration", icon: null, svg: "ai", lvl: 3 },
      { name: "Py Scripts", icon: "devicon-python-plain colored", lvl: 4 },
    ],
  },
  {
    code: "05",
    name: "Data Vault",
    label: "Databases & Storage",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", lvl: 4 },
      { name: "MySQL", icon: "devicon-mysql-original colored", lvl: 3 },
      { name: "Supabase", icon: "devicon-supabase-plain colored", lvl: 3 },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", lvl: 3 },
    ],
  },
  {
    code: "06",
    name: "Garage Tools",
    label: "Tooling & DevOps",
    items: [
      { name: "Git", icon: "devicon-git-plain colored", lvl: 4 },
      { name: "Docker", icon: "devicon-docker-plain colored", lvl: 3 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", lvl: 4 },
      { name: "Linux", icon: "devicon-linux-plain", lvl: 3 },
    ],
  },
];

const PT: SkillGroup[] = [
  { ...EN[0], name: "Sala de Máquinas", label: "Backend & Dados" },
  {
    ...EN[1],
    name: "Baia de Dashboards",
    label: "BI & Analytics",
    items: [
      { name: "Power BI", icon: null, svg: "powerbi", lvl: 4 },
      { name: "DAX", icon: null, svg: "dax", lvl: 3 },
      { name: "Modelagem", icon: null, svg: "model", lvl: 4 },
      { name: "Excel", icon: null, svg: "excel", lvl: 4 },
    ],
  },
  { ...EN[2], name: "Funilaria", label: "Frontend" },
  {
    ...EN[3],
    name: "Automação do Box",
    label: "Automação & IA",
    items: [
      { name: "Automação", icon: null, svg: "gear", lvl: 4 },
      { name: "Web Scraping", icon: null, svg: "scrape", lvl: 4 },
      { name: "Integração LLM", icon: null, svg: "ai", lvl: 3 },
      { name: "Scripts Py", icon: "devicon-python-plain colored", lvl: 4 },
    ],
  },
  { ...EN[4], name: "Cofre de Dados", label: "Bancos & Storage" },
  { ...EN[5], name: "Ferramentas", label: "Tooling & DevOps" },
];

export function getSkills(lang: Lang): SkillGroup[] {
  return lang === "pt" ? PT : EN;
}
