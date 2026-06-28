'use client';

import { useState } from 'react';
import { CopyEmailButton } from './CopyEmailButton';

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="contact-drawer-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open contact drawer"
      >
        <span className="contact-drawer-btn__text">Contact</span>
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

            <p className="hp-label contact-drawer__eyebrow">Contact</p>

            <div className="contact-drawer__links">
              <div className="contact-drawer__email-row">
                <a
                  href="mailto:hello@alekfurgal.com"
                  className="contact-drawer__link contact-drawer__link--primary"
                >
                  hello@alekfurgal.com
                </a>
                <CopyEmailButton email="hello@alekfurgal.com" />
              </div>
              <a
                href="https://www.linkedin.com/in/alek-furgal/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-drawer__link contact-drawer__link--secondary"
              >
                /in/alek-furgal
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