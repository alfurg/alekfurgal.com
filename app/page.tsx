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
    title: "Map your existing content",
    desc: "I audit your pages and traffic to find what's working, what's underperforming, and where the gaps are between what you publish and what your audience is looking for.",
  },
  {
    num: "02",
    title: "Clarify positioning and voice",
    desc: "I identify where your content and your market position diverge — what you're being read as versus what you want to own — and establish the voice to close that gap.",
  },
  {
    num: "03",
    title: "Build your content system",
    desc: "I define what each page needs to do: the intent it targets, the funnel stage it serves, how it connects to the pages around it. That map determines what to fix and what to build.",
  },
   {
    num: "04",
    title: "Execute with substance",
    desc: "I research and write each page to do its specific job — capturing demand, converting qualified visitors, building authority. Content with something to cite, not just something to absorb.",
  },
];

const timeline = [
  {
    place: "Greyotters",
    role: "SEO & content strategy",
    desc: "Technical audits, site structure, and content planning across multiple clients and industries.",
  },
  {
    place: "A. Brothers",
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
      subheading={
        <>
          I work with <strong>founders, marketers, and content leads</strong> at SaaS and technical businesses. I fix:
          <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.25rem", fontSize: "0.95rem" }}>
            <li>pages that should rank but don&apos;t;</li>
            <li>content that exists but doesn&apos;t convert;</li>
            <li>sites with good ideas buried under vague language.</li>
          </ul>
        </>
      }
      availability="2026 * Available for new projects * EEA"
      cta={{
        heading: <>Get a <em>free</em> content audit</>,
        body: "Send me a link to your website and I'll reply with a prioritized content audit.",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "Get in touch",
        urlInput: true,
      }}
      

    >

      {/* What I do */}
      <section className="hp-section">
        <div className="hp-label">How I work</div>
        <p className="hp-intro">
          Every page on your site is doing a job — or failing at it. Here's how I diagnose and fix the issues:
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
          <p className="hp-prose">
           I offer content audits, page refreshes, and strategy sprints. If you
          </p>
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