"use client";

import { useState } from "react";

type CtaUrlInputProps = {
  href: string;
  label: string;
};

export function CtaUrlInput({ href, label }: CtaUrlInputProps) {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (!url.trim()) return;
    const email = href.replace("mailto:", "");
    const subject = encodeURIComponent("Free website audit");
    const body = encodeURIComponent(`Website: ${url.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="cta-url-input-wrapper">
        <input
          type="url"
          placeholder="https://yoursite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick();
          }}
          className="cta-url-input"
        />
      </div>
      <div className="hp-cta-actions">
        <button
          onClick={handleClick}
          disabled={!url.trim()}
          className="hp-btn"
        >
          {label}
        </button>
      </div>
    </>
  );
}