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
      "The topic invites two failure modes: fearmongering and oversimplification. The piece works through roughly fifty academic and industry sources and sorts them into what's actually settled, what's still contested, and what no one can answer yet.",
      "The harder editorial call was leaving the open questions open. Resolving them would have made for a cleaner read and a less accurate one — and on a subject this contested, the accuracy is the whole reason to publish.",
    ],
    href: "https://surfshark.com/blog/will-ai-take-over-the-world",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port2.png",
    title: "Lead-gen ebook — a startup validation framework",
    tags: ["Startup strategy"],
    description: [
      "Long-form lead-generation ebook for a software development and startup consultancy. The framework had to hold up across very different kinds of businesses — physical products, software, services — so a founder in any of them could work from the same set of questions.",
      "That meant building a clear progression — customer demand, market opportunity, pricing, business model, competitive position, operational risk — rather than a glossary of validation concepts. It's written for founders at the idea stage who need something to apply, not a survey of what validation means.",
    ],
    href: "/ebook_Startup_Validation.pdf",
    linkLabel: "Open the .pdf",
  },

  {
    image: "/port3.png",
    title: "Product-launch explainer — post-quantum encryption",
    tags: ["Cybersecurity"],
    description: [
      "Published alongside Surfshark's rollout of post-quantum encryption. The piece had two jobs at once: announce a product feature and explain the cryptography well enough that a reader who's never heard of quantum computing understands why it matters.",
      "The challenge was tone. A launch piece carries some product enthusiasm, but the subject also needed real technical weight and a clear sense of why it matters now — without sliding into the alarmism that security marketing falls into so easily.",
    ],
    href: "https://surfshark.com/blog/post-quantum-encryption",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port4.png",
    title: "Mixed-audience guide — how P2P VPNs work",
    tags: ["Networking & privacy"],
    description: [
      "The people searching for this don't share a starting point. Some know what a VPN is, some have never seen the term P2P, and the explanation has to land for both.",
      "The editorial work was ordering a single explanation so it stays accurate the whole way down while never assuming knowledge the reader hasn't been given yet. Writing one piece that holds a mixed audience is harder than writing for one level and letting everyone else sort themselves out.",
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