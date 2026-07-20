"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";
import { getContent } from "@/lib/content";

const NAV_KEYS = [
  { key: "home" as const, href: "/" },
  { key: "projects" as const, href: "/projects" },
  { key: "skills" as const, href: "/skills" },
  { key: "career" as const, href: "/career" },
  { key: "contact" as const, href: "/contact" },
];

export default function Nav() {
  const { lang, toggleLang } = useLang();
  const c = getContent(lang);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "linear-gradient(180deg,rgba(5,6,8,.82),rgba(5,6,8,.35))",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
          padding: "0 28px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            color: "#F5F6F8",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 24,
              background: "#D71920",
              boxShadow: "0 0 12px rgba(215,25,32,.8)",
              transform: "skewX(-14deg)",
            }}
          />
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: ".06em" }}>Leo Garage</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div className="lg-nav-links" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {NAV_KEYS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="lg-navlink"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  padding: "8px 13px",
                  textDecoration: "none",
                  color: isActive(href) ? "#D71920" : "rgba(245,246,248,.62)",
                }}
              >
                {c.nav[key]}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            style={{
              marginLeft: 10,
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.18)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              padding: "7px 12px",
              color: "#F5F6F8",
            }}
          >
            <span style={{ color: lang === "en" ? "#D71920" : "rgba(245,246,248,.45)" }}>EN</span>
            <span style={{ opacity: 0.35 }}>/</span>
            <span style={{ color: lang === "pt" ? "#D71920" : "rgba(245,246,248,.45)" }}>PT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
