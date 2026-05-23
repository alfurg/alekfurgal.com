"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "./LogoIcon";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="shrink-0 bg-[var(--color-bg)]">
     <div className="mx-auto w-full max-w-[1380px] px-[clamp(6rem,6vw,8rem)]">
        <div className="grid min-h-28 grid-cols-[auto_1fr] items-center gap-6 lg:grid-cols-[470px_minmax(0,820px)] lg:gap-16 xl:gap-20">
          <Link
            href="/"
            className={[
              "group flex w-fit items-center gap-3 py-2 text-base transition-colors",
              isHome
                ? "text-[var(--color-text)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-8 w-8 shrink-0 items-center justify-center transition-colors",
                isHome
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-muted)] group-hover:text-[var(--color-current)]",
              ].join(" ")}
            >
              <LogoIcon
                className="block h-8 w-8"
                backgroundColor="transparent"
                emblemColor="currentColor"
              />
            </span>

            <span className="relative tracking-tight">
              Alek Furgal

              {isHome && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-[var(--color-accent)]" />
              )}
            </span>
          </Link>

          <nav className="flex items-center justify-end gap-8 text-base">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <Link
                key={link.href}
                href={link.href}
                className={[
                  "py-2 transition-colors",
                  isActive
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
                ].join(" ")}
              >
                <span className="relative">
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-[var(--color-accent)]" />
                  )}
                </span>
              </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}