import Image from "next/image";
import headshot from "@/app/headshot.jpg";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <section className="grid gap-10 md:grid-cols-[1fr_180px] md:items-start">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8f8f86]">
            About
          </p>

          <h1 className="text-3xl md:text-4xl leading-tight text-[#f5f5f0] text-pretty">
            I’m a content strategist and writer focused on making tech products
            easier to find, trust, and understand.
          </h1>
        </div>

        <Image
          src={headshot}
          alt="Alek Furgal"
          width={180}
          height={180}
          className="aspect-square rounded-2xl object-cover grayscale opacity-90"
          priority
        />
      </section>

      <div className="mt-16 space-y-6">
          <p>
          I started in SEO at an agency, working across different clients, industries, and business goals. 
            That gave me a practical understanding of how websites gain visibility, and of the relationship 
            between technical health, relevance, and authority.
          </p>

        
          <p>
            I then moved into SEO copywriting, where that search background became
            a way to write with more purpose. At a software house, I wrote about web
            development, founder journeys, and startup culture for founders,
            marketers, and decision-makers trying to understand digital products and
            the markets around them.
          </p>
        

          <p>
            Most recently, I worked for a major VPN brand, creating and improving
            content across cybersecurity, networking, online privacy, and digital
            products. The work sat in a competitive SaaS category, where accuracy,
            clarity, trust, and product understanding mattered as much as search
            performance.
          </p>

          <p>
            I have an MA in American Studies, which shaped the way I think about
            media, communication, culture, and audience behavior. I’ve been writing
            my entire life, and I treat content as more than a way to rank: it should
            explain ideas, show value, and help people make sense of complex topics.
          </p>
      </div>
    </main>);    
  }