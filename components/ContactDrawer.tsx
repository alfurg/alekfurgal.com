'use client';

import { useState } from 'react';
import { HighlightText } from './HighlightText';

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="contact-drawer-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open contact drawer"
      >
        <span className="contact-drawer-btn__text"><em>Contact</em> me</span>
      </button>

      {isOpen && (
        <div className="contact-drawer">
          <div className="contact-drawer__overlay" onClick={() => setIsOpen(false)} />
          <div className="contact-drawer__panel">
            <button
              className="contact-drawer__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact drawer"
            >
              ✕
            </button>

            <div className="contact-drawer__eyebrow">Contact</div>
            <h2 className="contact-drawer__heading">Let's work together</h2>
            <p className="contact-drawer__sub">
              Tell me about your content and strategy goals.
            </p>

            <div className="contact-drawer__links">
              <a
                href="mailto:aleksanderfurgal@gmail.com"
                className="contact-drawer__link"
              >
                <span className="contact-drawer__link-label">Email</span>
                <span className="contact-drawer__link-value">aleksanderfurgal@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alek-furgal/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-drawer__link"
              >
                <span className="contact-drawer__link-label">LinkedIn</span>
                <span className="contact-drawer__link-value">/alek-furgal</span>
              </a>
            </div>

            <div className="contact-drawer__availability">
              Available for new projects · EEA · 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
