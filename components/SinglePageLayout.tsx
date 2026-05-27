import type { ReactNode } from "react";

type SinglePageLayoutProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function SinglePageLayout({
  eyebrow,
  title,
  children,
}: SinglePageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-3xl px-[clamp(1.5rem,4vw,3rem)] py-16 sm:py-20 lg:py-24">
      {eyebrow && (
        <div className="mb-6 flex items-center gap-3">
          <p className="text-[1.1rem] leading-6 text-[var(--color-subtle)] [font-variant-caps:all-small-caps]">
            {eyebrow}
          </p>

          <span
            aria-hidden="true"
            className="mt-[0.15em] h-[1.05em] w-[0.42em] bg-[var(--color-accent)]"
          />
        </div>
      )}

      <h1 className="mb-8 text-[clamp(2.75rem,7vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
        {title}
      </h1>

      <div
        className="
          mb-10 space-y-6 text-lg leading-8 text-[var(--color-muted)] sm:text-xl

          [&_a]:text-[var(--color-text)]
          [&_a]:underline
          [&_a]:decoration-[var(--color-link-underline)]
          [&_a]:underline-offset-4
          [&_a]:transition-colors
          [&_a:hover]:decoration-[var(--color-link-underline-hover)]
        "
      >
        {children}
      </div>
    </main>
  );
}