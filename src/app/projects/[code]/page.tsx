"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/atoms/reveal";
import { useLang } from "@/lib/i18n";
import { getProjects, getUiCopy, projectSlug } from "@/data/content";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const active = getProjects(lang).find((p) => projectSlug(p) === code.toLowerCase());
  if (!active) notFound();

  return (
    <div className="mx-auto min-h-[calc(100vh-70px)] max-w-[1100px] px-7 pb-[120px] pt-[60px]">
      <Reveal>
        <Link
          href="/projects"
          className="mb-9 inline-block font-mono text-xs uppercase tracking-[.14em] text-[rgba(245,246,248,.6)]"
        >
          ← {c.backToProjects}
        </Link>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mb-5 flex items-center gap-4 font-mono text-[13px] tracking-[.1em]">
          <span className="text-race">{active.code}</span>
          <span className="opacity-40">·</span>
          <span className="text-[rgba(245,246,248,.6)]">{active.year}</span>
          <span className="opacity-40">·</span>
          <span className="uppercase" style={{ color: active.statusColor }}>
            ● {active.status}
          </span>
        </div>
        <h1 className="m-0 max-w-[16ch] text-[clamp(38px,6vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]">
          {active.title}
        </h1>
        <p className="mb-0 mt-6 max-w-[620px] text-lg leading-[1.65] text-[rgba(245,246,248,.78)]">
          {active.overview}
        </p>
      </Reveal>

      {/* hero visual */}
      <Reveal delay={0.12} className="relative my-12 h-[340px] overflow-hidden border border-white/14 bg-[linear-gradient(135deg,rgba(22,24,28,.55),rgba(7,8,9,.55))] backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(215,25,32,.2),transparent_55%)]" />
        <span className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-race" />
        {/* eslint-disable-next-line @next/next/no-img-element -- transform-positioned showcase art */}
        <img
          src="/assets/car_default.png"
          alt=""
          className="absolute left-1/2 top-[54%] h-[82%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_26px_34px_rgba(0,0,0,.65)]"
        />
        <span className="absolute bottom-4 right-[18px] font-mono text-xs uppercase tracking-[.12em] text-[rgba(245,246,248,.5)]">
          {active.title}
        </span>
        <span className="absolute bottom-2.5 left-6 font-display text-[120px] text-white/5">
          {active.num}
        </span>
      </Reveal>

      {/* spec grid */}
      <Reveal delay={0.16} className="mb-[52px] grid grid-cols-1 border border-white/14 sm:grid-cols-2">
        <div className="border-b border-white/12 p-[26px] sm:border-r">
          <div className="font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,246,248,.45)]">
            {c.specRole}
          </div>
          <div className="mt-2 text-[17px]">{active.role}</div>
        </div>
        <div className="border-b border-white/12 p-[26px]">
          <div className="font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,246,248,.45)]">
            {c.specYear}
          </div>
          <div className="mt-2 text-[17px]">{active.year}</div>
        </div>
        <div className="border-b border-white/12 p-[26px] sm:border-b-0 sm:border-r">
          <div className="font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,246,248,.45)]">
            {c.specStack}
          </div>
          <div className="mt-3 flex flex-wrap gap-[7px]">
            {active.tags.map((t) => (
              <span
                key={t}
                className="border border-white/18 px-[9px] py-1 font-mono text-[10px] uppercase tracking-[.06em] text-[rgba(245,246,248,.62)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="p-[26px]">
          <div className="font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,246,248,.45)]">
            {c.specStatus}
          </div>
          <div className="mt-2 text-[17px]" style={{ color: active.statusColor }}>
            {active.status}
          </div>
        </div>
      </Reveal>

      {/* narrative */}
      <Reveal delay={0.2} className="grid grid-cols-1 gap-11 md:grid-cols-2">
        <div>
          <h3 className="mb-3.5 mt-0 font-mono text-[13px] uppercase tracking-[.14em] text-race">
            {c.theProblem}
          </h3>
          <p className="m-0 text-base leading-[1.7] text-[rgba(245,246,248,.74)]">
            {active.problem}
          </p>
        </div>
        <div>
          <h3 className="mb-3.5 mt-0 font-mono text-[13px] uppercase tracking-[.14em] text-race">
            {c.theBuild}
          </h3>
          <p className="m-0 text-base leading-[1.7] text-[rgba(245,246,248,.74)]">
            {active.solution}
          </p>
        </div>
      </Reveal>

      {/* outcomes */}
      <Reveal delay={0.24} className="mt-12 border-t border-white/12 pt-9">
        <h3 className="mb-[22px] mt-0 font-mono text-[13px] uppercase tracking-[.14em] text-race">
          {c.outcomes}
        </h3>
        {active.outcomes.map((o) => (
          <div key={o} className="flex items-baseline gap-4 border-b border-white/8 py-3.5">
            <span className="font-mono text-sm text-race">→</span>
            <span className="text-base leading-[1.6] text-[rgba(245,246,248,.82)]">{o}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
