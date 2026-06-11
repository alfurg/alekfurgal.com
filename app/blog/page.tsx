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
      <div className="split__mobile-nav">
        <SiteSidebar />
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
                    Notes on <em>content design</em>
                  </h1>

                  <p className="split-left__sub">
                    I write about decisions, systems, and the craft behind good content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="split__content no-scrollbar">
          <div className="split__mobile-heading">
            <p className="split-left__eyebrow">Blog</p>
            <h1 className="split-left__h1">
              Notes on <em>content design</em>
            </h1>
            <p className="split-left__sub" style={{ marginBottom: "2rem" }}>
              I write about decisions, systems, and the craft behind good content.
            </p>
          </div>
          <BlogCardGrid posts={posts} />
        </section>
      </div>
    </main>
  );
}