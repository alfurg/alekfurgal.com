import Image from "next/image";
import type { ReactNode } from "react";
import { SiteSidebar } from "./SiteSidebar";

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
  heading: string;
  subheading?: string;
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
  heading,
  subheading,
  readingTime,
  heroImage,
  heroAlt = "",
  heroCaption,
  heroPosition = "center center",
  toc = [],
  asideLinks = [],
  children,
}: ArticleLayoutProps) {
  return (
    <main className="article split">
      <div className="split__mobile-nav">
        <SiteSidebar />
      </div>

      <div className="split__grid">
        <aside className="split__aside">
          <div className="split__aside-inner no-scrollbar">
            <div className="split__aside-nav">
              <SiteSidebar />
            </div>

            <div className="split__aside-hline" aria-hidden="true" />

            <div className="split__aside-body">
              <div className="split-left article-left">
                {(eyebrow || readingTime) && (
                  <div className="article-left__top">
                    {eyebrow && <p className="split-left__eyebrow">{eyebrow}</p>}
                    {readingTime && <p className="article-left__time">{readingTime}</p>}
                  </div>
                )}

                {heroImage && (
                  <figure className="article-left__figure">
                    <div className="article-left__image">
                      <Image
                        src={heroImage}
                        alt={heroAlt}
                        fill
                        priority
                        style={{ objectFit: "cover", objectPosition: heroPosition }}
                      />
                    </div>
                    {heroCaption && (
                      <figcaption className="article-left__caption">{heroCaption}</figcaption>
                    )}
                  </figure>
                )}

                <h1 className="split-left__h1">{heading}</h1>
                {subheading && <p className="split-left__sub">{subheading}</p>}

                {toc.length > 0 && (
                  <nav className="article-left__block">
                    <div className="article-left__toc-separator" aria-hidden="true" />
                    <p className="article-left__block-label">In this article</p>
                    <ul className="article-left__list">
                      {toc.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className={`article-left__toc-link${item.depth === 3 ? " article-left__toc-link--nested" : ""}`}
                          >
                            <span aria-hidden="true" className="article-left__toc-dot" />
                            <span>{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {asideLinks.length > 0 && (
                  <div className="article-left__block">
                    <p className="article-left__block-label">You can find me on</p>
                    <ul className="article-left__list">
                      {asideLinks.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noreferrer" className="article-left__link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        <article className="split__content no-scrollbar">
          <div className="split__mobile-heading">
            {(eyebrow || readingTime) && (
              <div className="article-left__top">
                {eyebrow && <p className="article-left__eyebrow">{eyebrow}</p>}
                {readingTime && <p className="article-left__time">{readingTime}</p>}
              </div>
            )}
            <h1 className="article-left__h1">{heading}</h1>
            {subheading && <p className="article-left__sub" style={{ marginBottom: "2rem" }}>{subheading}</p>}
          </div>

          <div className="article-body">{children}</div>
        </article>
      </div>
    </main>
  );
}
