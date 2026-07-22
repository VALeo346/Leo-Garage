"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/**
 * Count-up animation for stat values like "2+" or "6". Non-numeric values
 * (e.g. "Bosch") are returned untouched. Starts when `start` becomes true.
 */
export function useCountUp(value: string, start: boolean, durationMs = 1100): string {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;
    const t0 = performance.now();
    const id = setInterval(() => {
      const p = Math.min((performance.now() - t0) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(eased * target));
      if (p >= 1) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [start, target, durationMs]);

  if (target === null) return value;
  return `${current}${suffix}`;
}

/**
 * Subtle 3D tilt following the pointer. Attach the returned handlers and ref
 * to a container with the `lg-tilt` class.
 */
export function useTilt(maxDeg = 6): {
  ref: RefObject<HTMLDivElement | null>;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerLeave: () => void;
} {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const el = ref.current;
      if (!el || e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg)`;
    },
    [maxDeg],
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

/**
 * True once the element with the returned ref has entered the viewport.
 * IntersectionObserver plus a rect-based fallback (initial check + scroll
 * listener on #lg-scroll) for renderers that stall IO delivery.
 */
export function useInView(threshold = 0.3): {
  ref: RefObject<HTMLDivElement | null>;
  inView: boolean;
} {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) show();
      },
      { threshold },
    );

    const scroller = document.getElementById("lg-scroll");

    function show() {
      if (done) return;
      done = true;
      setInView(true);
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
  }, [threshold]);

  return { ref, inView };
}
