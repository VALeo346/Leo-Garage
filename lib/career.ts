import type { Lang } from "./content";

export interface CareerEntry {
  period: string;
  role: string;
  org: string;
  desc: string;
}

const EN: CareerEntry[] = [
  {
    period: "2024 — Present",
    role: "Software / Data Engineer",
    org: "Bosch · Brazil",
    desc: "Building internal tools, BI dashboards and automation pipelines that remove manual work and turn data into decisions.",
  },
  {
    period: "2023 — 2024",
    role: "Junior Developer",
    org: "Bosch · Brazil",
    desc: "Moved into full-stack and data work — shipped internal apps and started automating recurring reporting.",
  },
  {
    period: "2022 — 2023",
    role: "Apprentice",
    org: "Bosch · Brazil",
    desc: "Started in the apprenticeship program, learning engineering fundamentals and building my first full-stack portal.",
  },
  {
    period: "Ongoing",
    role: "Builder · Leo Garage",
    org: "Personal projects",
    desc: "Outside of work, building personal projects — the garage where I experiment with new stacks and ideas.",
  },
];

const PT: CareerEntry[] = [
  {
    period: "2024 — Atual",
    role: "Engenheiro de Software / Dados",
    org: "Bosch · Brasil",
    desc: "Construindo ferramentas internas, dashboards de BI e pipelines de automação que removem trabalho manual e transformam dados em decisões.",
  },
  {
    period: "2023 — 2024",
    role: "Desenvolvedor Júnior",
    org: "Bosch · Brasil",
    desc: "Migrei para trabalho full-stack e de dados — entreguei apps internos e comecei a automatizar relatórios recorrentes.",
  },
  {
    period: "2022 — 2023",
    role: "Aprendiz",
    org: "Bosch · Brasil",
    desc: "Comecei no programa de aprendizagem, aprendendo os fundamentos de engenharia e construindo meu primeiro portal full-stack.",
  },
  {
    period: "Contínuo",
    role: "Builder · Leo Garage",
    org: "Projetos pessoais",
    desc: "Fora do trabalho, construindo projetos pessoais — a garagem onde experimento novas stacks e ideias.",
  },
];

export function getCareer(lang: Lang): CareerEntry[] {
  return lang === "pt" ? PT : EN;
}
