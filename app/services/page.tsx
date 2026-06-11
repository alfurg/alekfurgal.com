import Link from "next/link";
import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";

export const metadata: Metadata = {
  title: "Services | Alek Furgal",
  description:
    "Content-first SEO support for websites that need better pages, clearer priorities, and stronger content systems.",
};

const services = [
  {
    title: "Content Visibility Audit",
    price: "From €450",
    intro: "A structured review of what your content is doing and what it isn't.",
    body: "I review your content across search intent, structure, internal links, technical visibility, and business relevance. You get a prioritized list of what to fix, what to consolidate, and what's earning its place.",
    goodFor:
      "Underperforming posts, landing pages, product pages, and content clusters.",
  },
  {
    title: "Page Rewrite",
    price: "From €350/page",
    body: "I rewrite your existing pages to match search intent, explain the product or topic more precisely, and connect to the rest of the site. The goal is a page that does its specific job — not a cleaner version of a page with the wrong job.",
    goodFor: "Thin, outdated, unclear, or disconnected pages.",
  },
  {
    title: "Content Strategy Sprint",
    price: "From €900",
    body: "I map content opportunities, page roles, and internal linking so every page has a defined function in your system. You get a clear set of priorities: what to create, what to fix, and what to consolidate — and a rationale for the order.",
    goodFor:
      "Scattered content, unclear priorities, and websites without an obvious next step.",
  },
];

export default function ServicesPage() {
  return (
    <SplitPageLayout
      eyebrow="Services"
      heading={<>Audit, <em>fix</em>, build</>}
      subheading="Three ways to make your content earn its place — starting with what you already have."
      cta={{
        heading:<>You can <em>contact me</em> via:</>,  
        body:"",
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

        <div className="grid gap-5" style={{ display: "grid", gap: "1.25rem" }}>
  {services.map((service) => (
    <article key={service.title} className="service-card">
      <div className="service-card__header">
        <div className="service-card__accent" />
        <p className="service-card__price">{service.price}</p>
      </div>

      <h2 className="service-card__title">{service.title}</h2>

      <p className="service-card__meta">
        <span className="service-card__meta-dot">•</span>
        <span>
          <span className="service-card__meta-label">Good for:</span> {service.goodFor}
        </span>
      </p>

      <p className="service-card__body">{service.body}</p>
    </article>
  ))}
</div>
      </div>
    </SplitPageLayout>
  );
}