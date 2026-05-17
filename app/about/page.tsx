import Image from "next/image";
import headshot from "@/app/headshot.jpg";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <section>
        <p className="mb-6 text-sm uppercase tracking-[0.18em] text-[#8f8f86]">
          SEO CONTENT STRATEGIST & WRITER
        </p>

        <div className="grid gap-8 md:grid-cols-[1fr_180px] md:items-center">
          <h1 className="text-3xl md:text-4xl leading-tight text-[#f5f5f0] text-pretty">
            I make tech products easier&nbsp;to find, trust, and&nbsp;understand.
          </h1>

          <div className="justify-self-center md:justify-self-end">
            <Image
              src={headshot}
              alt="Alek Furgal"
              width={180}
              height={180}
              className="h-32 w-32 md:h-[180px] md:w-[180px] rounded-2xl object-cover grayscale opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      <div className="text-lg text-gray-100 mt-12 space-y-6">
          <p>
            I learned SEO in a fast-paced agency environment, working across different clients, industries, and business goals.
            That gave me a practical and thorough understanding of how to measure and improve website search visibility, and how 
            technical health, relevance, and authority interact with each other.
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