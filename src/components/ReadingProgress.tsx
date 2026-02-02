"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector("article");
      if (!article) return;
      
      const rect = article.getBoundingClientRect();
      const articleHeight = article.scrollHeight;
      const scrolled = -rect.top;
      const windowHeight = window.innerHeight;
      
      const percent = Math.min(
        Math.max((scrolled / (articleHeight - windowHeight)) * 100, 0),
        100
      );
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[var(--color-cream-dark)]">
      <div
        className="h-full bg-[var(--color-warm)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
