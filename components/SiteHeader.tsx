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
    <header className="shrink-0 bg-[var(--color-bg)] px-[var(--site-gutter)]">
      <div className="mx-auto flex min-h-24 w-full max-w-[1380px] items-center justify-between gap-6 sm:min-h-28">
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
                : "text-[var(--color-muted)] group-hover:text-[var(--color-accent)]",
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

        <nav className="flex shrink-0 items-center justify-end gap-6 text-base sm:gap-8">
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
    </header>
  );
}