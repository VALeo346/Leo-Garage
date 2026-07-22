"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in seconds, matches the design's transition-delay steps */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Reveal-on-view: replicates the design's [data-reveal] lgReveal animation,
 * upgraded to trigger when the element scrolls into view.
 *
 * Uses IntersectionObserver plus a rect-based fallback (initial check +
 * scroll listener) because some embedded renderers stall IO delivery.
 */
export function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) show();
      },
      { threshold: 0.12 },
    );

    const scroller = document.getElementById("lg-scroll");

    function show() {
      if (done) return;
      done = true;
      setVisible(true);
      io.disconnect();
      scroller?.removeEventListener("scroll", check);
    }

    function check() {
      const r = el!.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) show();
    }

    io.observe(el);
    scroller?.addEventListener("scroll", check, { passive: true });
    const t = setTimeout(check, 350);

    return () => {
      io.disconnect();
      clearTimeout(t);
      scroller?.removeEventListener("scroll", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`lg-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
