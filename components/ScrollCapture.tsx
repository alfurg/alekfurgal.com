"use client";

import { useEffect } from "react";

export function ScrollCapture() {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1200) return;

      const content = document.querySelector<HTMLElement>(".split__content");
      if (!content) return;
      if (content.contains(e.target as Node)) return;

      e.preventDefault();
      content.scrollTop += e.deltaY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return null;
}
