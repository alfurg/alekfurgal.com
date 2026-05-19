export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0e] px-6 py-24 max-w-3xl mx-auto">
      <p className="text-sm text-[#8f8f86] mb-6 text-[1.1rem] [font-variant-caps:all-small-caps]" >
        SEO · content strategy · brand clarity
      </p>

      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        Better websites start with better content.
      </h1>
      
      <div className="space-y-6 text-xl text-[#c7c7bd] mb-10 leading-8">
        <p>
          Content is how a website explains itself: what it offers, who it helps, and why it should be 
          trusted. 
        </p>
        <p>
         This space is where I share my writing and document what I’m learning as I think through problems, 
         test ideas, and work out how parts of the web fit together.
        </p>

        <p>If any of it resonates with you, please {" "}  
          <a href="mailto:aleksanderfurgal@gmail.com"
          className="underline underline-offset-4 hover:text-white">
          reach out to me by email
          </a>
          .
        </p>
      </div>
    </main>
  );
}