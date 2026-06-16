import "./globals.css";
import { DM_Serif_Display, DM_Mono, Poppins } from "next/font/google";
import type { Metadata } from "next";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-dm",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-dm",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alekfurgal.com"),
  description:
    "I help founders, marketers, and content leads at SaaS and technical businesses build content that ranks, converts, and makes the product clear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmMono.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
