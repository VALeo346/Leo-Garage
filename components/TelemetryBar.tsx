"use client";

import { useEffect, useState } from "react";

const MARQUEE =
  "ENGINEERING HIGH-PERFORMANCE DIGITAL SOLUTIONS  ✦  DATA · AUTOMATION · BI · FULL-STACK  ✦  WELCOME TO THE GARAGE  ✦  ";

export default function TelemetryBar() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 35,
        height: 32,
        background: "#07080A",
        borderTop: "1px solid rgba(215,25,32,.4)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "rgba(245,246,248,.6)",
      }}
    >
      {/* live readout left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: "0 18px",
          borderRight: "1px solid rgba(255,255,255,.1)",
          whiteSpace: "nowrap",
          background: "#07080A",
          zIndex: 2,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22C55E",
              animation: "lgBlink 1.8s infinite",
            }}
          />
          System Online
        </span>
        <span suppressHydrationWarning style={{ color: "#F5F6F8" }}>
          {time}
        </span>
        <span style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14 }}>
          {[0, 0.15, 0.3, 0.45].map((d) => (
            <span
              key={d}
              style={{
                width: 3,
                background: "#D71920",
                animation: `lgBar 1s ease-in-out infinite ${d}s`,
              }}
            />
          ))}
        </span>
      </div>
      {/* marquee */}
      <div style={{ flex: 1, overflow: "hidden", whiteSpace: "nowrap" }}>
        <div
          style={{
            display: "inline-block",
            animation: "lgMarquee 30s linear infinite",
            paddingLeft: 20,
          }}
        >
          <span style={{ color: "rgba(245,246,248,.55)" }}>
            {MARQUEE}
            {MARQUEE}
          </span>
        </div>
      </div>
    </div>
  );
}
