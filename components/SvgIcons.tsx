import type { SvgKind } from "@/lib/skills";

const wrapStyle: React.CSSProperties = { display: "block", flexShrink: 0 };

export function SkillSvg({ kind }: { kind: SvgKind }) {
  switch (kind) {
    case "powerbi":
      return (
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
          <rect x={3} y={13} width={4.4} height={8} fill="#F2C811" />
          <rect x={9.8} y={8} width={4.4} height={13} fill="#F2C811" opacity={0.85} />
          <rect x={16.6} y={3} width={4.4} height={18} fill="#F2C811" opacity={0.68} />
        </svg>
      );
    case "dax":
      return (
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
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
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
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
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
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
      const ticks = [];
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        ticks.push(
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
      }
      return (
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
          <circle cx={12} cy={12} r={6.2} fill="none" stroke="#D71920" strokeWidth={1.8} />
          <circle cx={12} cy={12} r={2.4} fill="#D71920" />
          {ticks}
        </svg>
      );
    }
    case "scrape":
      return (
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
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
        <svg width={30} height={30} viewBox="0 0 24 24" style={wrapStyle}>
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
    default:
      return null;
  }
}
