import "server-only";

import fs from "node:fs";
import path from "node:path";

export type TocItem = {
  title: string;
  href: string;
  depth: 2 | 3;
};

export type BlogPost = {
  title: string;
  description: string;
  href: string;
  readingTime: string;
  order: number;
  articleNumber: string;
  toc: TocItem[];
};

const BLOG_DIR = path.join(process.cwd(), "app", "blog");

function getExportedObject(source: string, exportName: string) {
  const match = source.match(
    new RegExp(
      `export\\s+const\\s+${exportName}\\s*=\\s*{([\\s\\S]*?)}\\s*;?`
    )
  );

  return match?.[1] ?? "";
}

function getStringField(source: string, exportName: string, fieldName: string) {
  const objectBody = getExportedObject(source, exportName);

  const match = objectBody.match(
    new RegExp(`${fieldName}\\s*:\\s*(["'\`])([\\s\\S]*?)\\1`)
  );

  return match?.[2]?.trim() ?? "";
}

function getNumberField(source: string, exportName: string, fieldName: string) {
  const objectBody = getExportedObject(source, exportName);

  const match = objectBody.match(new RegExp(`${fieldName}\\s*:\\s*(\\d+)`));

  return match?.[1] ? Number(match[1]) : 999;
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function stripCodeBlocks(source: string) {
  return source.replace(/```[\s\S]*?```/g, "");
}

function stripMdx(source: string) {
  return stripCodeBlocks(source)
    .replace(/export\s+const\s+\w+\s*=\s*{[\s\S]*?}\s*;?/g, "")
    .replace(/export\s+const\s+\w+\s*=\s*(["'`])[\s\S]*?\1\s*;?/g, "")
    .replace(/import\s+.*?from\s+["'].*?["'];?/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#{}`>*_[\]()-]/g, " ");
}

function getReadingTime(source: string) {
  const words = stripMdx(source).trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getToc(source: string): TocItem[] {
  const cleanSource = stripCodeBlocks(source);
  const headingRegex = /^(##|###)\s+(.+)$/gm;

  const items: TocItem[] = [];

  for (const match of cleanSource.matchAll(headingRegex)) {
    const hashes = match[1];
    const rawTitle = match[2];

    const title = rawTitle
      .replace(/\{#.*?\}\s*$/, "")
      .replace(/[`*_~]/g, "")
      .trim();

    if (!title) continue;

    items.push({
      title,
      href: `#${slugifyHeading(title)}`,
      depth: hashes.length as 2 | 3,
    });
  }

  return items;
}

function getPostFromSlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, slug, "page.mdx");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const order = getNumberField(source, "article", "order");

  return {
    title: getStringField(source, "metadata", "title") || slugToTitle(slug),
    description: getStringField(source, "metadata", "description"),
    href: `/blog/${slug}`,
    readingTime: getReadingTime(source),
    order,
    articleNumber: String(order).padStart(2, "0"),
    toc: getToc(source),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => getPostFromSlug(entry.name))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.order - a.order);
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getPostFromSlug(slug);
}