"use client";

import { useState, useId } from "react";

type CtaUrlInputProps = {
  href: string;
  label: string;
};

export function CtaUrlInput({ href, label }: CtaUrlInputProps) {
  const [url, setUrl] = useState("");
  const inputId = useId();
  
  const email = href.startsWith("mailto:") ? href.slice(7) : href;
  const subject = url.trim() 
    ? encodeURIComponent(`Free content audit: ${url}`)
    : encodeURIComponent("Free content audit");
  const mailtoUrl = `mailto:${email}?subject=${subject}`;

  return (
    <>
      <div className="cta-url-input-wrapper">
        <input
          id={inputId}
          name="audit-url"
          type="text"
          placeholder="https://yoursite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="cta-url-input"
          autoComplete="url"
        />
      </div>
      <div className="hp-cta-actions">
        <a
          href={mailtoUrl}
          className="hp-btn"
          style={{ width: "100%", display: "block", textAlign: "center" }}
        >
          {label}
        </a>
      </div>
    </>
  );
}