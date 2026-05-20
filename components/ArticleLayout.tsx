import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type TocItem = {
  title: string;
  href: string;
};

type ArticleLayoutProps = {
  title: string;
  description: string;
  readingTime?: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  toc?: TocItem[];
  children: ReactNode;
};

export default function ArticleLayout({
  title,
  description,
  readingTime,
  heroImage,
  heroAlt = "",
  heroCaption,
  toc = [],
  children,
}: ArticleLayoutProps) {
  return (
    <main className="mx-auto max-w-[1380px] px-6 py-14 sm:py-20">
  <div className="lg:grid lg:grid-cols-[470px_minmax(0,820px)] lg:items-start lg:gap-16 xl:gap-20">
        <aside className="mb-12 lg:sticky lg:top-20 lg:mb-0">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm text-[#c9824a] transition hover:text-[#e0a06b]"
          >
            ← Blog
          </Link>

          {heroImage && (
            <figure className="mb-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a2a25] bg-[#161613]">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {heroCaption && (
                <figcaption className="mt-3 border-l border-[#c9824a] pl-3 text-sm leading-6 text-[#9c9c91]">
                  {heroCaption}
                </figcaption>
              )}
            </figure>
          )}

          <header className="mb-8">
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f0] sm:text-5xl lg:text-[2.65rem]">
              {title}
            </h1>

            <p className="text-lg leading-8 text-[#c7c7bd]">
              {description}
            </p>
          </header>

          {(readingTime || toc.length > 0) && (
            <div className="space-y-7 border-t border-[#2a2a25] pt-7 text-sm">
              {readingTime && (
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#77776d]">
                    Reading time
                  </p>
                  <p className="text-[#c7c7bd]">{readingTime}</p>
                </div>
              )}

              {toc.length > 0 && (
                <nav>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#77776d]">
                    In this article
                  </p>

                  <ul className="space-y-3">
                    {toc.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="leading-6 text-[#9c9c91] transition hover:text-[#f5f5f0]"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          )}
        </aside>

        <article
          className="
            text-[17px] leading-8 text-[#d8d8cf]

            [&_p]:mb-5

            [&_h2]:mt-12
            [&_h2]:mb-4
            [&_h2]:text-2xl
            [&_h2]:font-semibold
            [&_h2]:tracking-tight
            [&_h2]:text-[#f5f5f0]

            [&_h3]:mt-9
            [&_h3]:mb-3
            [&_h3]:text-xl
            [&_h3]:font-semibold
            [&_h3]:text-[#f5f5f0]

            [&_ul]:mb-5
            [&_ul]:list-disc
            [&_ul]:pl-6

            [&_ol]:mb-5
            [&_ol]:list-decimal
            [&_ol]:pl-6

            [&_li]:mb-2

            [&_a]:text-[#f5f5f0]
            [&_a]:underline
            [&_a]:decoration-[#7a5138]
            [&_a]:underline-offset-4
            [&_a:hover]:decoration-[#c9824a]

            [&_blockquote]:my-8
            [&_blockquote]:border-l
            [&_blockquote]:border-[#c9824a]
            [&_blockquote]:pl-5
            [&_blockquote]:text-[#c7c7bd]
          "
        >
          {children}
        </article>
      </div>
    </main>
  );
}