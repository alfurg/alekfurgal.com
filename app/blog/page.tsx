import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-[1380px] px-[var(--site-gutter)] lg:h-[calc(100vh-7rem)]">
      <div className="grid gap-12 py-12 sm:py-16 lg:h-full lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:items-start lg:gap-10 lg:py-0 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[470px_minmax(0,820px)] 2xl:gap-20">
        <aside className="lg:h-full lg:overflow-hidden lg:py-14 xl:py-16">
          <header className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <p className="text-[1.1rem] leading-6 text-[var(--color-subtle)] [font-variant-caps:all-small-caps]">
                Blog
              </p>

              <span
                aria-hidden="true"
                className="mt-[0.15em] h-[1.05em] w-[0.42em] bg-[var(--color-accent)]"
              />
            </div>

            <h1 className="mb-8 text-[clamp(2.25rem,4.5vw,2.65rem)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
              Notes on content, SEO, and meaningful web experiences.
            </h1>

            <p className="text-lg leading-8 text-[var(--color-muted)]">
              How websites, content, and search shape each other and the larger systems they belong to.
            </p>
          </header>
        </aside>

        <section className="no-scrollbar lg:h-full lg:overflow-y-auto lg:py-14 lg:pr-2 xl:py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="
                  group relative block overflow-hidden rounded-2xl border border-[var(--color-border)]
                  bg-[var(--color-surface)] p-6 transition-colors
                  hover:border-[#B87333]
                  sm:aspect-square
                "
              >
                <article className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="h-px w-10 bg-[#B87333]" />

                    <p className="text-[0.78rem] leading-5 text-[var(--color-subtle)]">
                      {post.readingTime}
                    </p>
                  </div>

                  <h2
                    className="
                      text-[clamp(1.1rem,1.6vw,1.42rem)]
                      font-semibold leading-[1.14] tracking-[-0.018em]
                      text-[var(--color-text)] transition-colors
                      group-hover:text-[#B87333]
                    "
                  >
                    {post.title}
                  </h2>

                  {post.description && (
                    <p className="mt-4 text-[0.9rem] leading-6 text-[var(--color-muted)]">
                      {post.description}
                    </p>
                  )}

                  <div className="mt-auto pt-6 text-sm text-[var(--color-text)]">
                    <span className="underline decoration-[#B87333]/50 underline-offset-4 transition-colors group-hover:decoration-[#B87333]">
                      Read article
                    </span>
                  </div>
                </article>

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute bottom-4 right-5
                    text-[5.5rem] font-semibold leading-none tracking-[-0.08em]
                    text-[#B87333] opacity-[0.08] transition-opacity
                    group-hover:opacity-[0.13]
                  "
                >
                  {post.articleNumber}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}