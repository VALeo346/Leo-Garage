"use client";

import { Reveal } from "@/components/atoms/reveal";
import { TechIcon } from "@/components/molecules/tech-icon";
import { useLang } from "@/lib/i18n";
import { getSkills, getUiCopy } from "@/data/content";

export default function SkillsPage() {
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const skills = getSkills(lang);

  return (
    <div className="mx-auto min-h-[calc(100vh-70px)] w-[min(90vw,1760px)] pb-[120px] pt-20">
      <Reveal>
        <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[.22em] text-race">
          {"// "}
          {c.skillsKicker}
        </div>
        <h1 className="m-0 text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.03em]">
          {c.skillsTitle}
        </h1>
        <p className="mb-0 mt-[22px] max-w-[560px] text-[17px] leading-[1.6] text-[rgba(245,246,248,.72)]">
          {c.skillsSub}
        </p>
      </Reveal>
      <div className="mt-[60px] grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((g, gi) => (
          <Reveal key={g.code} delay={gi * 0.06}>
            <div className="lg-skillcard relative overflow-hidden border border-white/12 bg-panel px-8 py-9 backdrop-blur-[8px]">
              <span className="absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#D71920,transparent)]" />
              {/* header */}
              <div className="mb-7 flex items-center gap-[17px]">
                <div className="relative flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center border border-[rgba(215,25,32,.5)] bg-[rgba(215,25,32,.1)]">
                  <span className="font-display text-[25px] tracking-[.02em] text-race">
                    {g.code}
                  </span>
                </div>
                <div>
                  <h3 className="m-0 text-[23px] font-bold tracking-[-0.01em]">{g.name}</h3>
                  <div className="mt-[5px] font-mono text-xs uppercase tracking-[.08em] text-[rgba(245,246,248,.5)]">
                    {g.label}
                  </div>
                </div>
              </div>
              {/* tech grid */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {g.items.map((it) => (
                  <div
                    key={it.name}
                    className="lg-tech flex items-center gap-3.5 border border-white/10 bg-white/2 px-[17px] py-4"
                  >
                    <TechIcon item={it} />
                    <div className="min-w-0 flex-1">
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-semibold tracking-[-0.01em]">
                        {it.name}
                      </div>
                      <div className="mt-[7px] flex gap-1">
                        {Array.from({ length: 4 }, (_, i) => (
                          <span
                            key={i}
                            className={`h-1 w-4 ${i < it.lvl ? "lg-fill" : ""}`}
                            style={{
                              background: i < it.lvl ? "#D71920" : "rgba(255,255,255,.15)",
                              animationDelay: i < it.lvl ? `${0.15 + i * 0.12}s` : undefined,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
