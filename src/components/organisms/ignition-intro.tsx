"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "lg-ignition-done";

/**
 * Garage "ignition" boot overlay — shown once per browser session on first
 * load: logo flash + red line sweep, then fades out over the living shell.
 */
export function IgnitionIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }
    // marking the session inside the timer keeps StrictMode's double-effect
    // from cancelling the intro before it ever shows
    const t1 = setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setShow(true);
    }, 20);
    const t2 = setTimeout(() => setShow(false), 1740);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="lg-ignition absolute inset-0 z-50 flex flex-col items-center justify-center bg-garage">
      <div className="lg-ign-logo flex items-center gap-3.5">
        <span className="inline-block h-10 w-3 -skew-x-[14deg] bg-race shadow-[0_0_18px_rgba(215,25,32,.9)]" />
        <span className="text-[30px] font-extrabold tracking-[.08em] text-chalk">
          Leo Garage
        </span>
      </div>
      <div className="relative mt-7 h-[2px] w-[220px] overflow-hidden bg-white/10">
        <div className="lg-ign-line absolute inset-0 bg-[linear-gradient(90deg,transparent,#D71920,transparent)]" />
      </div>
      <div className="mt-4 font-mono text-[11px] uppercase tracking-[.3em] text-[rgba(245,246,248,.5)]">
        Ignition
      </div>
    </div>
  );
}
