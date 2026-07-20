const base: React.CSSProperties = {
  position: "absolute",
  zIndex: 30,
  width: 22,
  height: 22,
  pointerEvents: "none",
};

const red = "1.5px solid rgba(215,25,32,.7)";

export default function HudCorners() {
  return (
    <>
      <div style={{ ...base, top: 18, left: 18, borderTop: red, borderLeft: red }} />
      <div style={{ ...base, top: 18, right: 18, borderTop: red, borderRight: red }} />
      <div style={{ ...base, bottom: 50, left: 18, borderBottom: red, borderLeft: red }} />
      <div style={{ ...base, bottom: 50, right: 18, borderBottom: red, borderRight: red }} />
    </>
  );
}
