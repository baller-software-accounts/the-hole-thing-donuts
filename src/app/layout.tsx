import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fredoka, Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { siteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], display: "swap" });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const TITLE = "The Hole Thing Donuts — Fresh Donuts & Kolaches in Forney & Rockwall, TX";
const DESC =
  "Locally owned since 2011, not a franchise. Classic and gourmet donuts, kolaches and coffee in Forney (972-552-5000) and Rockwall (469-314-1081). Open daily from 5 AM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | The Hole Thing Donuts — Forney & Rockwall" },
  description: DESC,
  applicationName: BUSINESS.name,
  keywords: ["donuts Forney TX", "donuts Rockwall TX", "kolaches Forney", "kolaches Rockwall", "donut shop near me", "donut catering Rockwall", "The Hole Thing"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    title: TITLE,
    description: DESC,
    url: "/",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "The Hole Thing Donuts — Forney & Rockwall, TX" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/og.jpg"] },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = { themeColor: "#fa12d6" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = JSON.stringify(siteJsonLd()).replace(/</g, "\\u003c");
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-glaze font-sans text-cocoa-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <a href="#main" className="sr-only z-[60] rounded-full bg-pink-500 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
