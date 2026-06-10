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
    intro: "For existing pages that should be doing more.",
    body: "I review selected pages across search intent, structure, internal links, technical visibility, and business relevance, then give you a prioritized set of recommendations.",
    goodFor:
      "Underperforming posts, landing pages, product pages, and content clusters.",
  },
  {
    title: "SEO-Informed Content Refresh",
    price: "From €350/page",
    intro: "For pages that need clearer structure and stronger substance.",
    body: "I improve existing content so it better matches search intent, explains the topic or product more clearly, and connects better to the rest of the site.",
    goodFor: "Thin, outdated, unclear, or disconnected pages.",
  },
  {
    title: "Content Strategy Sprint",
    price: "From €900",
    intro: "For deciding what to create, improve, or consolidate next.",
    body: "I map content opportunities, page roles, internal linking, and priorities so your content works as a system rather than a loose list of ideas.",
    goodFor:
      "Scattered content, unclear priorities, and websites without an obvious next step.",
  },
];

export default function ServicesPage() {
  return (
    <SplitPageLayout
      eyebrow="Services"
      heading={<>Content-first SEO support for <em>your website</em></>}
      subheading="I help businesses improve existing pages, decide what to create next, and build a clearer content system that bridges search intent with business goals."
      cta={{
        heading: <>Not sure <em>where to start?</em></>,
        body: "Send me a link to your website and I'll help you find the best path forward.",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "Get in touch",
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
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: "0 0 0.5rem",
                }}
              >
                {service.intro}
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

              <p
                style={{
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  color: "var(--color-subtle)",
                  margin: 0,
                }}
              >
                <span style={{ color: "var(--color-text)" }}>Good for:</span>{" "}
                {service.goodFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SplitPageLayout>
  );
}