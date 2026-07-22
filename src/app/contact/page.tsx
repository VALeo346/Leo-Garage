"use client";

import { Reveal } from "@/components/atoms/reveal";
import { useLang } from "@/lib/i18n";
import { getUiCopy } from "@/data/content";

const EMAIL = "leoaviana1206@gmail.com";
const LINKEDIN = "https://br.linkedin.com/in/leonardo-albergoni-viana-55b81929a";
const GITHUB = "https://github.com/VALeo346";

export default function ContactPage() {
  const { lang } = useLang();
  const c = getUiCopy(lang);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1000px] flex-col justify-center px-7 pb-[120px] pt-[90px]">
      <Reveal>
        <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[.22em] text-race">
          {"// "}
          {c.contactKicker}
        </div>
        <h1 className="m-0 max-w-[14ch] text-[clamp(44px,7vw,84px)] font-bold leading-[1.0] tracking-[-0.03em]">
          {c.contactTitle}
        </h1>
        <p className="mb-0 mt-[26px] max-w-[520px] text-lg leading-[1.65] text-[rgba(245,246,248,.76)]">
          {c.contactSub}
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-11 flex flex-wrap gap-3.5">
        <a
          href={`mailto:${EMAIL}`}
          className="lg-cta bg-race px-[30px] py-4 text-[15px] font-semibold text-white no-underline shadow-[0_8px_30px_rgba(215,25,32,.35)]"
        >
          {c.contactEmail} →
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="lg-ghost border border-white/25 px-[30px] py-4 text-[15px] font-semibold text-chalk no-underline"
        >
          LinkedIn
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="lg-ghost border border-white/25 px-[30px] py-4 text-[15px] font-semibold text-chalk no-underline"
        >
          GitHub
        </a>
        <a
          href="#"
          className="lg-ghost border border-white/25 px-[30px] py-4 text-[15px] font-semibold text-chalk no-underline"
        >
          {c.contactCV} ↓
        </a>
      </Reveal>
      <Reveal delay={0.18} className="mt-16 flex flex-wrap gap-10 font-mono text-[13px] text-[rgba(245,246,248,.6)]">
        <div>
          <span className="text-[rgba(245,246,248,.4)]">{c.contactLocation}</span>
          <br />
          <span className="text-chalk">Campinas · SP · Brazil</span>
        </div>
        <div>
          <span className="text-[rgba(245,246,248,.4)]">{c.contactStatus}</span>
          <br />
          <span className="text-signal">● {c.contactOpen}</span>
        </div>
      </Reveal>
    </div>
  );
}
