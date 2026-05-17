import { LogoMark } from "@/app/components/LogoMark";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        About
      </h1>

      <div className="space-y-6 text-xl text-[#c7c7bd] mb-10 leading-8">
        <p>
          I’m a content and SEO person interested in how websites explain
          things, earn attention, and help people understand what they’re
          looking at. 
        </p>

        <p>
          This site is where I write about search, content, AI, and meaningful
          web experiences — and where I build small tools to explore those ideas
          in practice.
          
        </p>

        <p>
          My work sits somewhere between editorial strategy, SEO, product
          thinking, and lightweight web experiments.
        </p>

        <p>
          Right now, I’m especially interested in why good content doesn’t always
          perform, how AI changes search behavior, and what makes websites feel
          clear, useful, and worth trusting.
        </p>
      </div>
    </main>
  );
}