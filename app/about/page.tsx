import { LogoMark } from "@/app/components/LogoMark";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8 text-[#f5f5f0]">
        About me
      </h1>

      <div className="space-y-6 text-xl text-[#c7c7bd] mb-10 leading-8" style={{ textAlign: 'justify' }}>
        <p>
          I came into SEO through an agency, where I learned how search works across different clients, industries, and business goals. 
          That experience gave me a&nbsp;practical foundation in on-site and off-site SEO, content strategy, website structure, and the relationship between technical health, relevance, and visibility.
        </p>
        
        <p>
          From there, I moved into SEO copywriting, drawn to the role content plays in connecting audience needs, search visibility, and business communication.
        </p>
        
        <p>
          At a software house, I wrote about web development, founder journeys, and startup culture, adapting technical subjects for business audiences: 
          founders, marketers, and decision-makers trying to understand the landscape they operate in and the value behind the products they can build.
        </p>

        <p>
Most recently, I worked for a major VPN brand, creating and improving SEO content across cybersecurity, networking, online privacy, and digital products. 
In a competitive SaaS category, that meant thinking beyond rankings: about accuracy, trust, product clarity, and how content can help people feel confident about making 
technical decisions.
        </p>

        <p>
        I have an MA in American Studies, which shaped the way I think about media, communication, and audience behavior. 
        I’ve been writing my entire life, which is why I treat content not only as a way to rank, but as a way to explain, demonstrate, and create meaning.
        </p>
      </div>
    </main>
  );
}