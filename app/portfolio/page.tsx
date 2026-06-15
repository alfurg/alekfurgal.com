import type { Metadata } from "next";
import Image from "next/image";
import SplitPageLayout from "@/components/SplitPageLayout";
import { ContactDrawer } from "@/components/ContactDrawer";

export const metadata: Metadata = {
  title: "My work | Alek Furgal",
  description:
    "Selected writing for SaaS, cybersecurity, and technical companies.",
};

const pieces = [
  {
    image: "/portfolio1.jpg",
    title: "Will AI take over the world? Here's what the data shows",
    tags: ["research synthesis", "risk reasoning", "uncertainty management"],
    description: [
      "The topic invites two common pitfalls: fearmongering and oversimplification. This piece synthesizes roughly fifty academic and industry sources into information that a non-specialist can understand without oversimplifying the central argument.",
      "The most important editorial decision involved letting the uncertainty stand instead of resolving it for effect. This type of synthesis is the kind of work that AI search has to cite rather than absorb; the value lies in information filtering, which can only be traced back to the source."
    ],
    href: "https://surfshark.com/blog/will-ai-take-over-the-world",
    linkLabel: "Read on Surfshark",
  },
 
{
    image: "/portfolio2.png",
    title: "15 questions for startup validation",
    tags: ["structured thinking", "framework design", "founder evaluation"],
    description: [
      "Long-form lead-generation ebook for a software development and startup consultancy. Developed a structured validation framework covering customer demand, market opportunity, pricing, business models, competitive positioning, and operational risk.",
      "Combined startup methodology, research, and real-world examples into a practical guide designed to help founders assess whether an idea is commercially viable before investing in product development.",
    ],
    href: "/ebook_Startup_Validation.pdf",
    linkLabel: "Open the .pdf",
  },
 
  {
    image: "/portfolio3.jpg",
    title: "What is P2P VPN, and how does it work?",
    tags: ["technical explanation", "systems understanding", "privacy literacy"],
    description: [
      "The problem with pieces like this one is that the people searching for them usually don't share a baseline.",
      "This article sequences the explanation to stay accurate and navigable. This meant deciding what could be assumed and what had to be fully broken down. Technical accuracy and beginner-readability usually trade off against each other, but good structure tends to preserve both."
    ],
      href: "https://surfshark.com/blog/p2p-vpn",
    linkLabel: "Read on Surfshark",
  },
  {
    image: "/portfolio4.jpg",
    title: "Post-quantum encryption: what it is and why it matters",
    tags: ["tech translation", "cryptography explanation", "systems communication"],
    description: [
      "Published around the time of Surfshark\'s rollout of post-quantum encryption, this post had two jobs: to introduce a new product feature and to explain the concept behind it in a way that makes the need for it clear to the reader.", 
      "The challenge was striking the right tone — balancing the enthusiasm of a product announcement with a deeper technological explanation — while ensuring the piece conveys a sense of urgency that doesn't cross into alarmism."
    ],
      href: "https://surfshark.com/blog/post-quantum-encryption",
    linkLabel: "Read on Surfshark",
  },
];

export default function PortfolioPage() {
  return (
    <>
    <ContactDrawer />
    <SplitPageLayout
      eyebrow="My work"
      heading="Portfolio"
      subheading="Selected pieces and the editorial decisions behind them."
      availability="Available for new projects · EEA · 2026"
      hideMobileCta={true}
      cta={{
        heading: (
          <>
            You can <em>contact me</em> via:
          </>
        ),
        body: "",
        href: "mailto:aleksanderfurgal@gmail.com",
        label: "email",
        secondaryHref: "https://www.linkedin.com/in/alek-furgal/",
        secondaryLabel: "LinkedIn",
      }}
    >
      <div className="hp-section">
        <div className="portfolio-list">
          {pieces.map((piece) => (
            <article key={piece.href} className="portfolio-item">
              {piece.image && (
                <div className="portfolio-item__image-wrap">
                  <Image
                    src={piece.image}
                    alt=""
                    fill
                    className="portfolio-item__image"
                  />
                </div>
              )}
              <p className="portfolio-item__tags">
                {piece.tags.map((tag, i) => (
                  <span key={tag} className="portfolio-item__tag">
                    {i > 0 && (
                      <span className="portfolio-item__tag-sep" aria-hidden="true">
                        {" "}·{" "}
                      </span>
                    )}
                    {tag}
                  </span>
                ))}
              </p>
              <h2 className="portfolio-item__title">{piece.title}</h2>
              {Array.isArray(piece.description)
                ? piece.description.map((para, i) => (
                    <p key={i} className="portfolio-item__desc">
                      {para}
                    </p>
                  ))
                : <p className="portfolio-item__desc">{piece.description}</p>}
                            <a
                href={piece.href}
                target="_blank"
                rel="noreferrer"
                className="hp-ghost-link hp-ghost-link--inline"
              >
                {piece.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </SplitPageLayout>
    </>
  );
}