export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0e] px-6 py-24 max-w-3xl mx-auto">
      <p className="text-sm text-[#8f8f86] mb-6">
        SEO · content · useful internet things
      </p>

      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        Hi! I&apos;m Alek.
      </h1>
      
      <div className="space-y-6 text-xl text-[#c7c7bd] mb-10 leading-8">
        <p>
          I made this website to share my writing and document what I’m learning about search, content, and building things for the web.
        </p>
        <p>
          It&apos;s part portfolio, part proof of concept, and part personal project — a small space for work, ideas, and experiments in progress.
        </p>

        <p>If any of it resonates with you, feel free to contact me{" "}  
          <a href="mailto:aleksanderfurgal@gmail.com"
          className="underline underline-offset-4 hover:text-white">
          by email
          </a>
          .
        </p>
      </div>
    </main>
  );
}