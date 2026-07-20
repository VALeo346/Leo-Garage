"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { getProjects } from "@/lib/projects";

const CAR_IMG = "/assets/car_default.svg";
const mono = "var(--font-mono)";

export default function HomePage() {
  const { lang } = useLang();
  const router = useRouter();
  const c = getContent(lang);
  const projects = getProjects(lang);
  const carProjects = projects.slice(0, 5);

  // ---- carousel state ----
  const [ci, setCi] = useState(0);
  const [viewportW, setViewportW] = useState(1100);
  const vpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const w = vpRef.current?.clientWidth;
      if (w && Math.abs(w - viewportW) > 2) setViewportW(w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [viewportW]);

  const cardW = Math.round(Math.min(Math.max(viewportW * 0.56, 300), 520));
  const slot = cardW + 28;
  const carouselX = viewportW / 2 - cardW / 2 - ci * slot;
  const carNext = () => setCi((i) => (i + 1) % carProjects.length);
  const carPrev = () => setCi((i) => (i - 1 + carProjects.length) % carProjects.length);

  const traits =
    lang === "pt"
      ? ["Orientado a dados", "Mentalidade de automação", "Full-stack", "Foco em performance"]
      : ["Data-driven", "Automation mindset", "Full-stack", "Performance-focused"];

  const aboutSpec = [
    { k: c.aboutBase, v: "Campinas · SP · Brazil", color: "#F5F6F8" },
    { k: c.aboutCompany, v: "Bosch", color: "#F5F6F8" },
    {
      k: c.specRole,
      v: lang === "pt" ? "Eng. de Software / Dados" : "Software / Data Engineer",
      color: "#F5F6F8",
    },
    {
      k: c.aboutFocus,
      v: lang === "pt" ? "Dados · Automação · BI" : "Data · Automation · BI",
      color: "#F5F6F8",
    },
    { k: c.contactStatus, v: c.contactOpen, color: "#22C55E" },
  ];

  return (
    <div>
      {/* ===== hero ===== */}
      <div
        style={{
          position: "relative",
          minHeight: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 28px 120px",
        }}
      >
        <div
          data-reveal
          style={{
            fontFamily: mono,
            fontSize: 13,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "rgba(245,246,248,.75)",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#D71920",
              animation: "lgBlink 2.4s infinite",
            }}
          />
          {c.kicker}
        </div>
        <h1
          data-reveal
          style={{
            animationDelay: ".08s",
            margin: 0,
            fontWeight: 700,
            fontSize: "clamp(46px,7.4vw,92px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: "14ch",
          }}
        >
          {c.heroA} <span style={{ color: "#D71920" }}>{c.heroB}</span>
        </h1>
        <p
          data-reveal
          style={{
            animationDelay: ".16s",
            margin: "28px 0 0",
            maxWidth: 540,
            fontSize: "clamp(16px,1.5vw,19px)",
            lineHeight: 1.65,
            color: "rgba(245,246,248,.78)",
          }}
        >
          {c.heroSub}
        </p>
        <div
          data-reveal
          style={{
            animationDelay: ".24s",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          <button
            onClick={() => router.push("/projects")}
            className="lg-btn-red"
            style={{
              background: "#D71920",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
              padding: "16px 30px",
              boxShadow: "0 8px 30px rgba(215,25,32,.35)",
              fontFamily: "inherit",
            }}
          >
            {c.ctaPrimary} →
          </button>
          <button
            onClick={() => router.push("/contact")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              color: "rgba(245,246,248,.85)",
              borderBottom: "1px solid rgba(245,246,248,.4)",
              padding: "0 0 4px",
              fontFamily: "inherit",
            }}
          >
            {c.ctaSecondary}
          </button>
        </div>
        {/* live stats row */}
        <div
          data-reveal
          style={{
            animationDelay: ".32s",
            display: "flex",
            flexWrap: "wrap",
            gap: 44,
            marginTop: 64,
            fontFamily: mono,
          }}
        >
          {c.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontWeight: 700, fontSize: 26, color: "#F5F6F8" }}>{s.value}</div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "rgba(245,246,248,.5)",
                  marginTop: 5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        {/* vertical index */}
        <div
          style={{
            position: "absolute",
            right: 28,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 9,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".1em",
            color: "rgba(245,246,248,.4)",
          }}
        >
          <span style={{ color: "#D71920" }}>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 34,
            transform: "translateX(-50%)",
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "rgba(245,246,248,.55)",
            animation: "lgFloatY 2.6s ease-in-out infinite",
          }}
        >
          {c.scroll} ↓
        </div>
      </div>

      {/* ===== about / driver profile ===== */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          background: "linear-gradient(180deg,rgba(5,6,8,0),rgba(5,6,8,.45))",
        }}
      >
        <div
          className="lg-grid-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "104px 28px",
            display: "grid",
            gridTemplateColumns: "1.08fr .92fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* narrative */}
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
              {c.aboutKicker}
            </div>
            <h2
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "clamp(34px,4.6vw,56px)",
                letterSpacing: "-0.03em",
              }}
            >
              {c.aboutTitle}
            </h2>
            <p
              style={{
                margin: "26px 0 0",
                maxWidth: 530,
                fontSize: 17,
                lineHeight: 1.75,
                color: "rgba(245,246,248,.8)",
              }}
            >
              {c.aboutP1}
            </p>
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: 530,
                fontSize: 17,
                lineHeight: 1.75,
                color: "rgba(245,246,248,.7)",
              }}
            >
              {c.aboutP2}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 34,
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "rgba(245,246,248,.7)",
              }}
            >
              {traits.map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid rgba(255,255,255,.2)",
                    padding: "8px 13px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#D71920" }}>◆</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* driver profile spec card */}
          <div
            data-reveal
            style={{
              animationDelay: ".12s",
              position: "relative",
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(10,11,13,.62)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -1,
                left: -1,
                width: 18,
                height: 18,
                borderTop: "2px solid #D71920",
                borderLeft: "2px solid #D71920",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -1,
                right: -1,
                width: 18,
                height: 18,
                borderBottom: "2px solid #D71920",
                borderRight: "2px solid #D71920",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                borderBottom: "1px solid rgba(255,255,255,.12)",
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(245,246,248,.7)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#D71920",
                    boxShadow: "0 0 8px #D71920",
                    animation: "lgBlink 2.2s infinite",
                  }}
                />
                Driver Profile
              </span>
              <span style={{ color: "#D71920" }}>L. Viana</span>
            </div>
            <div style={{ padding: "8px 24px 12px" }}>
              {aboutSpec.map((row) => (
                <div
                  key={row.k}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 18,
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,.07)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(245,246,248,.45)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.k}
                  </span>
                  <span style={{ fontSize: 15, textAlign: "right", color: row.color }}>{row.v}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid rgba(255,255,255,.12)",
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#22C55E",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ● {c.contactOpen}
            </div>
          </div>
        </div>
      </div>

      {/* ===== selected work carousel ===== */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "30px 20px 130px" }}>
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 46,
            padding: "0 8px",
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
            <h2
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "clamp(30px,4vw,46px)",
                letterSpacing: "-0.02em",
              }}
            >
              {c.workTitle}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={carPrev}
              aria-label="Previous"
              className="lg-arrow"
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.2)",
                color: "#F5F6F8",
                cursor: "pointer",
                fontSize: 22,
              }}
            >
              ‹
            </button>
            <button
              onClick={carNext}
              aria-label="Next"
              className="lg-arrow"
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.2)",
                color: "#F5F6F8",
                cursor: "pointer",
                fontSize: 22,
              }}
            >
              ›
            </button>
          </div>
        </div>
        {/* viewport */}
        <div id="lg-cvp" ref={vpRef} style={{ position: "relative", overflow: "hidden", padding: "34px 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              willChange: "transform",
              transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
              transform: `translateX(${carouselX}px)`,
            }}
          >
            {carProjects.map((p, i) => {
              const active = i === ci;
              return (
                <div
                  key={p.slug}
                  onClick={() => setCi(i)}
                  style={{
                    flex: `0 0 ${cardW}px`,
                    transform: `scale(${active ? 1 : 0.86})`,
                    opacity: active ? 1 : 0.42,
                    transition: "transform .6s cubic-bezier(.2,.7,.2,1),opacity .6s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      border: `1px solid ${active ? "rgba(215,25,32,.55)" : "rgba(255,255,255,.12)"}`,
                      background: "rgba(10,11,13,.66)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      overflow: "hidden",
                      boxShadow: active ? "0 30px 70px rgba(0,0,0,.5)" : "none",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 3,
                        background: "linear-gradient(90deg,#D71920,transparent)",
                        opacity: active ? 1 : 0,
                        zIndex: 1,
                      }}
                    />
                    {/* visual */}
                    <div
                      style={{
                        position: "relative",
                        height: 230,
                        background: "linear-gradient(135deg,rgba(22,24,28,.7),rgba(7,8,9,.7))",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "radial-gradient(circle at 72% 28%,rgba(215,25,32,.2),transparent 60%)",
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
                      <span
                        style={{
                          position: "absolute",
                          left: 22,
                          bottom: 6,
                          fontFamily: "var(--font-anton)",
                          fontSize: 128,
                          lineHeight: 1,
                          color: "rgba(255,255,255,.06)",
                        }}
                      >
                        {p.num}
                      </span>
                      <img
                        src={CAR_IMG}
                        alt=""
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "56%",
                          transform: "translate(-50%,-50%)",
                          width: "72%",
                          filter: "drop-shadow(0 20px 26px rgba(0,0,0,.6))",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          fontFamily: mono,
                          fontSize: 11,
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          color: p.statusColor,
                        }}
                      >
                        ● {p.status}
                      </span>
                    </div>
                    {/* body */}
                    <div style={{ padding: "26px 28px 30px" }}>
                      <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".12em", color: "#D71920" }}>
                        {p.code} · {p.year}
                      </span>
                      <h3 style={{ margin: "12px 0 0", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em" }}>
                        {p.title}
                      </h3>
                      <p
                        style={{
                          margin: "14px 0 0",
                          fontSize: 15,
                          lineHeight: 1.62,
                          color: "rgba(245,246,248,.68)",
                        }}
                      >
                        {p.summary}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: mono,
                              fontSize: 10,
                              letterSpacing: ".08em",
                              textTransform: "uppercase",
                              color: "rgba(245,246,248,.64)",
                              border: "1px solid rgba(255,255,255,.2)",
                              padding: "5px 10px",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${p.slug}`}
                        style={{
                          marginTop: 24,
                          display: "flex",
                          alignItems: "center",
                          gap: 9,
                          fontFamily: mono,
                          fontSize: 12,
                          letterSpacing: ".12em",
                          textTransform: "uppercase",
                          color: "#F5F6F8",
                          textDecoration: "none",
                        }}
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
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 30 }}
        >
          {carProjects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setCi(i)}
              aria-label="Go to slide"
              style={{
                height: 7,
                width: i === ci ? 30 : 7,
                background: i === ci ? "#D71920" : "rgba(255,255,255,.22)",
                border: "none",
                cursor: "pointer",
                transition: "all .35s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
