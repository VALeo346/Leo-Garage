import type { SkillIconKind, SkillItem } from "@/data/content";

/** Custom SVG icons ported 1:1 from the design's _svgIcon() factory. */
function CustomIcon({ kind }: { kind: SkillIconKind }) {
  const common = { width: 30, height: 30, viewBox: "0 0 24 24", style: { display: "block", flexShrink: 0 } };
  switch (kind) {
    case "powerbi":
      return (
        <svg {...common}>
          <rect x={3} y={13} width={4.4} height={8} fill="#F2C811" />
          <rect x={9.8} y={8} width={4.4} height={13} fill="#F2C811" opacity={0.85} />
          <rect x={16.6} y={3} width={4.4} height={18} fill="#F2C811" opacity={0.68} />
        </svg>
      );
    case "dax":
      return (
        <svg {...common}>
          <rect x={2.5} y={2.5} width={19} height={19} rx={2} fill="none" stroke="#F2C811" strokeWidth={1.4} />
          <text
            x={12}
            y={16.2}
            textAnchor="middle"
            fontFamily="Georgia,serif"
            fontStyle="italic"
            fontWeight={700}
            fontSize={11.5}
            fill="#F2C811"
          >
            fx
          </text>
        </svg>
      );
    case "model":
      return (
        <svg {...common}>
          <circle cx={12} cy={5} r={2.6} fill="none" stroke="#38BDF8" strokeWidth={1.6} />
          <circle cx={5} cy={18.5} r={2.6} fill="none" stroke="#38BDF8" strokeWidth={1.6} />
          <circle cx={19} cy={18.5} r={2.6} fill="none" stroke="#38BDF8" strokeWidth={1.6} />
          <path
            d="M10.8 7.3 L6.2 16.2 M13.2 7.3 L17.8 16.2 M7.6 18.5 L16.4 18.5"
            stroke="#38BDF8"
            strokeWidth={1.4}
            fill="none"
          />
        </svg>
      );
    case "excel":
      return (
        <svg {...common}>
          <rect x={3} y={3} width={18} height={18} rx={2.4} fill="#1D6F42" />
          <path
            d="M8.4 7.5 L12 12 L8.4 16.5 M15.6 7.5 L12 12 L15.6 16.5"
            stroke="#fff"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "gear": {
      const ticks = Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={12 + Math.cos(a) * 6.4}
            y1={12 + Math.sin(a) * 6.4}
            x2={12 + Math.cos(a) * 9.6}
            y2={12 + Math.sin(a) * 9.6}
            stroke="#D71920"
            strokeWidth={2.4}
            strokeLinecap="round"
          />
        );
      });
      return (
        <svg {...common}>
          <circle cx={12} cy={12} r={6.2} fill="none" stroke="#D71920" strokeWidth={1.8} />
          <circle cx={12} cy={12} r={2.4} fill="#D71920" />
          {ticks}
        </svg>
      );
    }
    case "scrape":
      return (
        <svg {...common}>
          <circle cx={12} cy={12} r={9} fill="none" stroke="#38BDF8" strokeWidth={1.6} />
          <ellipse cx={12} cy={12} rx={4.2} ry={9} fill="none" stroke="#38BDF8" strokeWidth={1.4} />
          <path
            d="M3 12 L21 12 M4.4 7 L19.6 7 M4.4 17 L19.6 17"
            stroke="#38BDF8"
            strokeWidth={1.3}
            fill="none"
          />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x={6} y={6} width={12} height={12} rx={2} fill="none" stroke="#D71920" strokeWidth={1.8} />
          <path
            d="M9 3 L9 6 M15 3 L15 6 M9 18 L9 21 M15 18 L15 21 M3 9 L6 9 M3 15 L6 15 M18 9 L21 9 M18 15 L21 15"
            stroke="#D71920"
            strokeWidth={1.6}
          />
          <path
            d="M12 8.6 L12.9 11.1 L15.4 12 L12.9 12.9 L12 15.4 L11.1 12.9 L8.6 12 L11.1 11.1 Z"
            fill="#D71920"
          />
        </svg>
      );
    case "db":
      return (
        <svg {...common}>
          <ellipse cx={12} cy={5.4} rx={7.6} ry={2.9} fill="none" stroke="#38BDF8" strokeWidth={1.6} />
          <path
            d="M4.4 5.4 L4.4 18.6 C4.4 20.2 7.8 21.5 12 21.5 C16.2 21.5 19.6 20.2 19.6 18.6 L19.6 5.4"
            fill="none"
            stroke="#38BDF8"
            strokeWidth={1.6}
          />
          <path
            d="M4.4 12 C4.4 13.6 7.8 14.9 12 14.9 C16.2 14.9 19.6 13.6 19.6 12"
            fill="none"
            stroke="#38BDF8"
            strokeWidth={1.4}
          />
        </svg>
      );
    case "api":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M8.5 7.2 4 12l4.5 4.8M15.5 7.2 20 12l-4.5 4.8M13.8 4.5l-3.6 15"
            fill="none"
            stroke="#38BDF8"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/** Devicon class icon, custom SVG, or red monogram fallback — as in the design. */
export function TechIcon({ item }: { item: SkillItem }) {
  if (item.icon) {
    return <i className={`${item.icon} w-[34px] flex-shrink-0 text-center text-[32px]`} />;
  }
  if (item.svg) {
    return (
      <span className="flex h-8 w-[34px] flex-shrink-0 items-center justify-center">
        <CustomIcon kind={item.svg} />
      </span>
    );
  }
  return (
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[rgba(215,25,32,.5)] font-mono text-[15px] font-bold text-race">
      {item.name.charAt(0)}
    </span>
  );
}
