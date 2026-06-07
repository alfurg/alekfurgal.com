import SplitPageLayout from "@/components/SplitPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better websites start with better content",
  description:
    "I help founders, marketers, and content leads at SaaS and technical businesses build content that ranks, converts, and makes the product clear.",
};

const whatIDo = [
  {
    num: "01",
    title: "Audit existing content",
    desc: "Find pages that underperform — wrong intent, weak structure, poor internal linking — and prioritize what to fix first.",
  },
  {
    num: "02",
    title: "Build content systems",
    desc: "Map page roles, topical authority, and funnel stages so your content works as a system, not a loose list of posts.",
  },
  {
    num: "03",
    title: "Write SEO-informed content",
    desc: "Research, structure, and write pages that match search intent, explain the product clearly, and earn trust with technical audiences.",
  },
   {
    num: "04",
    title: "Write SEO-informed content",
    desc: "Research, structure, and write pages that match search intent, explain the product clearly, and earn trust with technical audiences.",
  },
];

const timeline = [
  {
    place: "Agency",
    role: "SEO & content strategy",
    desc: "Technical audits, site structure, and content planning across multiple clients and industries.",
  },
  {
    place: "Asper Brothers",
    role: "SEO copywriter",
    desc: "Content for software development and startup audiences — founders, marketers, technical decision-makers.",
  },
  {
    place: "Surfshark",
    role: "Content strategist & writer",
    desc: "Cybersecurity, networking, and digital privacy content in a competitive SaaS space where accuracy and substance are non-negotiable.",
  },
  {
    place: "Now",
    role: "Freelance — open to projects",
    desc: "Working with SaaS and technical businesses on content audits, strategy, and writing.",
  },
];

const services = [
  {
    name: "Content Visibility Audit",
    desc: "Search intent, structure, internal links, technical visibility, and business relevance — reviewed and prioritized.",
    price: "from €450",
  },
  {
    name: "SEO-Informed Content Refresh",
    desc: "Existing pages rewritten to match search intent, explain the product more clearly, and connect to the rest of the site.",
    price: "from €350/page",
  },
  {
    name: "Content Strategy Sprint",
    desc: "Content opportunities, page roles, internal linking, and priorities mapped so your content works as a system.",
    price: "from €900",
  },
];

export default function Home() {
  return (
    <SplitPageLayout
      home={true}
      eyebrow="SEO · content strategy · brand clarity"
      heading={<>Better websites start with <em>better content</em></>}
      subheading="Content is how a website explains itself — what it offers, who it helps, and why it should be trusted."
      availability="Available for projects · Warsaw"
      cta={{
        heading: "Not sure where to start?",
        body: "Send me a link to your website and I'll tell you what I'd focus on first — zero commitment.",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "Get in touch",
        secondaryHref: "/blog",
        secondaryLabel: "Read the blog",
      }}
    >
      {/* What I do */}
      <section className="hp-section">
        <div className="hp-label">What I do</div>
        <p className="hp-intro">
          I work with <strong>founders, marketers, and content leads </strong> at
          SaaS and technical businesses. The problems tend to look the same:
          pages that should rank but don&apos;t, content that exists but
          doesn&apos;t convert, sites with good ideas buried under vague language.
        </p>
        <div className="hp-grid">
          {whatIDo.map((item) => (
            <div key={item.num} className="hp-grid-item">
              <div className="hp-grid-num">{item.num}</div>
              <div className="hp-grid-title">{item.title}</div>
              <div className="hp-grid-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="hp-section">
        <div className="hp-label">Background</div>
        <p className="hp-prose">
          I started in agency SEO — technical health, site structure, content
          strategy across different clients and industries. That gave me a
          working understanding of how search visibility is actually built: not
          through individual pages, but through coherence, authority, and
          structure.
        </p>
        <p className="hp-prose">
          From there I moved into software house copywriting at Asper Brothers,
          writing for founders, marketers, and decision-makers building digital
          products. Then to Surfshark, where I created and improved content
          across cybersecurity, networking, and privacy — a competitive SaaS
          space where vague explanations don&apos;t hold up and trust depends on
          accuracy and real product understanding.
        </p>
        <p className="hp-prose">
          That background shapes how I work. Once someone lands on a page,
          visibility has done its first job. What matters next is whether the
          page makes a clear argument, earns trust, and supports the larger
          system it belongs to.
        </p>
        <div className="hp-timeline">
          {timeline.map((item) => (
            <div key={item.place} className="hp-tl-row">
              <div className="hp-tl-place">{item.place}</div>
              <div>
                <div className="hp-tl-role">{item.role}</div>
                <div className="hp-tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="hp-section">
        <div className="hp-label">Services</div>
        <div className="hp-services">
          {services.map((s) => (
            <div key={s.name} className="hp-service-row">
              <div>
                <div className="hp-service-name">{s.name}</div>
                <div className="hp-service-desc">{s.desc}</div>
              </div>
              <div className="hp-service-price">{s.price}</div>
            </div>
          ))}
        </div>
        <a href="/services" className="hp-ghost-link">
          Full services page →
        </a>
      </section>

    </SplitPageLayout>
  );
}
