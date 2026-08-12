import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { plexSerif, plexSans, plexMono } from "./fonts";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Independent risk assessment and safety training. Most risks aren't hidden — they're overlooked. Book a free consultation.",
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Independent risk assessment and safety training for organizations that take readiness seriously.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d13",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable} snap-y snap-proximity scroll-pt-16`}
    >
      <body className="min-h-screen bg-base font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
