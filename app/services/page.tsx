import Link from "next/link";
import type { Metadata } from "next";

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
    goodFor: "Scattered content, unclear priorities, and websites without an obvious next step.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-[1380px] px-[var(--site-gutter)] lg:fixed lg:inset-x-0 lg:bottom-0 lg:top-[7rem] lg:overflow-hidden">
      <div className="grid min-h-0 gap-12 py-12 sm:py-16 lg:h-full lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:items-start lg:gap-10 lg:py-0 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[470px_minmax(0,820px)] 2xl:gap-20">
        <aside className="no-scrollbar mb-12 lg:mb-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:py-14 lg:pr-2 xl:py-16 [-webkit-overflow-scrolling:touch]">
          <header className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <p className="text-[1.1rem] leading-6 text-[var(--color-subtle)] [font-variant-caps:all-small-caps]">
                Services
              </p>

              <span
                aria-hidden="true"
                className="mt-[0.15em] h-[1.05em] w-[0.42em] bg-[var(--color-accent)]"
              />
            </div>

            <h1 className="mb-8 text-[clamp(2.25rem,4.5vw,2.65rem)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
              Content-first SEO support for your website
            </h1>

            <p className="text-lg leading-8 text-[var(--color-muted)]">
            I help businesses improve existing pages, decide what to create next, 
            and build a clearer content system that bridges search intent with business goals.
            </p>
          </header>

          <div className="mt-8 max-w-xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="text-lg font-semibold leading-7 text-[var(--color-text)]">
              Need help figuring out where to start?
            </h2>

            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              Send me a link to your website, and I’ll help you find the best path forward.
            </p>

            <Link
              href="mailto:aleksanderfurgal@gmail.com"
              className="mt-6 inline-flex text-sm text-[var(--color-text)] underline decoration-[var(--color-link-underline)] underline-offset-4 transition-colors hover:decoration-[var(--color-link-underline-hover)]"
            >
              Get in touch
            </Link>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-[var(--color-subtle)]">
            Final pricing depends on scope, research
            depth, page count, and implementation needs.
          </p>
        </aside>

        <section className="no-scrollbar lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:py-14 lg:pr-2 xl:py-16 [-webkit-overflow-scrolling:touch]">
          <div className="grid gap-5">
            {services.map((service) => (
              <article
  key={service.title}
  className="
    relative overflow-hidden rounded-2xl border border-[var(--color-border)]
    bg-[var(--color-surface)] p-6
  "
>
  <div className="mb-6 flex items-start justify-between gap-6">
    <div className="h-px w-10 bg-[#B87333]" />

    <p className="shrink-0 text-right text-sm font-medium leading-5 text-[#B87333]">
      {service.price}
    </p>
  </div>

  <div className="max-w-2xl">
    <h2
      className="
        text-[clamp(1.25rem,2vw,1.55rem)] font-semibold
        leading-tight tracking-[-0.018em] text-[var(--color-text)]
      "
    >
      {service.title}
    </h2>

    <p className="mt-4 text-base font-medium leading-7 text-[var(--color-text)]">
      {service.intro}
    </p>

    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
      {service.body}
    </p>

    <p className="mt-5 text-sm leading-6 text-[var(--color-subtle)]">
      <span className="text-[var(--color-text)]">Good for:</span>{" "}
      {service.goodFor}
    </p>
  </div>
</article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}