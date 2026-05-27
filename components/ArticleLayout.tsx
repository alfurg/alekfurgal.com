import Image from "next/image";
import type { ReactNode } from "react";

type TocItem = {
  title: string;
  href: string;
  depth?: 2 | 3;
};

type AsideLink = {
  label: string;
  href: string;
};

type ArticleLayoutProps = {
  eyebrow?: string;
  title: string;
  description: string;
  readingTime?: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  heroPosition?: string;
  toc?: TocItem[];
  asideLinks?: AsideLink[];
  children: ReactNode;
};

export default function ArticleLayout({
  eyebrow,
  title,
  description,
  readingTime,
  heroImage,
  heroAlt = "",
  heroCaption,
  heroPosition = "center center",
  asideLinks = [],
  toc = [],
  children,
}: ArticleLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-[1380px] px-[var(--site-gutter)] lg:h-[calc(100vh-7rem)] lg:overflow-hidden">
      <div className="grid min-h-0 lg:h-full gap-12 py-12 sm:py-16 lg:h-full lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:items-start lg:gap-10 lg:py-0 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[470px_minmax(0,820px)] 2xl:gap-20">
        <aside className="no-scrollbar mb-12 lg:mb-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:py-14 lg:pr-2 xl:py-16 [-webkit-overflow-scrolling:touch]">
          {(eyebrow || readingTime) && (
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {eyebrow && (
                  <p className="text-[1.1rem] leading-6 text-[var(--color-subtle)] [font-variant-caps:all-small-caps]">
                    {eyebrow}
                  </p>
                )}

                {eyebrow && (
                  <span
                    aria-hidden="true"
                    className="mt-[0.15em] h-[1.05em] w-[0.42em] bg-[var(--color-accent)]"
                  />
                )}
              </div>

              {readingTime && (
                <p className="shrink-0 text-sm leading-6 text-[var(--color-subtle)]">
                  {readingTime}
                </p>
              )}
            </div>
          )}

          {heroImage && (
            <figure className="mb-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: heroPosition }}
                />
              </div>

              {heroCaption && (
                <figcaption className="mt-3 border-l border-[var(--color-accent)] pl-3 text-sm leading-6 text-[var(--color-muted)]">
                  {heroCaption}
                </figcaption>
              )}
            </figure>
          )}

          <header className="mb-8">
            <h1 className="mb-5 text-[clamp(2.25rem,4.5vw,2.65rem)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
              {title}
            </h1>

            <p className="text-lg leading-8 text-[var(--color-muted)]">
              {description}
            </p>
          </header>

          {asideLinks.length > 0 && (
            <div className="mb-8 border-t border-[var(--color-border)] pt-7 text-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                You can find me on
              </p>

              <ul className="space-y-3">
                {asideLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="leading-6 text-[var(--color-muted)] underline decoration-[var(--color-link-underline)] underline-offset-4 transition-colors hover:text-[var(--color-text)] hover:decoration-[var(--color-link-underline-hover)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {toc.length > 0 && (
            <div className="border-t border-[var(--color-border)] pt-7 text-sm">
              <nav>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  In this article
                </p>

                <ul className="space-y-3">
                  {toc.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={[
                          "group flex gap-3 leading-6 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]",
                          item.depth === 3 ? "pl-4 text-[0.9em]" : "",
                        ].join(" ")}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-link-underline)] transition-colors group-hover:bg-[var(--color-accent)]"
                        />

                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </aside>

        <article
        className="
            no-scrollbar
            pb-14 pt-0 sm:pb-20
            lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:py-14 lg:pr-2 xl:py-16
            [-webkit-overflow-scrolling:touch]

            text-[18px] leading-8 text-[var(--color-article)]

            [&_p]:mb-6

            [&_h2]:mt-16
            [&_h2]:mb-5
            [&_h2]:border-l-4
            [&_h2]:border-[var(--color-accent)]
            [&_h2]:pl-4
            [&_h2]:text-[1.85rem]
            [&_h2]:font-semibold
            [&_h2]:leading-tight
            [&_h2]:tracking-tight
            [&_h2]:text-[var(--color-text)]

            [&_h3]:mt-10
            [&_h3]:mb-4
            [&_h3]:text-[1.35rem]
            [&_h3]:font-semibold
            [&_h3]:leading-snug
            [&_h3]:tracking-tight
            [&_h3]:text-[var(--color-text)]

            [&_ul]:mb-6
            [&_ul]:list-disc
            [&_ul]:pl-6

            [&_ol]:mb-6
            [&_ol]:list-decimal
            [&_ol]:pl-6

            [&_li]:mb-2

            [&_li::marker]:text-[var(--color-accent)]

            [&_a]:text-[var(--color-text)]
            [&_a]:underline
            [&_a]:decoration-[var(--color-link-underline)]
            [&_a]:underline-offset-4
            [&_a]:transition-colors
            [&_a:hover]:decoration-[var(--color-link-underline-hover)]

            [&_blockquote]:my-8
            [&_blockquote]:border-l-4
            [&_blockquote]:border-[var(--color-accent)]
            [&_blockquote]:pl-5
            [&_blockquote]:text-[var(--color-muted)]
          "
        >
          {children}
        </article>
      </div>
    </main>
  );
}