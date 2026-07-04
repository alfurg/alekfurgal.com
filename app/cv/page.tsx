"use client";

import { SiteSidebar } from "@/components/SiteSidebar";

const jobs = [
  {
    company: "Surfshark",
    role: "SEO Copywriter",
    dates: "June 2024 – May 2026",
    bullets: [
      "Shaped tone of voice across cybersecurity, networking, and privacy content.",
      "Wrote research-heavy SEO articles blending source synthesis with product comms.",
      "Led content around major feature launches.",
      "Developed conversion-focused copy for key product and landing pages, social channels, and YouTube.",
      "Collaborated across editorial, product, design, legal, and reputation teams.",
    ],
  },
  {
    company: "Asper Brothers",
    role: "Content Specialist",
    dates: "Feb 2023 – June 2024",
    bullets: [
      "Developed SEO content for software developers and startup founders.",
      "Refined site messaging and positioning; managed WordPress publishing and on-page SEO.",
    ],
  },
  {
    company: "Greyotters",
    role: "SEO Specialist",
    dates: "Nov 2021 – Feb 2023",
    bullets: [
      "Built SEO and content strategies across multiple client sites and industries.",
    ],
  },
];


const skillGroups = [
  {
    label: "Strategy",
    items: ["content system design", "search intent & funnel mapping", "brand voice development", "editorial direction"],
  },
  {
    label: "Search",
    items: ["SERP & content gap analysis", "clustering & topical authority building", "link equity distribution"],
  },
  {
    label: "Craft",
    items: ["technical & long-form writing", "conversion & lead-gen copy", "product comms", "short-form video scripts"],
  },
];

const technicalSkills = ["Ahrefs", "GSC", "GA4", "Screaming Frog", "WordPress", "HubSpot"];


const earlierExperience = [
  { org: "Ministry of Development", role: "Administrator", dates: "2020 – 2021" },
  { org: "Papaya.Rocks", role: "Translator / Editor / Writer", dates: "2019 – 2021" },
  { org: "Mustache.pl", role: "Customer Service Team Lead", dates: "2015 – 2017" },
];

const languages = [
  { lang: "Polish", level: "Native" },
  { lang: "English", level: "Bilingual proficiency" },
];

export default function CVPrintPage() {
  return (
    <>
      <div className="cv-screen-chrome">
        <SiteSidebar />
        <button className="cv-print-btn" onClick={() => window.print()}>
          Save PDF
        </button>
      </div>

      <div className="cv-page-outer">
        <div className="cv-sheet">
          <div className="cv-sheet__inner">
            {/* Header */}
            <div className="cv-header">
              <div className="cv-headshot">
                <img src="/headshot.jpg" alt="Alek Furgal" />
              </div>

              <div className="cv-header-info">
                <h1 className="cv-name">Alek Furgal</h1>
                <p className="cv-title">SEO Content Strategist &amp; Writer</p>
                <div className="cv-contact">
  <a href="https://alekfurgal.com/portfolio" className="cv-contact-link cv-contact-link--accent">
    alekfurgal.com/portfolio
  </a>
  <span className="cv-contact-sep">·</span>
  <a href="mailto:hello@alekfurgal.com" className="cv-contact-link">
    hello@alekfurgal.com
  </a>
  <span className="cv-contact-sep">·</span>
  <span>+48 607 716 066</span>
</div>
              </div>
            </div>

            {/* Two-column body */}
            <div className="cv-body">
              {/* LEFT COLUMN */}
              <div className="cv-col">
                <p className="cv-section-label">Experience</p>

                {jobs.map((job) => (
                  <div key={job.company} className="cv-job">
                    <div className="cv-job-header">
                      <div>
                        <div className="cv-job-company">{job.company}</div>
                        <div className="cv-job-role">{job.role}</div>
                      </div>
                      <span className="cv-job-date">{job.dates}</span>
                    </div>
                    <ul className="cv-job-list">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}



              </div>

              {/* RIGHT COLUMN */}
              <div className="cv-col">
<p className="cv-section-label">Skills</p>
<p className="cv-skill-line cv-skill-line--flat">
  long-form SEO content
  <span className="cv-skill-sep">·</span>
  product &amp; conversion copy
  <span className="cv-skill-sep">·</span>
 AI search optimization
  <span className="cv-skill-sep">·</span>
  editorial direction

  <span className="cv-skill-sep">·</span>
  content planning &amp; system design
</p>
<div className="cv-divider" />

<p className="cv-section-label">Tools</p>
<p className="cv-skill-line cv-skill-line--flat">
  {technicalSkills.join(", ")}
</p>

                <div className="cv-divider" />

                <p className="cv-section-label">Languages</p>
                {languages.map((item) => (
                  <div key={item.lang} className="cv-lang-row">
                    <span>{item.lang}</span>
                    <span className="cv-lang-level">{item.level}</span>
                  </div>
                ))}

                                <div className="cv-divider" />

<p className="cv-section-label">Education</p>
<p className="cv-edu-line">
  <span className="cv-edu-school-inline">University of Warsaw</span> <span className="cv-skill-sep">·</span>
 {" "}
  <span className="cv-edu-degree-inline">MA, American Studies</span>{" "}
</p>
  <span className="cv-edu-year-inline">2014 – 2019</span>
  <div className="cv-divider cv-divider" />

<p className="cv-section-label">Earlier Experience</p>
<div>
  {earlierExperience.map((item) => (
    <div key={item.org} className="cv-earlier-row">
      <div className="cv-earlier-row__top">
        <span className="cv-earlier-org">{item.org}</span>                  <span className="cv-skill-sep">·</span>
{" "}
        <span className="cv-earlier-role">{item.role}</span>
      </div>
      <span className="cv-earlier-date">{item.dates}</span>
    </div>
  ))}
</div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}