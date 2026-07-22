"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { getUiCopy } from "@/data/content";

const NAV_ROUTES = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "skills", href: "/skills" },
  { key: "career", href: "/career" },
  { key: "contact", href: "/contact" },
] as const;

export function Nav() {
  const { lang, toggleLang } = useLang();
  const c = getUiCopy(lang);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-40 border-b border-white/8 bg-[linear-gradient(180deg,rgba(5,6,8,.82),rgba(5,6,8,.35))] backdrop-blur-[10px]">
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-7">
        <Link href="/" className="flex items-center gap-[11px] text-chalk">
          <span className="inline-block h-6 w-[7px] -skew-x-[14deg] bg-race shadow-[0_0_12px_rgba(215,25,32,.8)]" />
          <span className="text-[19px] font-extrabold tracking-[.06em]">Leo Garage</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1.5 sm:flex">
            {NAV_ROUTES.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                data-active={isActive(href)}
                className="lg-navlink px-[13px] py-2 font-mono text-xs uppercase tracking-[.12em]"
                style={{ color: isActive(href) ? "#D71920" : "rgba(245,246,248,.62)" }}
              >
                {c.nav[key]}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="ml-2.5 flex cursor-pointer items-center gap-1.5 border border-white/18 bg-white/4 px-3 py-[7px] font-mono text-xs text-chalk"
          >
            <span style={{ color: lang === "en" ? "#D71920" : "rgba(245,246,248,.45)" }}>EN</span>
            <span className="opacity-35">/</span>
            <span style={{ color: lang === "pt" ? "#D71920" : "rgba(245,246,248,.45)" }}>PT</span>
          </button>
        </div>
      </div>
      {/* mobile nav row */}
      <div className="flex items-center justify-center gap-1 pb-2 sm:hidden">
        {NAV_ROUTES.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            data-active={isActive(href)}
            className="lg-navlink px-2 py-1 font-mono text-[11px] uppercase tracking-[.1em]"
            style={{ color: isActive(href) ? "#D71920" : "rgba(245,246,248,.62)" }}
          >
            {c.nav[key]}
          </Link>
        ))}
      </div>
    </div>
  );
}
