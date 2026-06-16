"use client";

import { SiteSidebar } from "@/components/SiteSidebar";

const c = {
  bg:      "#1e1e1c",
  surface: "#242420",
  border:  "#2e2e2b",
  text:    "#e8e0cc",
  muted:   "#c8c0ae",
  subtle:  "#8a8476",
  faint:   "#5a5650",
  accent:  "#c9824a",
  soft: "#a0764a",
};

const f = {
  serif: "var(--font-serif, 'DM Serif Display', Georgia, serif)",
  mono:  "var(--font-mono,  'DM Mono', 'Courier New', monospace)",
  sans:  "var(--font-sans,  'DM Sans', system-ui, sans-serif)",
};

function Label({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: f.mono,
      fontSize: "9px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: c.accent,
      margin: "0 0 0.75rem 0",
    }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: c.border, margin: "1.6rem 0" }} />;
}

export default function CVPrintPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        @page { 
          size: A4; 
          margin: 0; 
        }
        @media print {
          body { margin: 0; padding: 0; }
          .cv-screen-chrome { display: none !important; }
          .cv-page-outer { 
            background: none !important; 
            padding: 0 !important; 
            margin: 0 !important;
          }
          .cv-sheet {
            box-shadow: none !important;
            border: none !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: unset !important;
            page-break-after: avoid;
            
          }
        }
        .cv-sheet ul li::marker {
          color: #a0764a;
        }
      `}</style>

      {/* Screen chrome */}
      <div className="cv-screen-chrome" style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: c.bg,
        borderBottom: `1px solid ${c.border}`,
        padding: "0.75rem clamp(1.25rem, 5vw, 6rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}>
        <SiteSidebar />
        <button
          onClick={() => window.print()}
          style={{
            fontFamily: f.mono,
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: c.bg,
            background: c.accent,
            border: "none",
            padding: "0.5rem 1.1rem",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Save PDF
        </button>
      </div>

      {/* Page outer */}
      <div className="cv-page-outer" style={{
        background: c.bg,
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>

        {/* Paper card — A4 size */}
        <div className="cv-sheet" style={{
          background: c.surface,
          border: `1px solid ${c.border}`,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          width: "210mm",
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          fontFamily: f.sans,
          fontSize: "13px",
          lineHeight: 1.7,
          color: c.text,
          fontWeight: 400,
          overflow: "hidden",
          position: "relative",
          padding:"2rem",
        }}>

          {/* ── Content wrapper (scrollable in preview, fixed in print) ── */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem"
          }}>

            {/* ── Header ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              gap: "2rem",
              padding: "1.6rem 1.8rem",
              borderBottom: `1px solid ${c.border}`,
              flexShrink: 0,
            }}>

              {/* Headshot */}
              <div style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `1px solid ${c.border}`,
                flexShrink: 0,
              }}>
                <img
                  src="/headshot.jpg"
                  alt="Alek Furgal"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "0.11rem 0.55rem",
                    transform: "scale(1.2)",
                  }}
                />
              </div>

              {/* Name / role / contact */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.4rem" }}>
                <h1 style={{
                  fontFamily: f.serif,
                  fontSize: "32px",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: c.text,
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  Alek Furgal
                </h1>
                <p style={{
                  fontFamily: f.mono,
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.soft,
                  margin: 0,
                }}>
                  SEO Content Strategist & Writer
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.15rem 1rem",
                  marginTop: "0.5rem",
                  fontFamily: f.mono,
                  fontSize: "9px",
                  color: c.muted,
                  letterSpacing: "0.02em",
                  lineHeight: 1.5,
                }}>
                  <span>alekfurgal.com</span>
                  <span>aleksanderfurgal@gmail.com</span>
                  <span>linkedin.com/in/alek-furgal</span>
                  <span>+48 607 716 066</span>
                </div>
              </div>
            </div>

            {/* ── Two-column body ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "1.8rem",
              flex: 1,
              padding: "1.8rem 1.8rem",
              minHeight: 0,
            }}>

              {/* LEFT COLUMN */}
              <div style={{ minHeight: 0 }}>

                <Label>Profile</Label>
                <p style={{ 
                  margin: "0 0 1rem 0", 
                  fontSize: "12px", 
                  lineHeight: 1.75, 
                  color: c.muted, 
                  fontWeight: 300 
                }}>
                  SEO content strategist and writer for SaaS and technical businesses, turning underperforming content into systems that rank, convert, and earn citations.
                </p>

                <Divider />

                <Label>Experience</Label>

                {[
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
                ].map((job, i) => (
                  <div key={job.company} style={{ marginBottom: i < 2 ? "1.1rem" : 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <div>
                        <div style={{ fontFamily: f.serif, fontSize: "12.5px", color: c.text, fontWeight: 400 }}>
                          {job.company}
                        </div>
                        <div style={{ fontSize: "11px", color: c.subtle, fontWeight: 400, fontStyle: "italic", marginTop: "0.15rem" }}>
                          {job.role}
                        </div>
                      </div>
                      <span style={{ fontFamily: f.mono, fontSize: "9px", color: c.subtle, flexShrink: 0, marginTop: "0.1rem", whiteSpace: "nowrap" }}>
                        {job.dates}
                      </span>
                    </div>
                    <ul style={{ margin: "0.45rem 0 0 1rem", padding: 0, fontSize: "11.5px", lineHeight: 1.65, color: c.muted, fontWeight: 300 }}>
                      {job.bullets.map((b) => (
                        <li key={b} style={{ marginBottom: "0.2rem" }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div style={{ minHeight: 0 }}>

                <Label>Skills</Label>
                <ul style={{ margin: "0 0 0 1rem", padding: 0, fontSize: "11.5px", lineHeight: 1.8, color: c.muted, fontWeight: 300 }}>
                  <li>Editorial & copywriting</li>
                  <li>SEO — on-page, technical, content</li>
                  <li>Content strategy & audits</li>
                  <li>Generative engine optimization (GEO / AI search)</li>
                  <li>Conversion-focused copy</li>
                  <li>Ahrefs, GSC, GA4, Screaming Frog</li>
                  <li>WordPress/CMS</li>
                </ul>

                <Divider />

                <Label>Portfolio</Label>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "11px", color: c.muted, lineHeight: 1.6 }}>
                  Full portfolio + rationale:{" "}
                  <a
                    href="https://alekfurgal.com/portfolio"
                    style={{ color: c.text, textDecoration: "underline", textDecorationColor: c.accent }}
                  >
                    alekfurgal.com/portfolio
                  </a>
                </p>

                <Divider />

                <Label>Education</Label>
                <div>
                  <div style={{ fontFamily: f.serif, fontSize: "12.5px", color: c.text, fontWeight: 400 }}>University of Warsaw</div>
                  <div style={{ fontSize: "11.5px", color: c.muted, fontWeight: 300, marginTop: "0.15rem" }}>MA, American Studies</div>
                  <div style={{ fontFamily: f.mono, fontSize: "9px", color: c.subtle, marginTop: "0.2rem" }}>2014 – 2019</div>
                </div>

                <Divider />

                <Label>Earlier Experience</Label>
                <div style={{ fontSize: "11.5px", lineHeight: 1.8, color: c.muted, fontWeight: 300 }}>
                  {[
                    { org: "Papaya.Rocks", role: "Translator / Editor / Writer" },
                    { org: "Ministry of Development", role: "Administrator" },
                    { org: "Mustache.pl", role: "Customer Service Team Lead" },
                  ].map((item) => (
                    <div key={item.org} style={{ marginBottom: "0.2rem" }}>
                      <span style={{ color: c.text }}>{item.org}</span>
                      {" — "}{item.role}
                    </div>
                  ))}
                </div>

                <Divider />

                <Label>Languages</Label>
                {[
                  { lang: "English", level: "C2" },
                  { lang: "Polish",  level: "Native" },
                ].map((item) => (
                  <div key={item.lang} style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: c.muted, fontWeight: 300, marginBottom: "0.3rem" }}>
                    <span>{item.lang}</span>
                    <span style={{ fontFamily: f.mono, fontSize: "9px", color: c.subtle }}>{item.level}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}