import type { ReactNode } from "react";
import { SiteSidebar } from "./SiteSidebar";

type SplitPageLayoutProps = {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: string;
  availability?: string;
  children: ReactNode;
};

export default function SplitPageLayout({
  eyebrow,
  heading,
  subheading,
  availability,
  children,
}: SplitPageLayoutProps) {
  return (
    <main className="split">
      {/* Mobile sticky nav */}
      <div className="split__mobile-nav">
        <SiteSidebar />
      </div>

      <div className="split__grid">
        <aside className="split__aside">
          <div className="split__aside-inner">
            {/* Nav row */}
            <SiteSidebar />

            {/* Heading block — immediately below nav */}
            <div className="split-left">
              {eyebrow && <p className="split-left__eyebrow">{eyebrow}</p>}
              <h1 className="split-left__h1">{heading}</h1>
              {subheading && <p className="split-left__sub">{subheading}</p>}
            </div>
            

            {/* Availability pinned to bottom */}
            {availability && (
              <div className="split-left__availability">
                <span className="split-left__dot" aria-hidden="true" />
                <span>{availability}</span>
              </div>
            )}
          </div>
          
      
        </aside>

        <section className="split__content">
          {/* Mobile heading */}
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
