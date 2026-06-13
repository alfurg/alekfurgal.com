import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";

export const metadata: Metadata = {
  title: "My work | Alek Furgal",
  description:
    "Selected writing for SaaS, cybersecurity, and technical companies.",
};

const pieces = [
  {
    title: "Will AI take over the world? Here's what the data shows",
    tags: ["AI", "automation", "risk"],
    description:
      "The topic invites two easy failures: fearmongering or hand-waving. The piece works through roughly fifty academic and industry sources and reconciles them into something a non-specialist can actually hold onto — without flattening the disagreements between them. The editorial decision that mattered was where to let the uncertainty stand instead of resolving it for effect. Synthesis at this depth is also the kind of work AI search has to cite rather than absorb: the value is in the filtering, and the filtering can only be traced back to the source.",
    href: "https://surfshark.com/blog/will-ai-take-over-the-world",
    linkLabel: "Read on Surfshark",
  },
  {
    title: "What is P2P VPN, and how does it work?",
    tags: ["VPNs", "peer-to-peer networking", "privacy"],
    description:
      "The problem here wasn't the technology — it was that the people searching for this term don't share a baseline. Some arrive knowing what a VPN is and wanting the P2P distinction; others are starting from zero. The piece sequences the explanation so it stays correct for the first group and navigable for the second, which meant deciding what could be assumed and what had to be built up. Technical accuracy and beginner-readability usually trade off against each other; the structure is what keeps both.",
    href: "https://surfshark.com/blog/p2p-vpn",
    linkLabel: "Read on Surfshark",
  },
  {
    title: "Post-quantum encryption: what it is and why it matters",
    tags: ["Encryption", "privacy", "quantum computing"],
    description:
      'Published around Surfshark\'s rollout of post-quantum encryption, so it had to do two jobs at once: introduce a product feature and explain the genuinely difficult cryptography behind it well enough that the feature made sense. The hard part was scope — how much quantum computing a reader needs before "post-quantum" means anything, and where to stop. The technical claims were checked against the engineers building the feature, because in this category a plausible-sounding explanation that\'s subtly wrong is worse than none.',
    href: "https://surfshark.com/blog/post-quantum-encryption",
    linkLabel: "Read on Surfshark",
  },
  {
    title: "How to set up a VPN on a TP-Link router",
    tags: ["Routers", "VPN setup", "networking"],
    description:
      "A how-to is only as good as its weakest step, and router configuration is where readers give up. The work was in the sequencing: anticipating where someone gets stuck, what they're looking at on screen, and which assumed step is the one that actually loses people. Clear instructions look simple, which is the point — the difficulty is invisible when it's done right.",
    href: "https://surfshark.com/blog/setup-vpn-router",
    linkLabel: "Read on Surfshark",
  },
];

export default function PortfolioPage() {
  return (
    <SplitPageLayout
      eyebrow="My work"
      heading="Portfolio"
      subheading="Most of these were published at Surfshark, a VPN 
      company where I helped develop the tone of voice for content on 
      cybersecurity, networking, and privacy. The work was as much 
      editorial as it was writing - deciding what each page needed, 
      what mattered in the research, and how to make a competitive 
      technical subject palatable to a general audience."
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
              <p className="portfolio-item__desc">{piece.description}</p>
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
  );
}