import type { ReactNode } from "react";
import { SiteSidebar } from "./SiteSidebar";
import { CtaUrlInput } from "./CtaUrlInput";
import { ScrollCapture } from "./ScrollCapture";

type CtaBlock = {
  heading: ReactNode;
  body: string;
  href: string;
  label: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  urlInput?: boolean;
};

type SplitPageLayoutProps = {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  availability?: string;
  cta?: CtaBlock;
  home?: boolean;
  hideMobileCta?: boolean;
  children: ReactNode;
};

export default function SplitPageLayout({
  eyebrow,
  heading,
  subheading,
  availability,
  cta,
  home = false,
  hideMobileCta = false,
  children,
}: SplitPageLayoutProps) {
  return (
    <main className={`split${home ? " split--home" : ""}`}>
        <ScrollCapture />
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
            {subheading && <div className="split-left__sub">{subheading}</div>}
            
            {cta && (
                  <>
                    {cta.urlInput && (
                      <div className="split-left__cta">
                        <h2 className="split-left__cta-heading">{cta.heading}</h2>
                        <p className="split-left__cta-body">{cta.body}</p>
                        <CtaUrlInput href={cta.href} label={cta.label} />
                      </div>
                    )}
                    {!cta.urlInput && (
                      <div className="split-left__cta-service">
                        <h3 className="split-left__cta-service-heading">{cta.heading}</h3>
                        <p className="split-left__cta-service-body">{cta.body}</p>
                        <div className="split-left__cta-service-actions">
                          <a href={cta.href} className="split-left__cta-service-btn split-left__cta-service-btn--primary">
                            {cta.label}
                          </a>
                          {cta.secondaryHref && (
                            <a href={cta.secondaryHref} className="split-left__cta-service-btn split-left__cta-service-btn--secondary">
                              {cta.secondaryLabel}
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}

            {availability && (
              <div className="split-left__availability">
                <span>{availability}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </aside>

        <section className="split__content no-scrollbar">
          {/* Mobile: heading shown here since aside is hidden */}
          <div className="split__mobile-heading">
            {eyebrow && <p className="split-left__eyebrow">{eyebrow}</p>}
            <h1 className="split-left__h1">{heading}</h1>
            {subheading && <div className="article-left__sub" style={{ marginBottom: "2rem" }}>{subheading}</div>}
          </div>

          {/* Mobile CTA — shows under heading on small screens */}
          {cta && !hideMobileCta && (
            <div className="split__mobile-cta">
              {cta.urlInput && (
                <div className="split-left__cta">
                  <h2 className="split-left__cta-heading">{cta.heading}</h2>
                  <p className="split-left__cta-body">{cta.body}</p>
                  <CtaUrlInput href={cta.href} label={cta.label} />
                </div>
              )}
              {!cta.urlInput && (
                <div className="split-left__cta-service">
                  <h3 className="split-left__cta-service-heading">{cta.heading}</h3>
                  <p className="split-left__cta-service-body">{cta.body}</p>
                  <div className="split-left__cta-service-actions">
                    <a href={cta.href} className="split-left__cta-service-btn split-left__cta-service-btn--primary">
                      {cta.label}
                    </a>
                    {cta.secondaryHref && (
                      <a href={cta.secondaryHref} className="split-left__cta-service-btn split-left__cta-service-btn--secondary">
                        {cta.secondaryLabel}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {children}
        </section>
      </div>
    </main>
  );
}