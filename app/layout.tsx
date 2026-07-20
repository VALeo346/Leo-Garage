import type { Metadata } from "next";
import { Bricolage_Grotesque, Anton, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import Background from "@/components/Background";
import HudCorners from "@/components/HudCorners";
import ScrollArea from "@/components/ScrollArea";
import TelemetryBar from "@/components/TelemetryBar";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Leo Garage — Leonardo Viana",
  description:
    "Digital engines, built for performance. Automation systems, BI dashboards and full-stack tools by Leonardo Viana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${anton.variable} ${spaceMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>
        <LanguageProvider>
          <div
            style={{
              position: "fixed",
              inset: 0,
              overflow: "hidden",
              background: "#050608",
              fontFamily: "var(--font-sans), sans-serif",
              color: "#F5F6F8",
            }}
          >
            <Background />
            <HudCorners />
            <ScrollArea>{children}</ScrollArea>
            <TelemetryBar />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
