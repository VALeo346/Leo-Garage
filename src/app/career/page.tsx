"use client";

import { Reveal } from "@/components/atoms/reveal";
import { useLang } from "@/lib/i18n";
import { getCareer, getUiCopy } from "@/data/content";

export default function CareerPage() {
  const { lang } = useLang();
  const c = getUiCopy(lang);
  const career = getCareer(lang);

  return (
    <div className="mx-auto min-h-[calc(100vh-70px)] max-w-[980px] px-7 pb-[120px] pt-20">
      <Reveal>
        <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[.22em] text-race">
          {"// "}
          {c.careerKicker}
        </div>
        <h1 className="m-0 text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.03em]">
          {c.careerTitle}
        </h1>
      </Reveal>
      <div className="relative mt-16 pl-[34px]">
        <div className="absolute bottom-1.5 left-[7px] top-1.5 w-[2px] bg-[linear-gradient(180deg,#D71920,rgba(215,25,32,.1))]" />
        {career.map((job, i) => (
          <Reveal key={job.period} delay={i * 0.08}>
            <div className="relative pb-[46px]">
              <span className="absolute -left-[34px] top-[5px] h-4 w-4 rounded-full border-2 border-race bg-garage shadow-[0_0_12px_rgba(215,25,32,.6)]" />
              <div className="mb-2 font-mono text-xs tracking-[.1em] text-race">{job.period}</div>
              <h3 className="m-0 text-2xl font-bold tracking-[-0.01em]">{job.role}</h3>
              <div className="mb-3.5 mt-[5px] text-sm text-[rgba(245,246,248,.6)]">{job.org}</div>
              <p className="m-0 max-w-[560px] text-[15px] leading-[1.7] text-[rgba(245,246,248,.74)]">
                {job.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
