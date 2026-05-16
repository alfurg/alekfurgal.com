const posts = [
  {
    title: "Why good content still doesn’t rank",
    description:
      "A working essay on the technical and structural reasons strong content can still fail in search.",
    status: "Draft",
    href: "/blog/why-good-content-still-doesnt-rank",
    image: "Technical SEO",
  },
  {
    title: "What good web experiences actually do",
    description:
      "Notes on clarity, structure, usefulness, and why websites should help people understand things faster.",
    status: "Planned",
    href: "/blog/what-good-web-experiences-do",
    image: "Web experience",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6 text-[#f5f5f0]">
        Blog
      </h1>

      <p className="text-lg text-gray-100 mb-10">
        Essays and notes on SEO, content, AI, and meaningful web experiences.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="block overflow-hidden border border-neutral-800 rounded-2xl bg-neutral-950 transition hover:border-[#d7ff72] hover:-translate-y-1 hover:translate-x-1 hover:bg-[#181817]"
          >
            <div className="aspect-[16/9] bg-[#181817] border-b border-neutral-800 flex items-center justify-center">
              <p className="text-sm text-[#999991]">{post.image}</p>
            </div>

            <div className="p-6">
              <p className="text-sm text-[#c7c7bd] mb-2">{post.status}</p>

              <h2 className="text-2xl font-semibold text-[#e6e6cf]">
                {post.title}
              </h2>

              <p className="text-[#999991] mt-2 leading-7">
                {post.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}