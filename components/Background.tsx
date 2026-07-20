"use client";

import { useEffect, useRef } from "react";

const GARAGE_BG = "/assets/garage_main.svg";

/**
 * Persistent living background: garage photo with Ken Burns drift, gradient
 * overlays, breathing red glow, dust/spark particles, telemetry scanline and
 * film grain. Lives in the root layout so it never remounts between routes.
 */
export default function Background() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // mouse + scroll parallax
  useEffect(() => {
    const bg = wrapRef.current;
    if (!bg) return;
    let mx = 0;
    let my = 0;
    let sy = 0;
    const apply = () => {
      const lift = Math.min(sy * 0.06, 50);
      bg.style.transform = `translate3d(${mx}px, ${my - lift}px, 0)`;
    };
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 26;
      my = (e.clientY / window.innerHeight - 0.5) * 18;
      apply();
    };
    const sc = document.getElementById("lg-scroll");
    const onScroll = () => {
      if (sc) sy = sc.scrollTop;
      apply();
    };
    window.addEventListener("mousemove", onMove);
    sc?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      sc?.removeEventListener("scroll", onScroll);
    };
  }, []);

  // dust + spark particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = 0;
    let H = 0;
    let raf = 0;
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

    interface P {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      tw: number;
      spark: boolean;
    }
    const N = 46;
    const ps: P[] = [];
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
    <div
      id="lg-bgwrap"
      ref={wrapRef}
      style={{ position: "absolute", inset: -90, zIndex: 0, willChange: "transform" }}
    >
      <img
        src={GARAGE_BG}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-6%",
          width: "112%",
          height: "112%",
          objectFit: "cover",
          animation: "lgKen 26s ease-in-out infinite alternate",
          filter: "saturate(1.05) contrast(1.04)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(5,6,8,.62) 0%,rgba(5,6,8,.30) 32%,rgba(5,6,8,.55) 66%,rgba(5,6,8,.94) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(120% 80% at 50% 18%,transparent 38%,rgba(5,6,8,.7) 100%)",
        }}
      />
      {/* breathing red glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "46%",
          width: "60vw",
          height: "60vw",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle,rgba(215,25,32,.22),transparent 62%)",
          animation: "lgBreathe 7s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      {/* particles / dust + sparks */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.9,
        }}
      />
      {/* telemetry scanline */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 2,
          background: "linear-gradient(90deg,transparent,rgba(215,25,32,.55),transparent)",
          animation: "lgScan 9s linear infinite",
          pointerEvents: "none",
        }}
      />
      {/* film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')",
        }}
      />
    </div>
  );
}
