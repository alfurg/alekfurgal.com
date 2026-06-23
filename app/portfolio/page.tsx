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
    image: "/port1.png",
    title: "AI risk synthesis — what ~50 academic sources say",
    tags: ["AI & emerging tech"],
    description: [
      "The challenge with this piece was volume. The titular question has a significant research literature behind it, and most of the existing coverage tends to lean into sensationalism. The job was to synthesize the sources into an accurate picture of current evidence — not averaging positions, but distinguishing established findings from open questions and areas of genuine uncertainty.",
      "This post continues to rank well for a competitive query — evidence that synthesis-layer content grounded in primary research holds up in AI search.",
    ],
    href: "https://surfshark.com/blog/will-ai-take-over-the-world",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port2.png",
    title: "Lead-gen ebook — a startup validation framework",
    tags: ["Startup strategy"],
    description: [
      "Long-form ebook for a software development and startup consultancy. The piece needed to work across a wide range of business types without losing the identity of a single usable framework.",
      "That meant building a clear progression: customer demand, market opportunity, pricing, business models, competitive positioning, operational risk. Rather than offering startup advice by checklist, the goal was to give founders a way to evaluate opportunities systematically and understand how each decision can affect the next.",
    ],
    href: "/ebook_Startup_Validation.pdf",
    linkLabel: "Open the .pdf",
  },

  {
    image: "/port3.png",
    title: "Product-launch explainer — post-quantum encryption",
    tags: ["Cybersecurity"],
    description: [
      "Published alongside Surfshark’s rollout of post-quantum encryption, this announcement/explainer introduced a complex cybersecurity feature to a general audience that might not yet recognize its relevance.",
      "The editorial challenge was balancing product enthusiasm with technical depth, without oversimplifying the subject or slipping into alarmism.",

    ],
    href: "https://surfshark.com/blog/post-quantum-encryption",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port4.png",
    title: "Mixed-audience guide — how P2P VPNs work",
    tags: ["Networking & privacy"],
    description: [
      "The people searching for this don't share a baseline. The editorial work was sequencing a single explanation so it stays accurate the whole way down while never assuming knowledge the reader hasn't been given yet.",
      "The piece is built around comparison, using related VPN models as reference points to make P2P VPNs understandable in context rather than on their own.",
    ],
    href: "https://surfshark.com/blog/p2p-vpn",
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

                <p className="portfolio-item__desc">{piece.description[0]}</p>

              {piece.image && (
                <div className="portfolio-item__image-wrap">
                  <div className="portfolio-item__image-wrap-inner">
                    <Image
                      src={piece.image}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 820px, 100vw"
                      className="portfolio-item__image"
                    />
                  </div>
                </div>
              )}

                <p className="portfolio-item__desc">{piece.description[1]}</p>

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