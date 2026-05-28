import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alekfurgal.com"),
  title: "Alek Furgal | SEO and content strategy",
  description:
    "SEO and content strategy for technical websites, SaaS products, and content-heavy businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="lg:pt-[var(--header-height)]">
        {children}
        </div>
      </body>
    </html>
  );
}
