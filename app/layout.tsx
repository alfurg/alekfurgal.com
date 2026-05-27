import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alekfurgal.com"),
  title: {
    default: "Alek Furgal",
    template: "%s — Alek Furgal",
  },
  description:
    "Alek Furgal writes about search, content, and meaningful web experiences.",
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alek Furgal",
      },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
