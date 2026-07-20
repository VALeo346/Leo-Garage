"use client";

import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";

const mono = "var(--font-mono)";

const ghostLink: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,.25)",
  color: "#F5F6F8",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 15,
  padding: "16px 30px",
};

export default function ContactPage() {
  const { lang } = useLang();
  const c = getContent(lang);

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "90px 28px 120px",
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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
          {c.contactKicker}
        </div>
        <h1
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "clamp(44px,7vw,84px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: "14ch",
          }}
        >
          {c.contactTitle}
        </h1>
        <p style={{ margin: "26px 0 0", maxWidth: 520, fontSize: 18, lineHeight: 1.65, color: "rgba(245,246,248,.76)" }}>
          {c.contactSub}
        </p>
      </div>
      <div
        data-reveal
        style={{ animationDelay: ".1s", display: "flex", flexWrap: "wrap", gap: 14, marginTop: 44 }}
      >
        <a
          href="mailto:leoaviana1206@gmail.com"
          className="lg-btn-red"
          style={{
            background: "#D71920",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 15,
            padding: "16px 30px",
            boxShadow: "0 8px 30px rgba(215,25,32,.35)",
          }}
        >
          {c.contactEmail} →
        </a>
        <a href="#" className="lg-btn-ghost" style={ghostLink}>
          LinkedIn
        </a>
        <a href="#" className="lg-btn-ghost" style={ghostLink}>
          GitHub
        </a>
        <a href="#" className="lg-btn-ghost" style={ghostLink}>
          {c.contactCV} ↓
        </a>
      </div>
      <div
        data-reveal
        style={{
          animationDelay: ".18s",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          marginTop: 64,
          fontFamily: mono,
          fontSize: 13,
          color: "rgba(245,246,248,.6)",
        }}
      >
        <div>
          <span style={{ color: "rgba(245,246,248,.4)" }}>{c.contactLocation}</span>
          <br />
          <span style={{ color: "#F5F6F8" }}>Campinas · SP · Brazil</span>
        </div>
        <div>
          <span style={{ color: "rgba(245,246,248,.4)" }}>{c.contactStatus}</span>
          <br />
          <span style={{ color: "#22C55E" }}>● {c.contactOpen}</span>
        </div>
      </div>
    </div>
  );
}
