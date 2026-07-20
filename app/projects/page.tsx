"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { getProjects } from "@/lib/projects";

const CAR_IMG = "/assets/car_default.svg";
const mono = "var(--font-mono)";

export default function ProjectsPage() {
  const { lang } = useLang();
  const c = getContent(lang);
  const projects = getProjects(lang);

  const [show, setShow] = useState(0);
  const [flip, setFlip] = useState(false);

  const n = projects.length;
  const si = ((show % n) + n) % n;
  const sp = projects[si];

  const next = () => {
    setShow((s) => (s + 1) % n);
    setFlip((f) => !f);
  };
  const prev = () => {
    setShow((s) => (s - 1 + n) % n);
    setFlip((f) => !f);
  };
  const goTo = (i: number) => {
    setShow(i);
    setFlip((f) => !f);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const carAnim = flip ? "lgCarInA" : "lgCarInB";
  const infoAnim = flip ? "lgInfoInA" : "lgInfoInB";

  return (
    <div
      style={{
        maxWidth: 1360,
        margin: "0 auto",
        padding: "48px 28px 80px",
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        data-reveal
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 13,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#D71920",
              marginBottom: 14,
            }}
          >
            {"// "}
            {c.projectsKicker}
          </div>
          <h1
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(36px,4.6vw,58px)",
              letterSpacing: "-0.03em",
            }}
          >
            {c.projectsTitle}
          </h1>
        </div>
        <div
          style={{
            fontFamily: mono,
            letterSpacing: ".14em",
            color: "rgba(245,246,248,.5)",
            fontSize: 13,
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <span style={{ color: "#D71920", fontSize: 26, fontWeight: 700 }}>
            {String(si + 1).padStart(2, "0")}
          </span>
          <span>/ {String(n).padStart(2, "0")}</span>
        </div>
      </div>

      {/* showroom stage */}
      <div
        className="lg-showroom"
        style={{
          position: "relative",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "minmax(340px,42%) 1fr",
          gap: 36,
          alignItems: "center",
          marginTop: 12,
        }}
      >
        {/* project info */}
        <div key={`info-${si}`} style={{ animation: `${infoAnim} .55s cubic-bezier(.2,.7,.2,1) both` }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: ".1em",
            }}
          >
            <span style={{ color: "#D71920" }}>{sp.code}</span>
            <span style={{ opacity: 0.35 }}>·</span>
            <span style={{ color: "rgba(245,246,248,.6)" }}>{sp.year}</span>
            <span style={{ opacity: 0.35 }}>·</span>
            <span style={{ textTransform: "uppercase", color: sp.statusColor }}>● {sp.status}</span>
          </div>
          <h2
            style={{
              margin: "18px 0 0",
              fontWeight: 700,
              fontSize: "clamp(32px,3.4vw,50px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {sp.title}
          </h2>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: 470,
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(245,246,248,.78)",
            }}
          >
            {sp.overview}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
            {sp.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "rgba(245,246,248,.72)",
                  border: "1px solid rgba(255,255,255,.2)",
                  padding: "5px 11px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 32 }}
          >
            <a
              href={sp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-btn-red"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                background: "#D71920",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                padding: "14px 26px",
                boxShadow: "0 8px 30px rgba(215,25,32,.35)",
              }}
            >
              {c.launch} →
            </a>
            <Link
              href={`/projects/${sp.slug}`}
              className="lg-btn-ghost"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,.25)",
                fontWeight: 600,
                fontSize: 14,
                color: "#F5F6F8",
                padding: "14px 26px",
                textDecoration: "none",
              }}
            >
              {c.viewSpec}
            </Link>
          </div>
        </div>
        {/* the car */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 360,
            padding: "20px 0",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "44%",
              transform: "translate(-50%,-50%)",
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(160px,22vw,340px)",
              lineHeight: 1,
              color: "rgba(255,255,255,.045)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {sp.num}
          </span>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              width: "52vw",
              height: "52vw",
              maxWidth: 700,
              maxHeight: 700,
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(circle,rgba(215,25,32,.16),transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            key={`car-${si}`}
            style={{
              position: "relative",
              width: "min(100%,860px)",
              animation: `${carAnim} .65s cubic-bezier(.2,.7,.2,1) both`,
            }}
          >
            <img
              src={CAR_IMG}
              alt={sp.title}
              style={{ display: "block", width: "100%", filter: "drop-shadow(0 34px 44px rgba(0,0,0,.7))" }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: -14,
                transform: "translateX(-50%)",
                width: "76%",
                height: 36,
                background: "radial-gradient(ellipse at center,rgba(0,0,0,.75),transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* garage controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 22,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={prev}
            aria-label="Previous project"
            className="lg-arrow"
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.22)",
              color: "#F5F6F8",
              cursor: "pointer",
              fontSize: 24,
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="lg-arrow-solid"
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#D71920",
              border: "1px solid #D71920",
              color: "#fff",
              cursor: "pointer",
              fontSize: 24,
              boxShadow: "0 6px 24px rgba(215,25,32,.4)",
            }}
          >
            →
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => goTo(i)}
              aria-label="Go to project"
              style={{
                height: 7,
                width: i === si ? 32 : 8,
                background: i === si ? "#D71920" : "rgba(255,255,255,.22)",
                border: "none",
                cursor: "pointer",
                transition: "all .35s",
                padding: 0,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "rgba(245,246,248,.45)",
          }}
        >
          {sp.role}
        </div>
      </div>
    </div>
  );
}
