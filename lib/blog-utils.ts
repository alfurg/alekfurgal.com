import { getAllPosts, type BlogPost } from "./blog";

/**
 * Get all unique categories used across published posts
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.categories.forEach((cat) => categories.add(cat));
  });

  return Array.from(categories).sort();
}

/**
 * Get posts grouped by category
 */
export function getPostsByCategory(): Record<string, BlogPost[]> {
  const posts = getAllPosts();
  const grouped: Record<string, BlogPost[]> = {};

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(post);
    });
  });

  return grouped;
}

/**
 * Get the count of posts in each category
 */
export function getCategoryCounts(): Record<string, number> {
  const posts = getAllPosts();
  const counts: Record<string, number> = {};

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      counts[category] = (counts[category] || 0) + 1;
    });
  });

  return counts;
}

/**
 * Get featured posts (for homepage or highlight section)
 */
export function getFeaturedPosts(limit?: number): BlogPost[] {
  const posts = getAllPosts().filter((post) => post.featured);
  return limit ? posts.slice(0, limit) : posts;
}

/**
 * Get related posts (same category, excluding current post)
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const posts = getAllPosts();
  const currentPost = posts.find((p) => p.href === `/blog/${currentSlug}`);

  if (!currentPost) return [];

  return posts
    .filter(
      (post) =>
        post.href !== `/blog/${currentSlug}` &&
        post.categories.some((cat) =>
          currentPost.categories.includes(cat)
        )
    )
    .slice(0, limit);
}