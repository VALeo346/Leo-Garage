"use client";

import { useEffect, useState } from "react";

const MARQUEE_TEXT =
  "ENGINEERING HIGH-PERFORMANCE DIGITAL SOLUTIONS  ✦  DATA · AUTOMATION · BI · FULL-STACK  ✦  WELCOME TO THE GARAGE  ✦  ";

export function TelemetryBar() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-[35] flex h-8 items-center overflow-hidden border-t border-[rgba(215,25,32,.4)] bg-[#07080A] font-mono text-[11px] uppercase tracking-[.14em] text-[rgba(245,246,248,.6)]">
      {/* live readout left */}
      <div className="z-[2] flex items-center gap-[18px] whitespace-nowrap border-r border-white/10 bg-[#07080A] px-[18px]">
        <span className="flex items-center gap-[7px]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-signal"
            style={{ animation: "lgBlink 1.8s infinite" }}
          />
          System Online
        </span>
        <span className="text-chalk" suppressHydrationWarning>
          {time}
        </span>
        <span className="flex h-3.5 items-end gap-[2px]">
          {[0, 0.15, 0.3, 0.45].map((d) => (
            <span
              key={d}
              className="w-[3px] bg-race"
              style={{ animation: `lgBar 1s ease-in-out infinite ${d}s` }}
            />
          ))}
        </span>
      </div>
      {/* marquee */}
      <div className="flex-1 overflow-hidden whitespace-nowrap">
        <div
          className="inline-block pl-5"
          style={{ animation: "lgMarquee 30s linear infinite" }}
        >
          <span className="text-[rgba(245,246,248,.55)]">
            {MARQUEE_TEXT}
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}
