const tools = [
  {
    title: "Content clarity checker",
    description:
      "A small tool for reviewing whether a page explains what it is, who it is for, and why it matters.",
    status: "Actively developed",
    href: "/tools/content-clarity-checker",
  },
  {
    title: "SEO mini-audit helper",
    description:
      "A lightweight checklist for spotting common search, structure, and content issues on a page.",
    status: "Coming soon",
    href: "/tools/seo-mini-audit-helper",
  },
  {
    title: "Internal linking prompt builder",
    description:
      "A simple assistant for turning a page topic into internal linking ideas.",
    status: "Coming soon",
    href: "/tools/internal-linking-prompt-builder",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6 text-[#f5f5f0]">
        Tools
      </h1>

      <p className="text-lg text-gray-100 mb-10">
        Small experiments for checking, explaining, and improving websites.
      </p>

      <div className="space-y-6">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.href}
            className="block border border-neutral-800 rounded-2xl p-6 bg-neutral-950 transition hover:border-[#d7ff72] hover:-translate-y-1 hover:translate-x-1 hover:bg-[#181817]"
          >
            <p className="text-sm text-[#c7c7bd] mb-2">{tool.status}</p>

            <h2 className="text-2xl font-semibold text-[#e6e6cf]">
              {tool.title}
            </h2>

            <p className="text-[#999991] mt-2 leading-7">
              {tool.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

