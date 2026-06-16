"use client";

import { useState, useId } from "react";

type TocItem = {
  title: string;
  href: string;
  depth?: 2 | 3;
};

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  toc: TocItem[];
};

export function ArticleTableOfContentsButton({
  eyebrow,
  heading,
  subheading,
  toc,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = useId();

  if (!toc || toc.length === 0) return null;

  return (
    <>
      <button
        className="article-toc-button"
        aria-label="Table of contents"
        aria-expanded={isOpen}
        aria-controls={modalId}
        onPointerDown={() => setIsOpen(true)}
      >
        <span className="article-toc-button__icon">Table of contents</span>
      </button>

      {isOpen && (
        <div
          className="article-toc-modal"
          id={modalId}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="article-toc-modal__overlay"
            onClick={() => setIsOpen(false)}
          />
          <div className="article-toc-modal__panel">
            <button
              className="article-toc-modal__close"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <div className="article-toc-modal__header">
              {eyebrow && (
                <p className="article-toc-modal__eyebrow">{eyebrow}</p>
              )}
              <h2 className="article-toc-modal__heading">{heading}</h2>
              {subheading && (
                <p className="article-toc-modal__subheading">{subheading}</p>
              )}
            </div>

            <nav className="article-toc-modal__toc">
              <p className="article-toc-modal__toc-label">In this article</p>
              <ul className="article-toc-modal__list">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                       href={item.href}
  className={`article-toc-modal__link${
    item.depth === 3
      ? " article-toc-modal__link--nested"
      : ""
  }`}
  onClick={() => setIsOpen(false)}
>
  <span aria-hidden="true" className="article-left__toc-dot" />
  <span>{item.title}</span>
</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}