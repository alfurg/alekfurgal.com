import Image from "next/image";
import SplitPageLayout from "@/components/SplitPageLayout";

export default function AboutPage() {
  return (
    <SplitPageLayout
      left={
  <div>
    <p className="mb-6 text-[1.1rem] leading-6 text-[var(--color-subtle)] [font-variant-caps:all-small-caps]">
      About
    </p>

    <div className="mb-10 w-full overflow-hidden rounded-[1.5rem] bg-[var(--color-surface)] p-1 ring-1 ring-[var(--color-accent)]">
      <Image
        src="/headshot.jpg"
        alt="Alek Furgal"
        width={940}
        height={626}
        priority
        className="aspect-[3/2] w-full rounded-[1.2rem] object-cover object-center"
      />
    </div>

    <div className="max-w-sm">
      <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-[2.65rem]">
        I write and think about content, search, and how websites explain
        themselves.
      </h1>

      <p className="text-lg leading-8 text-[var(--color-muted)]">
        My work sits between SEO, content strategy, brand clarity, and the
        practical structure of websites.
      </p>
    </div>
  </div>
}
    >
      <article
        className="
          max-w-2xl text-xl leading-8 text-[var(--color-muted)]

          [&_p]:mb-6

          [&_h2]:mt-12
          [&_h2]:mb-4
          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:tracking-tight
          [&_h2]:text-[var(--color-text)]

          [&_a]:text-[var(--color-text)]
          [&_a]:underline
          [&_a]:decoration-[var(--color-link-underline)]
          [&_a]:underline-offset-4
          [&_a]:transition-colors
          [&_a:hover]:decoration-[var(--color-link-underline-hover)]
        "
      >
          <p>
            I learned SEO in a fast-paced agency setting, working across different clients, industries, and business goals.
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
            media, communication, and audience behavior. 
            I believe good content does more than just rank — it helps a website explain who it helps, 
            why it should be trusted, and what makes it worth choosing.
          </p>
      </article>
    </SplitPageLayout>
  );
}
