import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alekfurgal.com"),
  title: {
    default: "Alek Furgal",
    template: "%s | Furgal",
  },
  description:
    "Alek Furgal writes about search, content, and meaningful web experiences.",
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
