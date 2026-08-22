import "./globals.css";
import { DM_Serif_Text, DM_Mono, Poppins } from "next/font/google";
import type { Metadata } from "next";

const dmSerif = DM_Serif_Text({
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
  title: "Alek Furgal — Content Strategist & Writer",
  description:
    "I help founders, marketers, and leads build content that ranks, converts, and builds trust.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",  
  openGraph: {
    siteName: "Alek Furgal",
    title: "Alek Furgal — Content Strategist & Writer",
    description:
      "I help founders, marketers, and leads build content that ranks, converts, and builds trust.",
    url: "https://www.alekfurgal.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alek Furgal — Content Strategist & Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alek Furgal — Content Strategist & Writer",
    description:
      "I help founders, marketers, and leads build content that ranks, converts, and builds trust.",
    images: ["/og-image.png"],
  },
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
