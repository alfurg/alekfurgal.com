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
      "underperforming posts, landing pages, product pages, and content clusters.",
  },
  {
    title: "Page Rewrite",
    price: "From €350/page",
    body: "I rewrite your existing pages to match search intent, explain the product or topic more precisely, and connect to the rest of the site. The goal is a page that does its specific job — not a cleaner version of a page with the wrong job.",
    goodFor: "thin, outdated, unclear, or disconnected pages.",
  },
  {
    title: "Content Strategy Sprint",
    price: "From €900",
    body: "I map content opportunities, page roles, and internal linking so every page has a defined function in your system. You get a clear set of priorities: what to create, what to fix, and what to consolidate — and a rationale for the order.",
    goodFor:
      "scattered content, unclear priorities, and websites without an obvious next step.",
  },
];

export default function ServicesPage() {
  return (
    <SplitPageLayout
      eyebrow="Services"
      heading={<>SEO and content support for <em>your website</em></>}
      subheading="Most underperforming sites don't need more content — they need existing pages doing better jobs. 
      I audit what you have, fix what isn't working, and plan what to build from there."
      cta={{
        heading: <>Ready to get started?</>,
        body: "Tell me what you're working on and I'll let you know how I can help.",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "Send me an email",
      }}
    >
      <div className="hp-section" style={{ paddingBottom: 0 }}>
        <p className="hp-intro" style={{ marginBottom: "var(--space-md)" }}>
          Final pricing depends on scope, research depth, page count, and implementation needs.
        </p>

        <div className="grid gap-5" style={{ display: "grid", gap: "1.25rem" }}>
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ height: "1px", width: "2.5rem", background: "var(--color-accent)", marginTop: "0.6rem" }} />
                <p
                  style={{
                    flexShrink: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-accent)",
                    margin: 0,
                  }}
                >
                  {service.price}
                </p>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.018em",
                  color: "var(--color-text)",
                  margin: "0 0 0.85rem",
                }}
              >
                {service.title}
              </h2>

                <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "var(--color-subtle)",
                  margin: "0 0 0.5rem",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>•</span>
                <span>
                  <span style={{ fontWeight: 500, color: "var(--color-text)" }}>Good for:</span>{" "}
                  {service.goodFor}
                </span>
              </p>
              
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: "0 0 0.5rem",
                }}
              >
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "var(--color-muted)",
                  fontWeight: 300,
                  margin: "0 0 1rem",
                }}
              >
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SplitPageLayout>
  );
}