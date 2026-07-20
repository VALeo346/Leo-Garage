"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { getProject, getProjects } from "@/lib/projects";

const CAR_IMG = "/assets/car_default.svg";
const mono = "var(--font-mono)";

const labelStyle: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(245,246,248,.45)",
};

const sectionTitle: React.CSSProperties = {
  margin: "0 0 14px",
  fontFamily: mono,
  fontSize: 13,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#D71920",
};

export default function ProjectDetailPage() {
  const { lang } = useLang();
  const c = getContent(lang);
  const params = useParams<{ slug: string }>();
  const active = getProject(lang, params.slug) ?? getProjects(lang)[0];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 28px 120px", minHeight: "calc(100vh - 70px)" }}>
      <Link
        href="/projects"
        data-reveal
        style={{
          display: "inline-block",
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "rgba(245,246,248,.6)",
          textDecoration: "none",
          marginBottom: 36,
        }}
      >
        ← {c.backToProjects}
      </Link>
      <div data-reveal style={{ animationDelay: ".05s" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
            fontFamily: mono,
            fontSize: 13,
            letterSpacing: ".1em",
          }}
        >
          <span style={{ color: "#D71920" }}>{active.code}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ color: "rgba(245,246,248,.6)" }}>{active.year}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ textTransform: "uppercase", color: active.statusColor }}>● {active.status}</span>
        </div>
        <h1
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "clamp(38px,6vw,68px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            maxWidth: "16ch",
          }}
        >
          {active.title}
        </h1>
        <p style={{ margin: "24px 0 0", maxWidth: 620, fontSize: 18, lineHeight: 1.65, color: "rgba(245,246,248,.78)" }}>
          {active.overview}
        </p>
      </div>

      {/* hero visual */}
      <div
        data-reveal
        style={{
          animationDelay: ".12s",
          position: "relative",
          height: 340,
          margin: "48px 0",
          border: "1px solid rgba(255,255,255,.14)",
          overflow: "hidden",
          background: "linear-gradient(135deg,rgba(22,24,28,.55),rgba(7,8,9,.55))",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 75% 25%,rgba(215,25,32,.2),transparent 55%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            width: 20,
            height: 20,
            borderTop: "2px solid #D71920",
            borderLeft: "2px solid #D71920",
          }}
        />
        <img
          src={CAR_IMG}
          alt=""
          style={{
            position: "absolute",
            left: "50%",
            top: "54%",
            transform: "translate(-50%,-50%)",
            height: "82%",
            filter: "drop-shadow(0 26px 34px rgba(0,0,0,.65))",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: 16,
            right: 18,
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "rgba(245,246,248,.5)",
          }}
        >
          {active.title}
        </span>
        <span
          style={{
            position: "absolute",
            left: 24,
            bottom: 10,
            fontFamily: "var(--font-anton)",
            fontSize: 120,
            color: "rgba(255,255,255,.05)",
          }}
        >
          {active.num}
        </span>
      </div>

      {/* spec grid */}
      <div
        data-reveal
        className="lg-grid-2"
        style={{
          animationDelay: ".16s",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          border: "1px solid rgba(255,255,255,.14)",
          marginBottom: 52,
        }}
      >
        <div
          style={{
            padding: 26,
            borderRight: "1px solid rgba(255,255,255,.12)",
            borderBottom: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <div style={labelStyle}>{c.specRole}</div>
          <div style={{ fontSize: 17, marginTop: 8 }}>{active.role}</div>
        </div>
        <div style={{ padding: 26, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
          <div style={labelStyle}>{c.specYear}</div>
          <div style={{ fontSize: 17, marginTop: 8 }}>{active.year}</div>
        </div>
        <div style={{ padding: 26, borderRight: "1px solid rgba(255,255,255,.12)" }}>
          <div style={labelStyle}>{c.specStack}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 12 }}>
            {active.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "rgba(245,246,248,.62)",
                  border: "1px solid rgba(255,255,255,.18)",
                  padding: "4px 9px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div style={{ padding: 26 }}>
          <div style={labelStyle}>{c.specStatus}</div>
          <div style={{ fontSize: 17, marginTop: 8, color: active.statusColor }}>{active.status}</div>
        </div>
      </div>

      {/* narrative */}
      <div
        data-reveal
        className="lg-grid-2"
        style={{ animationDelay: ".2s", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}
      >
        <div>
          <h3 style={sectionTitle}>{c.theProblem}</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(245,246,248,.74)" }}>
            {active.problem}
          </p>
        </div>
        <div>
          <h3 style={sectionTitle}>{c.theBuild}</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(245,246,248,.74)" }}>
            {active.solution}
          </p>
        </div>
      </div>

      {/* outcomes */}
      <div
        data-reveal
        style={{
          animationDelay: ".24s",
          marginTop: 48,
          borderTop: "1px solid rgba(255,255,255,.12)",
          paddingTop: 36,
        }}
      >
        <h3 style={{ ...sectionTitle, marginBottom: 22 }}>{c.outcomes}</h3>
        {active.outcomes.map((o) => (
          <div
            key={o}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "baseline",
              padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <span style={{ fontFamily: mono, color: "#D71920", fontSize: 14 }}>→</span>
            <span style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(245,246,248,.82)" }}>{o}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
