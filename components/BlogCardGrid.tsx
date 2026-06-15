"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/blog";

type BlogCardGridProps = {
  posts: BlogPost[];
};

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function BlogCardGrid({ posts }: BlogCardGridProps) {
  const router = useRouter();

  return (
    <section className="split__content no-scrollbar">
      <div className="blog-card-grid">
        {posts.map((post) => {
          const displayDate =
            post.updatedAt && post.updatedAt !== post.publishedAt
              ? `Updated ${formatDate(post.updatedAt)}`
              : `Published ${formatDate(post.publishedAt)}`;

          return (
            <article
              key={post.href}
              className="blog-grid-item blog-card group cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) return;
                router.push(post.href);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  router.push(post.href);
                }
              }}
            >
              <div className="blog-card__top">
                <p className="blog-card__date">{displayDate}</p>
                <p className="hp-grid-num">{post.readingTime}</p>
              </div>

              <div className="blog-card__body">
                <h2 className="blog-card__title">{post.heading}</h2>

                {post.subheading && (
                  <div className="blog-card__excerpt-wrapper">
                    <p className="blog-card__subtitle">{post.subheading}</p>
                  </div>
                )}
              </div>

              <div className="blog-card__footer">
                <Link href={post.href} className="hp-ghost-link">
                  Read article&nbsp;→
                </Link>
              </div>

              <div aria-hidden="true" className="blog-card__index">
                {post.articleNumber}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}