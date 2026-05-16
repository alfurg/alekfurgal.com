export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0e] px-6 py-24 max-w-3xl mx-auto">
      <p className="text-sm text-[#8f8f86] mb-6">
        SEO · content · AI · useful internet things
      </p>

      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        Notes on search, content, and meaningful web experiences
      </h1>

      <p className="text-xl text-[#c7c7bd] mb-10 leading-8">
        Essays, experiments, and lightweight tools exploring what makes websites
        clear, useful, and worth returning to.
      </p>

      <div className="flex gap-6 text-lg">
        <a href="/blog" className="text-[#b5b5aa] hover:text-[#f5f5f0] underline underline-offset-4">
          Blog
        </a>
        <a href="/tools" className="text-[#b5b5aa] hover:text-[#f5f5f0] underline underline-offset-4">
          Tools
        </a>
        <a href="/about" className="text-[#b5b5aa] hover:text-[#f5f5f0] underline underline-offset-4">
          About
        </a>
      </div>
    </main>
  );
}