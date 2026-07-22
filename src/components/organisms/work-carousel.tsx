"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/atoms/reveal";
import { useLang } from "@/lib/i18n";
import { getProjects, getUiCopy, projectSlug } from "@/data/content";

/**
 * Center-focused "Selected work" carousel from the home screen.
 * Sizing math is ported verbatim: cardW = clamp(vw * .56, 300, 520),
 * slot = cardW + 28, x = vw/2 - cardW/2 - index * slot.
 */
export function WorkCarousel() {
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const slides = getProjects(lang).slice(0, 5);

  const [index, setIndex] = useState(0);
  const [viewportW, setViewportW] = useState(1100);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragX = useRef<number | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      if (el.clientWidth) setViewportW(el.clientWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // gentle autoplay — pauses while the pointer is over the carousel and
  // resets whenever the slide changes (manual interaction included)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused, index, slides.length]);

  const cardW = Math.round(Math.min(Math.max(viewportW * 0.56, 300), 520));
  const slot = cardW + 28;
  const x = viewportW / 2 - cardW / 2 - index * slot;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="mx-auto max-w-[1320px] px-5 pb-[130px] pt-[30px]">
      <Reveal className="mb-[46px] flex items-end justify-between gap-6 px-2">
        <div>
          <div className="mb-3.5 font-mono text-[13px] uppercase tracking-[.22em] text-race">
            {"// "}
            {c.projectsKicker}
          </div>
          <h2 className="m-0 text-[clamp(30px,4vw,46px)] font-bold tracking-[-0.02em]">
            {c.workTitle}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="lg-arrow flex h-12 w-12 cursor-pointer items-center justify-center border border-white/20 bg-white/3 text-[22px] text-chalk"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="lg-arrow flex h-12 w-12 cursor-pointer items-center justify-center border border-white/20 bg-white/3 text-[22px] text-chalk"
          >
            ›
          </button>
        </div>
      </Reveal>

      {/* viewport — hover pauses autoplay, horizontal swipe navigates */}
      <div
        ref={viewportRef}
        className="relative touch-pan-y overflow-hidden py-[34px]"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => {
          setPaused(false);
          dragX.current = null;
        }}
        onPointerDown={(e) => {
          dragX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (dragX.current === null) return;
          const delta = e.clientX - dragX.current;
          dragX.current = null;
          if (delta < -40) next();
          if (delta > 40) prev();
        }}
      >
        <div
          className="flex items-center gap-7 will-change-transform"
          style={{
            transform: `translateX(${x}px)`,
            transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
          }}
        >
          {slides.map((p, i) => {
            const active = i === index;
            return (
              <div
                key={p.code}
                onClick={() => setIndex(i)}
                className="cursor-pointer"
                style={{
                  flex: `0 0 ${cardW}px`,
                  transform: `scale(${active ? 1 : 0.86})`,
                  opacity: active ? 1 : 0.42,
                  transition: "transform .6s cubic-bezier(.2,.7,.2,1),opacity .6s",
                }}
              >
                <div
                  className="relative overflow-hidden border bg-panel backdrop-blur-[8px]"
                  style={{
                    borderColor: active ? "rgba(215,25,32,.55)" : "rgba(255,255,255,.12)",
                    boxShadow: active ? "0 30px 70px rgba(0,0,0,.5)" : "none",
                  }}
                >
                  <span
                    className="absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#D71920,transparent)]"
                    style={{ opacity: active ? 1 : 0 }}
                  />
                  {/* visual */}
                  <div className="relative h-[230px] overflow-hidden bg-[linear-gradient(135deg,rgba(22,24,28,.7),rgba(7,8,9,.7))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(215,25,32,.2),transparent_60%)]" />
                    <span className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-race" />
                    <span className="absolute bottom-1.5 left-[22px] font-display text-[128px] leading-none text-white/6">
                      {p.num}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element -- transform-positioned showcase art */}
                    <img
                      src="/assets/car_default.png"
                      alt=""
                      className="absolute left-1/2 top-[56%] w-[72%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_20px_26px_rgba(0,0,0,.6)]"
                    />
                    <span
                      className="absolute right-4 top-4 font-mono text-[11px] uppercase tracking-[.1em]"
                      style={{ color: p.statusColor }}
                    >
                      ● {p.status}
                    </span>
                  </div>
                  {/* body */}
                  <div className="px-7 pb-[30px] pt-[26px]">
                    <span className="font-mono text-xs tracking-[.12em] text-race">
                      {p.code} · {p.year}
                    </span>
                    <h3 className="mb-0 mt-3 text-[26px] font-bold tracking-[-0.02em]">{p.title}</h3>
                    <p className="mb-0 mt-3.5 text-[15px] leading-[1.62] text-[rgba(245,246,248,.68)]">
                      {p.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-white/20 px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[.08em] text-[rgba(245,246,248,.64)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${projectSlug(p)}`}
                      className="mt-6 flex items-center gap-[9px] font-mono text-xs uppercase tracking-[.12em] text-chalk"
                    >
                      {c.viewSpec} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* dots */}
      <div className="mt-[30px] flex items-center justify-center gap-2.5">
        {slides.map((p, i) => (
          <button
            key={p.code}
            onClick={() => setIndex(i)}
            aria-label="Go to slide"
            className="h-[7px] cursor-pointer border-none p-0"
            style={{
              width: i === index ? 30 : 7,
              background: i === index ? "#D71920" : "rgba(255,255,255,.22)",
              transition: "all .35s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
