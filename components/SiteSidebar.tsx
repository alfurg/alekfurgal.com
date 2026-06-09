"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "./LogoIcon";

const links = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "My writing" },
];

export function SiteSidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="sidebar">
      <div className="sidebar__nav-row">
        <Link
          href="/"
          className={`sidebar__logo${isHome ? " sidebar__logo--active" : ""}`}
        >
          <span className="sidebar__logo-mark">
            <LogoIcon backgroundColor="transparent" emblemColor="currentColor" size={24} />
          </span>
          <span className="sidebar__logo-text">Alek Furgal</span>
        </Link>

        <nav className="sidebar__links">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar__link${isActive ? " sidebar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
