'use client';

import { useState } from 'react';
import { CtaUrlInput } from './CtaUrlInput';

export function CtaAuditDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="cta-audit-drawer-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Get a free audit"
      >
        <span className="cta-audit-drawer-btn__text">
          Get a <em>free</em> audit
        </span>
      </button>

      {isOpen && (
        <div className="cta-audit-drawer">
          <div className="cta-audit-drawer__overlay" onClick={() => setIsOpen(false)} />
          <div className="cta-audit-drawer__panel">
            <button
              className="cta-audit-drawer__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close audit drawer"
            >
              ✕
            </button>

            <h2 className="cta-audit-drawer__heading">
              Get a <em>free</em> content audit
            </h2>
            <p className="cta-audit-drawer__sub">
              Send me a link to your website and I'll reply with a prioritized audit of your content library.
            </p>

            <CtaUrlInput
              href="mailto:aleksanderfurgal@gmail.com"
              label="Get in touch"
            />
          </div>
        </div>
      )}
    </>
  );
}
