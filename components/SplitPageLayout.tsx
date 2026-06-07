import type { ReactNode } from "react";
import { SiteSidebar } from "./SiteSidebar";

type CtaBlock = {
  heading: string;
  body: string;
  href: string;
  label: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type SplitPageLayoutProps = {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: string;
  availability?: string;
  cta?: CtaBlock;
  home?: boolean;
  children: ReactNode;
};

export default function SplitPageLayout({
  eyebrow,
  heading,
  subheading,
  availability,
  cta,
  home = false,
  children,
}: SplitPageLayoutProps) {
  return (
    <main className={`split${home ? " split--home" : ""}`}>
      {/* Mobile only: sticky nav */}
      <div className="split__mobile-nav">
        <SiteSidebar />
      </div>

      <div className="split__grid">
        <aside className="split__aside">
          <div className="split__aside-inner">

            {/* Nav — top of left column on desktop */}
            <div className="split__aside-nav">
              <SiteSidebar />
            </div>

            {/* Horizontal rule + vertical line cross.
                Rule starts at --aside-indent via margin-left.
                ::after drops the vertical line from that same point. */}
            <div className="split__aside-hline" aria-hidden="true" />

            {/* Body: flex:1, centers split-left vertically */}
            <div className="split__aside-body">
              <div className="split-left">
                {eyebrow && <p className="split-left__eyebrow">{eyebrow}</p>}
                <h1 className="split-left__h1">{heading}</h1>
                {subheading && <p className="split-left__sub">{subheading}</p>}

                {cta && (
                  <div className="split-left__cta">
                    <h2 className="split-left__cta-heading">{cta.heading}</h2>
                    <p className="split-left__cta-body">{cta.body}</p>
                    <div className="hp-cta-actions">
                      <a href={cta.href} className="hp-btn">
                        {cta.label}
                      </a>
                      {cta.secondaryHref && cta.secondaryLabel ? (
                        <a href={cta.secondaryHref} className="hp-ghost-link hp-ghost-link--inline">
                          {cta.secondaryLabel}
                        </a>
                      ) : null}
                    </div>
                  </div>
                )}

                {availability && (
                  <div className="split-left__availability">
                    <span className="split-left__dot" aria-hidden="true" />
                    <span>{availability}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </aside>

        <section className="split__content">
          {/* Mobile: heading shown here since aside is hidden */}
          <div className="split__mobile-heading">
            {eyebrow && <p className="split-left__eyebrow">{eyebrow}</p>}
            <h1 className="split-left__h1">{heading}</h1>
            {subheading && <p className="split-left__sub">{subheading}</p>}
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}