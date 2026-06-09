"use client";

import { useState } from "react";

export function AuditCTA() {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (!url.trim()) return;

    const subject = encodeURIComponent("Free website audit");
    const body = encodeURIComponent(`Website: ${url.trim()}`);
    const mailtoLink = `mailto:aleksanderfurgal@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="split-left__cta">
      <h2 className="split-left__cta-heading">Free content audit</h2>
      <p className="split-left__cta-body">
        Send me your website URL and I'll give you a prioritized audit of what to fix first.
      </p>
      <div className="audit-cta-input-group">
        <input
          type="url"
          placeholder="https://yoursite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick();
          }}
          className="audit-cta-input"
        />
        <button
          onClick={handleClick}
          disabled={!url.trim()}
          className="hp-btn audit-cta-button"
        >
          Send audit request
        </button>
      </div>
    </div>
  );
}