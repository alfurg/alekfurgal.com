import { getAllPosts } from "@/lib/blog";
import { SiteSidebar } from "@/components/SiteSidebar";
import BlogCardGrid from "@/components/BlogCardGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Alek Furgal",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="split article blog-page">
      <div className="split__mobile-heading">
        <div className="mb-6 flex items-center gap-3">
          <p className="split-left__eyebrow" >
            Blog
          </p>

          <span
            aria-hidden="true"
            className="mt-[0.15em] h-[1.05em] w-[0.42em] bg-[var(--color-accent)]"
          />
        </div>

        <h1 className="mb-4 text-[clamp(2.25rem,4.5vw,2.65rem)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
          On content, search, and <em>what it takes to be worth citing</em>
        </h1>

        <p className="text-lg leading-8 text-[var(--color-muted)]" style={{ marginBottom: "2rem" }}>
          I write about the decisions, systems, and craft behind good content.
        </p>
      </div>

      <div className="split__grid">
        <aside className="split__aside">
          <div className="split__aside-inner no-scrollbar">
            <div className="split__aside-nav">
              <SiteSidebar />
            </div>
            <div className="split__aside-hline" aria-hidden="true" />
            <div className="split__aside-body">
              <div className="split-left article-left">
                <p className="split-left__eyebrow">Blog</p>

                <div className="blog-left__heading-group">
                  <h1 className="split-left__h1">
                    On content, search, and <em>what it takes to be worth citing</em>
                  </h1>

                  <p className="split-left__sub">
                    I write about the decisions, systems, and craft behind good content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <BlogCardGrid posts={posts} />
      </div>
    </main>
  );
}