"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Work, WORKS } from "@/data";

const CATEGORIES = [
  { id: "all", label: "Все" },
  { id: "kitchen", label: "Кухни" },
  { id: "wardrobe", label: "Шкафы" },
  { id: "other", label: "Другое" },
] as const;

export default function Catalog() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const filteredWorks =
    filter === "all"
      ? WORKS
      : WORKS.filter((w) => w.category === filter);

  const openLightbox = useCallback((work: Work) => {
    setLightbox(work);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="catalog" className="py-20 px-4 bg-accent-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-wood-dark">Наши работы</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.id
                  ? "bg-wood text-white"
                  : "bg-cream text-warm-gray hover:text-wood-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredWorks.map((work) => (
            <button
              key={work.id}
              onClick={() => openLightbox(work)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="skeleton absolute inset-0" />
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
