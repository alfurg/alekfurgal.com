import type { ReactNode } from "react";

type SplitPageLayoutProps = {
  left: ReactNode;
  children: ReactNode;
};

export default function SplitPageLayout({
  left,
  children,
}: SplitPageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-[1380px] px-[clamp(1.5rem,4vw,3rem)]">
      <div className="grid gap-12 py-12 sm:py-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-10 lg:py-0 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[470px_minmax(0,820px)] 2xl:gap-20">
        <aside className="lg:py-14 xl:py-16">{left}</aside>

        <section className="lg:min-h-0 lg:py-14 xl:py-16">
          {children}
        </section>
      </div>
    </main>
  );
}