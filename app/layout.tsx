import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
