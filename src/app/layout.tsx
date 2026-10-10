import type { Metadata } from "next";
import { Suspense } from "react";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { LocaleProvider } from "@/lib/locale";
import { profile, SITE_URL } from "@/content/profile";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.shortName} · ${profile.handle}`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.supporting.es,
  openGraph: {
    title: `${profile.shortName} · Fullstack Product Engineer`,
    description: profile.supporting.es,
    url: SITE_URL,
    siteName: profile.handle,
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col text-ink">
        <LocaleProvider>
          <Suspense fallback={<div className="h-14 border-b border-line/60" />}>
            <SiteNav />
          </Suspense>
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
