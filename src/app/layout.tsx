import type { Metadata, Viewport } from "next";
import { Anton, Bricolage_Grotesque, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { GarageShell } from "@/components/organisms/garage-shell";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo Garage — Leonardo Viana",
  description:
    "Digital engines, built for performance. Automation systems, BI dashboards and full-stack tools by Leonardo Viana. Welcome to the garage.",
  openGraph: {
    title: "Leo Garage — Leonardo Viana",
    description:
      "Digital engines, built for performance. Automation systems, BI dashboards and full-stack tools. Welcome to the garage.",
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${anton.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>
        <LanguageProvider>
          <GarageShell>{children}</GarageShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
