import SplitPageLayout from "@/components/SplitPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your content, cited",
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
    title: "Plan your content system",
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
    place: "greyotters",
    role: "Account management & SEO analysis",
    desc: "Technical audits, site structure, and content planning across multiple clients and industries.",
  },
  {
    place: "A. Brothers",
    role: "SEO content management",
    desc: "Creating and publishing content for software development and startup audiences — founders, marketers, technical decision-makers.",
  },
  {
    place: "Surfshark",
    role: "Content & editorial strategy",
    desc: "Cybersecurity, networking, and digital privacy content in a competitive SaaS space where accuracy and substance are non-negotiable.",
  },
  {
    place: "Now",
    role: "Freelance",
    desc: "Working with SaaS and technical businesses on search and content strategy.",
  },
];

export default function Home() {
  return (
    <SplitPageLayout
      home={true}
      eyebrow="editorial · AI Search · positioning"
      heading={<>Your content, <em>cited</em></>}
      subheading={
        <>
          I work with <strong>founders, marketers, and content leads</strong> at SaaS and technical businesses on:
          <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.25rem", fontSize: "0.95rem", listStyle: "none"}}>
            <li>pages that should rank but don&apos;t;</li>
            <li>content that exists but doesn&apos;t convert;</li>
            <li>ideas worth citing buried under weak copy.</li>
          </ul>
    <p style={{ margin: "3rem 0 0" }}>An audit is usually where I start.</p>
        </>
      }
      availability="Available for new projects · EEA · 2026"
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
          Conversion comes from clarity. Here's how I build it into content systems:
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
      <section className="hp-section" style={{ paddingBottom: "1rem" }}>
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
          In AI search, that's also what differentiates a citation from what got absorbed into the answer.
        </p>
           <div style={{ height: "1px", background: "var(--color-border)", margin: "4rem 0 1.5rem" }} />
        <p className="hp-prose" style={{ marginTop: "0" }}>
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