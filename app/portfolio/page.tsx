import type { Metadata } from "next";
import Image from "next/image";
import SplitPageLayout from "@/components/SplitPageLayout";
import { ContactDrawer } from "@/components/ContactDrawer";

export const metadata: Metadata = {
  title: "My work | Alek Furgal",
  description:
    "Selected writing for SaaS, cybersecurity, and technical companies.",
};

type Piece = {
  image?: string;
  title: string;
  statLine?: React.ReactNode;
  descBefore: string;
  descAfter?: string;
  href: string;
  linkLabel: string;
};

const pieces: Piece[] = [
  {
    image: "/port1.png",
    title: "AI risk synthesis — what ~50 academic sources say",
    statLine: (
      <>
        <strong>#1</strong>{" "}across intent cluster{" "}<span className="portfolio-item__stat-sep">·</span>{" "}<strong>~11K</strong>{" "}combined searches/mo{" "}<span className="portfolio-item__stat-sep">·</span>{" "}<strong>#1</strong>{" "} in AI Overview
      </>
    ),
    descBefore:
      "The challenge with this piece was volume. The titular question has a significant research literature behind it, and most of the existing coverage tends to lean into sensationalism. The job was to synthesize the sources into an accurate picture of current evidence — not averaging positions, but distinguishing established findings from open questions and areas of genuine uncertainty.",
    descAfter:
      "The piece ranks first across every meaningful variant of the query and appears as the first citation in Google\u2019s AI Overview for the topic. An honest synthesis that builds on its sources well turns out to be something a model has to attribute rather than absorb.",
    href: "https://surfshark.com/blog/will-ai-take-over-the-world",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port2.png",
    title: "Ebook — a startup validation framework",
    statLine: <>Lead-gen resource{" "}<span className="portfolio-item__stat-sep">·</span>{" "}gated asset</>,
    descBefore:
      "Long-form ebook for a software development and startup consultancy. The piece needed to work across a wide range of business types without losing the identity of a single usable framework.",
    descAfter:
      "That meant building a clear progression: customer demand, market opportunity, pricing, business models, competitive positioning, operational risk. Rather than offering startup advice by checklist, the goal was to give founders a way to evaluate opportunities systematically and understand how each decision affects the next.",
    href: "/ebook_Startup_Validation.pdf",
    linkLabel: "Open the .pdf",
  },

  {
    image: "/port5.png",
    title: "Reference guide — best DNS servers for gaming",
    statLine: (
      <>
        <strong>2,600</strong>{" "}organic visits/month{" "}<span className="portfolio-item__stat-sep">·</span>{" "}<strong>1,900</strong>{" "}linking domains{" "}<span className="portfolio-item__stat-sep">·</span>{" "}<strong>100%</strong>{" "}dofollow
      </>
    ),
    descBefore:
      "Product-adjacent buying guides have to balance genuine help against feature pitch, and most pick the pitch. Here, Surfshark's DNS servers are listed as one option among four, alongside the popular alternatives the SERP already demands. From there, the article earns its ground: what level of improvement to expect, how to set up whichever you pick, how to confirm it worked.",
    descAfter:
      "A 100% dofollow rate across 1,900 linking domains suggests the citations are editorial \u2014 gaming sites, tech guides, and forum threads treating the page as a reference rather than a courtesy link.",
    href: "https://surfshark.com/blog/best-dns-servers-for-gaming",
    linkLabel: "Read on Surfshark",
  },

  {
    image: "/port6.png",
    title: "Technical explainer — how WireGuard works",
    statLine: (
      <>
        <strong>151</strong>{" "}linking domains on{" "}<strong>554</strong>{" "}monthly visits |{" "}<strong>$324</strong>/mo traffic value
      </>
    ),
    descBefore:
      "People searching for WireGuard arrive at different stages — looking for a definition, comparing protocols, or ready to configure. The piece had to serve all three without fracturing, which meant moving between registers, holding technical accuracy, and structuring the piece for easy navigation.",
    descAfter:
      "The backlink to monthly traffic ratio shows that the page is being referenced as a source remarkably often. The $324 monthly traffic value reflects the audience profile: technically literate and purchase-adjacent.",
    href: "https://surfshark.com/blog/what-is-wireguard",
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
        subheading= {
                      <>
                        Selected pieces and the editorial decisions behind them.
                        <p>Organic data via <span style={{ color: 'var(--color-text)' }}>Ahrefs, June 2026</span>.</p>
                      </>
                    }
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

                {piece.statLine && (
                  <p className="portfolio-item__stat-line">{piece.statLine}</p>
                )}

                <h2 className="portfolio-item__title">{piece.title}</h2>

                <p className="portfolio-item__desc">{piece.descBefore}</p>

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

                {piece.descAfter && (
                  <p className="portfolio-item__desc">{piece.descAfter}</p>
                )}

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
