"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/atoms/reveal";
import { useLang } from "@/lib/i18n";
import { getProjects, getUiCopy, projectSlug } from "@/data/content";

/**
 * The Showroom: one project on stage at a time, garage-style, with alternating
 * A/B entry animations (flip), arrow/keyboard/dot navigation and a big
 * Anton-numbered backdrop — ported from the design's projects screen.
 */
export default function ProjectsPage() {
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const projects = getProjects(lang);

  const [show, setShow] = useState(0);
  const [flip, setFlip] = useState(false);

  const count = projects.length;
  const si = ((show % count) + count) % count;
  const sp = projects[si];

  const goTo = (i: number) => {
    setShow(i);
    setFlip((f) => !f);
  };
  const next = () => goTo((si + 1) % count);
  const prev = () => goTo((si - 1 + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setShow((s) => (s + 1) % count);
        setFlip((f) => !f);
      }
      if (e.key === "ArrowLeft") {
        setShow((s) => (s - 1 + count) % count);
        setFlip((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  const carAnim = flip ? "lgCarInA" : "lgCarInB";
  const infoAnim = flip ? "lgInfoInA" : "lgInfoInB";

  return (
    <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1360px] flex-col px-7 pb-20 pt-12">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3.5 font-mono text-[13px] uppercase tracking-[.22em] text-race">
            {"// "}
            {c.projectsKicker}
          </div>
          <h1 className="m-0 text-[clamp(36px,4.6vw,58px)] font-bold tracking-[-0.03em]">
            {c.projectsTitle}
          </h1>
        </div>
        <div className="flex items-baseline gap-2 font-mono text-[13px] tracking-[.14em] text-[rgba(245,246,248,.5)]">
          <span className="text-[26px] font-bold text-race">
            {String(si + 1).padStart(2, "0")}
          </span>
          <span>/ {String(count).padStart(2, "0")}</span>
        </div>
      </Reveal>

      {/* showroom stage */}
      <div className="relative mt-3 grid flex-1 grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(340px,42%)_1fr]">
        {/* project info */}
        <div
          key={`info-${si}`}
          style={{ animation: `${infoAnim} .55s cubic-bezier(.2,.7,.2,1) both` }}
        >
          <div className="flex items-center gap-3.5 font-mono text-xs tracking-[.1em]">
            <span className="text-race">{sp.code}</span>
            <span className="opacity-35">·</span>
            <span className="text-[rgba(245,246,248,.6)]">{sp.year}</span>
            <span className="opacity-35">·</span>
            <span className="uppercase" style={{ color: sp.statusColor }}>
              ● {sp.status}
            </span>
          </div>
          <h2 className="mb-0 mt-[18px] text-[clamp(32px,3.4vw,50px)] font-bold leading-[1.05] tracking-[-0.03em]">
            {sp.title}
          </h2>
          <p className="mb-0 mt-5 max-w-[470px] text-[16.5px] leading-[1.7] text-[rgba(245,246,248,.78)]">
            {sp.overview}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {sp.tags.map((t) => (
              <span
                key={t}
                className="border border-white/20 px-[11px] py-[5px] font-mono text-[10px] uppercase tracking-[.08em] text-[rgba(245,246,248,.72)]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={sp.link ?? "#"}
              target="_blank"
              rel="noopener"
              className="lg-cta flex items-center gap-[9px] bg-race px-[26px] py-3.5 text-sm font-semibold text-white no-underline shadow-[0_8px_30px_rgba(215,25,32,.35)]"
            >
              {c.launch} →
            </a>
            <Link
              href={`/projects/${projectSlug(sp)}`}
              className="lg-ghost border border-white/25 px-[26px] py-3.5 text-sm font-semibold text-chalk"
            >
              {c.viewSpec}
            </Link>
          </div>
        </div>
        {/* the car */}
        <div className="relative flex min-h-[360px] items-center justify-center py-5">
          <span className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(160px,22vw,340px)] leading-none text-[rgba(255,255,255,.045)]">
            {sp.num}
          </span>
          <div className="pointer-events-none absolute left-1/2 top-[52%] h-[52vw] max-h-[700px] w-[52vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(215,25,32,.16),transparent_60%)]" />
          <div
            key={`car-${si}`}
            className="lg-car relative w-[min(100%,860px)]"
            style={{ animation: `${carAnim} .65s cubic-bezier(.2,.7,.2,1) both` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- showroom art, natural aspect */}
            <img
              src="/assets/car_default.png"
              alt={sp.title}
              className="block w-full drop-shadow-[0_34px_44px_rgba(0,0,0,.7)]"
            />
            <div className="absolute -bottom-3.5 left-1/2 h-9 w-[76%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.75),transparent_70%)]" />
          </div>
        </div>
      </div>

      {/* garage controls */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-[22px]">
        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="lg-arrow flex h-[52px] w-[52px] cursor-pointer items-center justify-center border border-white/22 bg-white/3 text-2xl text-chalk"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="lg-arrow-solid flex h-[52px] w-[52px] cursor-pointer items-center justify-center border border-race bg-race text-2xl text-white shadow-[0_6px_24px_rgba(215,25,32,.4)] transition-transform duration-200"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-2.5">
          {projects.map((p, i) => (
            <button
              key={p.code}
              onClick={() => goTo(i)}
              aria-label="Go to project"
              className="h-[7px] cursor-pointer border-none p-0"
              style={{
                width: i === si ? 32 : 8,
                background: i === si ? "#D71920" : "rgba(255,255,255,.22)",
                transition: "all .35s",
              }}
            />
          ))}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[.14em] text-[rgba(245,246,248,.45)]">
          {sp.role}
        </div>
      </div>
    </div>
  );
}
