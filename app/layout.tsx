import type { Metadata } from "next";
import "./globals.css";

import { LogoMark } from "@/app/components/LogoMark";

export const metadata: Metadata = {
  title: "Alek Furgal",
  description: "Search, content, and meaningful web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0e] text-[#f5f5f0]">
        <header className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-[#c7c7bd] hover:text-white"
          >
            <LogoMark className="h-7 w-auto translate-y-[-1px]" />
            <span>Alek Furgal</span>
          </a>

          <nav className="flex gap-4">
            <a href="/blog" className="text-gray-300 hover:text-[#f5f5f0]">
              Blog
            </a>
            <a href="/tools" className="text-gray-300 hover:text-[#f5f5f0]">
              Tools
            </a>
            <a href="/about" className="text-gray-300 hover:text-[#f5f5f0]">
              About me
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}