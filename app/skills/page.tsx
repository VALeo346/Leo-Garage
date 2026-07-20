"use client";

import { useLang } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { getSkills } from "@/lib/skills";
import { SkillSvg } from "@/components/SvgIcons";

const mono = "var(--font-mono)";

export default function SkillsPage() {
  const { lang } = useLang();
  const c = getContent(lang);
  const skills = getSkills(lang);

  return (
    <div style={{ width: "min(90vw,1760px)", margin: "0 auto", padding: "80px 0 120px", minHeight: "calc(100vh - 70px)" }}>
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
          {c.skillsKicker}
        </div>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em" }}>
          {c.skillsTitle}
        </h1>
        <p style={{ margin: "22px 0 0", maxWidth: 560, fontSize: 17, lineHeight: 1.6, color: "rgba(245,246,248,.72)" }}>
          {c.skillsSub}
        </p>
      </div>
      <div
        className="lg-grid-3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 60 }}
      >
        {skills.map((g, gi) => (
          <div
            key={g.code}
            data-reveal
            className="lg-skillcard"
            style={{
              animationDelay: `${gi * 0.06}s`,
              position: "relative",
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(10,11,13,.62)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "36px 32px",
              overflow: "hidden",
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
              }}
            />
            {/* header */}
            <div style={{ display: "flex", alignItems: "center", gap: 17, marginBottom: 28 }}>
              <div
                style={{
                  position: "relative",
                  width: 58,
                  height: 58,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(215,25,32,.5)",
                  background: "rgba(215,25,32,.1)",
                }}
              >
                <span style={{ fontFamily: "var(--font-anton)", fontSize: 25, color: "#D71920", letterSpacing: ".02em" }}>
                  {g.code}
                </span>
              </div>
              <div>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 23, letterSpacing: "-0.01em" }}>{g.name}</h3>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "rgba(245,246,248,.5)",
                    marginTop: 5,
                  }}
                >
                  {g.label}
                </div>
              </div>
            </div>
            {/* tech grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {g.items.map((it) => (
                <div
                  key={it.name}
                  className="lg-tech"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 17px",
                    border: "1px solid rgba(255,255,255,.1)",
                    background: "rgba(255,255,255,.02)",
                  }}
                >
                  {it.icon ? (
                    <i className={it.icon} style={{ fontSize: 32, width: 34, textAlign: "center", flexShrink: 0 }} />
                  ) : it.svg ? (
                    <span
                      style={{
                        width: 34,
                        height: 32,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SkillSvg kind={it.svg} />
                    </span>
                  ) : (
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: mono,
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#D71920",
                        border: "1px solid rgba(215,25,32,.5)",
                      }}
                    >
                      {it.name.charAt(0)}
                    </span>
                  )}
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {it.name}
                    </div>
                    <div style={{ display: "flex", gap: 4, marginTop: 7 }}>
                      {Array.from({ length: 4 }, (_, i) => (
                        <span
                          key={i}
                          style={{
                            width: 16,
                            height: 4,
                            background: i < it.lvl ? "#D71920" : "rgba(255,255,255,.15)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
