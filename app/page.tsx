import SplitPageLayout from "@/components/SplitPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your content, working as a system",
  description:
    "I help founders, marketers, and content leads at SaaS and technical businesses build content that ranks, converts, and makes the product clear.",
};

const whatIDo = [
  {
    num: "01",
    title: "Map your content library",
    desc: "I review your pages across search intent, structure, originality, and business relevance to build a clear picture of what's earnsing its place and what isn't.",
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
    role: "SEO specialist",
    desc: "Technical audits, site structure, and content planning across multiple clients and industries.",
  },
  {
    place: "A. Brothers",
    role: "SEO content specialist",
    desc: "Content for software development and startup audiences — founders, marketers, technical decision-makers.",
  },
  {
    place: "Surfshark",
    role: "Cybersecurity writer",
    desc: "Cybersecurity, networking, and digital privacy content in a competitive SaaS space where accuracy and substance are non-negotiable.",
  },
  {
    place: "Now",
    role: "Freelance",
    desc: "Working with SaaS and technical businesses on search and content strategy.",
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
      eyebrow="editorial · AI Search strategy · positioning"
      heading={<>Your <em>content</em>, working as a <em>system</em></>}
      subheading={
        <>
          I work with <strong>founders, marketers, and content leads</strong> at SaaS and technical businesses. I fix:
          <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.25rem", fontSize: "0.95rem" }}>
            <li>pages that should rank but don&apos;t;</li>
            <li>content that exists but doesn&apos;t convert;</li>
            <li>sites with good ideas buried under weak copy.</li>
          </ul><br />
          An audit is usually where I start.
        </>
      }
      availability="Available for new projects * EEA * 2026"
      cta={{
        heading: <>Get a <em>free</em> content audit</>,
        body: "Send me a link to your website and I'll reply with a prioritized audit of your content library.",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "Get in touch",
        urlInput: true,
      }}
      

    >

      {/* What I do */}
      <section className="hp-section">
        <div className="hp-label">How I work</div>
        <p className="hp-intro">
          Every page on your site is either doing its  job or failing at it. Here's how I diagnose and fix content system issues:
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
          I started in agency SEO, working on technical health, site structure, 
          and content strategy across different clients and industries. That gave me a
          working understanding of how search visibility is actually built: not
          with individual pages, but through coherence, authority, and
          structure.
        </p>
        <p className="hp-prose">
          From there I moved into SEO copywriting at a software house,
          writing for founders and programmers building digital
          products and platforms. Then to Surfshark, where I helped build the tone of voice
          across cybersecurity, networking, and privacy in a competitive SaaS
          space where trust depends on accuracy and real product understanding.
        </p>
        <div className="hp-timeline">
          {timeline.map((item) => (
            <div key={item.place} className="hp-tl-row">
              <div className="hp-tl-place" style={{ color: item.place === "Now" ? "var(--color-accent)" : "var(--color-subtle)" }}>{item.place}</div>
              <div>
                <div className="hp-tl-role">{item.role}</div>
                <div className="hp-tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="hp-prose">
          That background shapes how I work. Content has to be substantive enough to be useful, 
          building the kind of trust that moves the reader toward a decision. 
          In AI search, that's also the difference between a citation and what got absorbed into the answer.
        </p>
        <p className="hp-prose" style={{ marginTop: "3rem" }}>
           Most of the opportunity is already on your site. I audit what you have, 
           fix what's underperforming, and build from there.
        </p>
        <a href="/services" className="hp-ghost-link">
          Go to services page →
        </a>
      </section>

    </SplitPageLayout>
  );
}