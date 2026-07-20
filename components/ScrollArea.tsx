"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function ScrollArea({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById("lg-scroll")?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div
      id="lg-scroll"
      style={{ position: "absolute", inset: 0, zIndex: 10, overflowY: "auto", overflowX: "hidden" }}
    >
      <Nav />
      <div style={{ position: "relative" }}>
        {children}
        {/* spacer so content clears the fixed telemetry bar */}
        <div style={{ height: 44 }} />
      </div>
    </div>
  );
}
