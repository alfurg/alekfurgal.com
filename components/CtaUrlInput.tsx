"use client";

import { useState } from "react";

type CtaUrlInputProps = {
  href: string;
  label: string;
};

export function CtaUrlInput({ href, label }: CtaUrlInputProps) {
  const [url, setUrl] = useState("");
  const isValid = url.trim().length > 0;

  const handleClick = () => {
    if (!isValid) return;

    const email = href.replace("mailto:", "");
    const subject = encodeURIComponent("Free website audit");
    const body = encodeURIComponent(`Website: ${url.trim()}`);
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    // Force mailto to open
    const link = document.createElement("a");
    link.href = mailtoUrl;
    link.click();
  };

  return (
    <>
      <div className="cta-url-input-wrapper">
        <input
          type="url"
          placeholder="https://yoursite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="cta-url-input"
        />
      </div>
      <div className="hp-cta-actions">
        <button
          onClick={handleClick}
          disabled={!isValid}
          className="hp-btn"
          type="button"
          style={{
            width: "100%",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
}