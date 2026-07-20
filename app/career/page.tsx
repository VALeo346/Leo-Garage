"use client";

import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { getCareer } from "@/lib/career";

const mono = "var(--font-mono)";

export default function CareerPage() {
  const { lang } = useLang();
  const c = getContent(lang);
  const career = getCareer(lang);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "80px 28px 120px", minHeight: "calc(100vh - 70px)" }}>
      <div data-reveal>
        <div
          style={{
            fontFamily: mono,
            fontSize: 13,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#D71920",
            marginBottom: 18,
          }}
        >
          {"// "}
          {c.careerKicker}
        </div>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em" }}>
          {c.careerTitle}
        </h1>
      </div>
      <div style={{ marginTop: 64, position: "relative", paddingLeft: 34 }}>
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 6,
            bottom: 6,
            width: 2,
            background: "linear-gradient(180deg,#D71920,rgba(215,25,32,.1))",
          }}
        />
        {career.map((job, i) => (
          <div
            key={job.period}
            data-reveal
            style={{ animationDelay: `${i * 0.08}s`, position: "relative", paddingBottom: 46 }}
          >
            <span
              style={{
                position: "absolute",
                left: -34,
                top: 5,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#050608",
                border: "2px solid #D71920",
                boxShadow: "0 0 12px rgba(215,25,32,.6)",
              }}
            />
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".1em", color: "#D71920", marginBottom: 8 }}>
              {job.period}
            </div>
            <h3 style={{ margin: 0, fontWeight: 700, fontSize: 24, letterSpacing: "-0.01em" }}>{job.role}</h3>
            <div style={{ fontSize: 14, color: "rgba(245,246,248,.6)", marginTop: 5, marginBottom: 14 }}>
              {job.org}
            </div>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 15, lineHeight: 1.7, color: "rgba(245,246,248,.74)" }}>
              {job.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
