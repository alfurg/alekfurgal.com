import { LogoMark } from "@/app/components/LogoMark";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        About me
      </h1>

      <div className="space-y-6 text-xl text-[#c7c7bd] mb-10 leading-8" style={{ textAlign: 'justify' }}>
        <p>
          I started in SEO at an agency, working across different clients, industries, and business goals. 
          That gave me a practical understanding of how websites gain visibility: through structure, relevance, authority, and content that matches what people are actually looking for.
        </p>
        <p>
          I then moved into SEO copywriting, where that search background became a way to write with more purpose. 
          At a software house, I wrote about web development, founder journeys, and startup culture for founders, marketers, and decision-makers trying to understand digital products and the markets around them.
        </p>
        
        <p>
          Most recently, I was a writer at Surfshark VPN, creating and improving content across cybersecurity, networking, online privacy, and digital products. 
          The work sat in a competitive SaaS category, where accuracy, clarity, trust, and product understanding mattered as much as search performance.
        </p>

        <p>
        I have an MA in American Studies, which shaped the way I think about media, communication, and audience behavior. 
        I’ve been writing my entire life, and I treat content as more than a way to rank: it should explain ideas, show value, and help people make confident decisions.
        </p>
      </div>
    </main>
  );
}