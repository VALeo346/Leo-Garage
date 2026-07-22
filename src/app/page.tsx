"use client";

import Link from "next/link";
import { Reveal } from "@/components/atoms/reveal";
import { WorkCarousel } from "@/components/organisms/work-carousel";
import { useLang } from "@/lib/i18n";
import { useCountUp, useInView, useTilt } from "@/lib/hooks";
import { getAboutSpec, getAboutTraits, getUiCopy } from "@/data/content";

function StatValue({ value, start }: { value: string; start: boolean }) {
  const display = useCountUp(value, start);
  return <div className="text-[26px] font-bold text-chalk">{display}</div>;
}

export default function HomePage() {
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const traits = getAboutTraits(lang);
  const spec = getAboutSpec(lang);
  const { ref: statsRef, inView: statsInView } = useInView(0.4);
  const { ref: tiltRef, onPointerMove, onPointerLeave } = useTilt(5);

  return (
    <div>
      {/* ===== hero ===== */}
      <div className="relative mx-auto flex min-h-[calc(100vh-70px)] max-w-[1200px] flex-col justify-center px-7 pb-[120px] pt-[60px]">
        <Reveal className="mb-6 flex items-center gap-3 font-mono text-[13px] uppercase tracking-[.24em] text-[rgba(245,246,248,.75)]">
          <span
            className="h-2 w-2 rounded-full bg-race"
            style={{ animation: "lgBlink 2.4s infinite" }}
          />
          {c.kicker}
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="m-0 max-w-[14ch] text-[clamp(46px,7.4vw,92px)] font-bold leading-[1.0] tracking-[-0.03em]">
            {c.heroA} <span className="text-race">{c.heroB}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mb-0 mt-7 max-w-[540px] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-[rgba(245,246,248,.78)]">
            {c.heroSub}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-5">
          <Link
            href="/projects"
            className="lg-cta bg-race px-[30px] py-4 text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(215,25,32,.35)]"
          >
            {c.ctaPrimary} →
          </Link>
          <Link
            href="/contact"
            className="border-b border-[rgba(245,246,248,.4)] pb-1 text-[15px] text-[rgba(245,246,248,.85)]"
          >
            {c.ctaSecondary}
          </Link>
        </Reveal>
        {/* live stats row */}
        <Reveal delay={0.32} className="mt-16">
          <div ref={statsRef} className="flex flex-wrap gap-11 font-mono">
            {c.stats.map((s) => (
              <div key={s.label}>
                <StatValue value={s.value} start={statsInView} />
                <div className="mt-[5px] text-[11px] uppercase tracking-[.1em] text-[rgba(245,246,248,.5)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        {/* vertical index */}
        <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 flex-col gap-[9px] font-mono text-[11px] tracking-[.1em] text-[rgba(245,246,248,.4)] md:flex">
          <span className="text-race">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
        </div>
        <div
          className="absolute bottom-[34px] left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[.2em] text-[rgba(245,246,248,.55)]"
          style={{ animation: "lgFloatY 2.6s ease-in-out infinite" }}
        >
          {c.scroll} ↓
        </div>
      </div>

      {/* ===== about / driver profile ===== */}
      <div className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(5,6,8,0),rgba(5,6,8,.45))]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[60px] px-7 py-[104px] lg:grid-cols-[1.08fr_.92fr]">
          {/* narrative */}
          <Reveal>
            <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[.22em] text-race">
              {"// "}
              {c.aboutKicker}
            </div>
            <h2 className="m-0 text-[clamp(34px,4.6vw,56px)] font-bold tracking-[-0.03em]">
              {c.aboutTitle}
            </h2>
            <p className="mb-0 mt-[26px] max-w-[530px] text-[17px] leading-[1.75] text-[rgba(245,246,248,.8)]">
              {c.aboutP1}
            </p>
            <p className="mb-0 mt-[18px] max-w-[530px] text-[17px] leading-[1.75] text-[rgba(245,246,248,.7)]">
              {c.aboutP2}
            </p>
            <div className="mt-[34px] flex flex-wrap gap-3.5 font-mono text-[11px] uppercase tracking-[.08em] text-[rgba(245,246,248,.7)]">
              {traits.map((t) => (
                <span key={t} className="flex items-center gap-2 border border-white/20 px-[13px] py-2">
                  <span className="text-race">◆</span>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          {/* driver profile spec card */}
          <Reveal delay={0.12}>
            <div
              ref={tiltRef}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              className="lg-tilt relative border border-white/14 bg-panel backdrop-blur-[8px]"
            >
              <span className="absolute -left-px -top-px h-[18px] w-[18px] border-l-2 border-t-2 border-race" />
              <span className="absolute -bottom-px -right-px h-[18px] w-[18px] border-b-2 border-r-2 border-race" />
              <div className="flex items-center justify-between border-b border-white/12 px-6 py-[18px] font-mono text-[11px] uppercase tracking-[.14em] text-[rgba(245,246,248,.7)]">
                <span className="flex items-center gap-2">
                  <span
                    className="h-[7px] w-[7px] rounded-full bg-race shadow-[0_0_8px_#D71920]"
                    style={{ animation: "lgBlink 2.2s infinite" }}
                  />
                  Driver Profile
                </span>
                <span className="text-race">L. Viana</span>
              </div>
              <div className="px-6 pb-3 pt-2">
                {spec.map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-[18px] border-b border-white/7 py-4"
                  >
                    <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,246,248,.45)]">
                      {row.k}
                    </span>
                    <span className="text-right text-[15px]" style={{ color: row.color }}>
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 border-t border-white/12 px-6 py-4 font-mono text-[11px] uppercase tracking-[.12em] text-signal">
                ● {c.contactOpen}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== selected work carousel ===== */}
      <WorkCarousel />
    </div>
  );
}
