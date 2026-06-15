import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
import { ContactDrawer } from "@/components/ContactDrawer";

export const metadata: Metadata = {
  title: "Services | Alek Furgal",
  description:
    "Content-first SEO support for websites that need better pages, clearer priorities, and stronger content systems.",
};

const AuditIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const RewriteIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const StrategyIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const QuestionMarkIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <text
      x="12"
      y="19"
      fontSize="26"
      fontWeight="400"
      textAnchor="middle"
      fontFamily="inherit"
      fill="currentColor"
    >?</text>
  </svg>
);

const services = [
  {
    title: "Content visibility audit",
    price: "From €450",
    body: "I review your content across search intent, structure, internal links, technical visibility, and business relevance. You get a prioritized list of what to fix, what to consolidate, and what's earning its place.",
    goodFor: "Underperforming posts, landing pages, product pages, and content clusters.",
    icon: <AuditIcon />,
  },
  {
    title: "Page rewrite",
    price: "From €350/page",
    body: "I rewrite your existing pages to match search intent, explain the product or topic more precisely, and connect to the rest of the site. The goal is a page that does its specific job — not a cleaner version of a page with the wrong job.",
    goodFor: "Thin, outdated, unclear, or disconnected pages.",
    icon: <RewriteIcon />,
  },
  {
    title: "Content strategy sprint",
    price: "From €900",
    body: "I map content opportunities, page roles, and internal linking so every page has a defined function in your system. You get a clear set of priorities: what to create, what to fix, and what to consolidate — and a rationale for the order.",
    goodFor: "Scattered content, unclear priorities, and websites without an obvious next step.",
    icon: <StrategyIcon />,
  },
  {
    title: "Something else entirely",
    price: "Let's talk",
    body: "Some work doesn't fit a fixed scope. I've taken on editorial direction, content strategy, SEO audits, and one-off writing across SaaS and technical businesses. Tell me what you're trying to solve and I'll tell you whether I'm the right person for it.",
    goodFor: "Scoped projects, one-off requests, retainers, and anything in between.",
    icon: <QuestionMarkIcon />,
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <ContactDrawer />
      <SplitPageLayout
        eyebrow="Offer"
        heading={<>Audit, <em>fix</em>, build</>}
        subheading="Three ways to make your content earn its place — starting with what you already have."
        availability="Available for new projects · EEA · 2026"
        hideMobileCta={true}
        cta={{
          heading: <>You can <em>contact me</em> via:</>,
          body: "",
          href: "mailto:aleksanderfurgal@gmail.com",
          label: "email",
          secondaryHref: "https://www.linkedin.com/in/alek-furgal/",
          secondaryLabel: "LinkedIn",
        }}
      >
        <div className="hp-section" style={{ paddingBottom: 0 }}>
          <p className="hp-intro" style={{ marginBottom: "var(--space-md)" }}>
            Final pricing depends on scope, research depth, page count, and implementation needs.
          </p>

          <div className="services-list">
            {services.map((service, index) => (
              <article key={`${service.title}-${index}`} className={`service-card ${service.featured ? 'service-card--featured' : ''}`}>
                <div className="service-card__icon-hero">
                  {service.icon}
                </div>
                <div className="service-card__content">
                  <div className="service-card__top">
                    <h2 className="service-card__title">{service.title}</h2>
                    <span className="service-card__price">{service.price}</span>
                  </div>

                  <p className="service-card__body">{service.body}</p>

                  <p className="service-card__good-for">
                    <span className="service-card__good-for-label">Good for:</span> {service.goodFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SplitPageLayout>
    </>
  );
}