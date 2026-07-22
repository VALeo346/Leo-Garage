"use client";

import { useEffect, useRef } from "react";

const GRAIN_SVG =
  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  tw: number;
  spark: boolean;
}

/**
 * The persistent living background from the design: garage image with Ken Burns,
 * mouse + scroll parallax, breathing red glow, dust/spark particles, telemetry
 * scanline and film grain. Lives in the root layout so it never remounts.
 */
export function LivingBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let mx = 0;
    let my = 0;
    let sy = 0;
    const apply = () => {
      const lift = Math.min(sy * 0.06, 50);
      wrap.style.transform = `translate3d(${mx}px, ${my - lift}px, 0)`;
    };
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 26;
      my = (e.clientY / window.innerHeight - 0.5) * 18;
      apply();
    };
    const scroller = document.getElementById("lg-scroll");
    const onScroll = () => {
      if (scroller) sy = scroller.scrollTop;
      apply();
    };
    window.addEventListener("mousemove", onMouse);
    scroller?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      scroller?.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let W = 0;
    let H = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 46;
    const ps: Particle[] = [];
    for (let i = 0; i < N; i++) {
      const spark = Math.random() < 0.18;
      ps.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: spark ? Math.random() * 1.6 + 0.6 : Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: spark ? -(Math.random() * 0.5 + 0.25) : -(Math.random() * 0.22 + 0.05),
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * Math.PI * 2,
        spark,
      });
    }
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.04;
        if (p.y < -10) {
          p.y = H + 8;
          p.x = Math.random() * W;
        }
        if (p.x < -10) p.x = W + 8;
        if (p.x > W + 10) p.x = -8;
        const tw = Math.sin(p.tw) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.spark) {
          ctx.fillStyle = `rgba(255,90,60,${p.a * tw})`;
          ctx.shadowColor = "rgba(215,25,32,0.9)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(220,224,230,${p.a * tw * 0.6})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute -inset-[90px] z-0 will-change-transform">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative bg animated with CSS transforms */}
      <img
        src="/assets/garage_main.png"
        alt=""
        aria-hidden="true"
        className="absolute -inset-[6%] h-[112%] w-[112%] object-cover saturate-[1.05] contrast-[1.04]"
        style={{ animation: "lgKen 26s ease-in-out infinite alternate" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,.62)_0%,rgba(5,6,8,.30)_32%,rgba(5,6,8,.55)_66%,rgba(5,6,8,.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_18%,transparent_38%,rgba(5,6,8,.7)_100%)]" />
      {/* breathing red glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(215,25,32,.22),transparent_62%)]"
        style={{ animation: "lgBreathe 7s ease-in-out infinite" }}
      />
      {/* particles / dust + sparks */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-90" />
      {/* telemetry scanline */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(215,25,32,.55),transparent)]"
        style={{ animation: "lgScan 9s linear infinite" }}
      />
      {/* film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
        style={{ backgroundImage: GRAIN_SVG }}
      />
    </div>
  );
}
