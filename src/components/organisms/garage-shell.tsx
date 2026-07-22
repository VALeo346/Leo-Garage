"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { IgnitionIntro } from "@/components/organisms/ignition-intro";
import { LivingBackground } from "@/components/organisms/living-background";
import { Nav } from "@/components/organisms/nav";
import { TelemetryBar } from "@/components/organisms/telemetry-bar";

/** Red HUD corner ticks that frame the whole viewport. */
function HudCorners() {
  const tick = "pointer-events-none absolute z-30 h-[22px] w-[22px]";
  const edge = "1.5px solid rgba(215,25,32,.7)";
  return (
    <>
      <div className={`${tick} left-[18px] top-[18px]`} style={{ borderTop: edge, borderLeft: edge }} />
      <div className={`${tick} right-[18px] top-[18px]`} style={{ borderTop: edge, borderRight: edge }} />
      <div className={`${tick} bottom-[50px] left-[18px]`} style={{ borderBottom: edge, borderLeft: edge }} />
      <div className={`${tick} bottom-[50px] right-[18px]`} style={{ borderBottom: edge, borderRight: edge }} />
    </>
  );
}

/** Scrolls the garage viewport back to the top on every route change. */
function ScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    document.getElementById("lg-scroll")?.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

/**
 * Fixed viewport shell: living background, HUD corners, sticky nav, inner
 * scroll container and the fixed telemetry bar. Persists across routes so the
 * background never remounts — exactly like the design's SPA shell.
 */
export function GarageShell({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-garage font-sans text-chalk">
      <LivingBackground />
      <HudCorners />
      <div id="lg-scroll" className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden">
        <Nav />
        <div className="relative">
          {children}
          {/* spacer so content clears the fixed telemetry bar */}
          <div className="h-11" />
        </div>
      </div>
      <TelemetryBar />
      <ScrollReset />
      <IgnitionIntro />
    </div>
  );
}
