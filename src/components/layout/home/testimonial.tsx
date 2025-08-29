/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/constants/container";
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionTitle from "../block/section-title";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = matchMedia(query);
    setMatches(m.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function Testimonials() {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.testimonial_section ||
    getLanguageContent("EN").testimonial_section;

  const isMobile = useMediaQuery("(max-width: 639px)");
  const cardsPerView = isMobile ? 1 : 3;

  const [index, setIndex] = useState(0);
  const gap = 16; // px

  // Measure viewport to compute accurate step including gap
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportW, setViewportW] = useState(0);

  useEffect(() => {
    if (!viewportRef.current) return;
    const el = viewportRef.current;

    const update = () => setViewportW(el.clientWidth);
    update(); // initial

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Max index and clamp when layout/content changes
  const maxIndex = Math.max(0, content.testimonials.length - cardsPerView);
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  // Card width is (100% - totalGap) / cardsPerView
  const cardWidth = `calc((100% - ${
    (cardsPerView - 1) * gap
  }px) / ${cardsPerView})`;

  // Convert the fixed px gap to a percentage of the viewport width.
  // When viewportW=0 (before measurement), fall back to just 100/cardsPerView.
  const gapPct = viewportW > 0 ? (7 / viewportW) * 100 : 0;
  const stepPct = 100 / cardsPerView + gapPct; // one card + one gap
  const translateX = -(index * stepPct); // pure %, no px mixing

  return (
    <Container className="w-full overflow-hidden bg-gradient-to-b from-[#602DFB]/0 to-[#3A1F75]/5 py-12 relative">
      <Image
        src={"/icons/annual-shape.svg"}
        alt={"Decoration"}
        width={500}
        height={500}
        className="w-64 h-64 absolute -bottom-24 -right-20"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-8 px-4">
        <SectionTitle title={content.title} className="max-w-3xl" />
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="p-3 flex items-center justify-center rounded-full border border-[#3A1F75] text-[#3A1F75]"
            aria-label="Previous"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-3 flex items-center justify-center rounded-full border border-[#3A1F75] text-[#3A1F75]"
            aria-label="Next"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div ref={viewportRef} className="mx-auto overflow-hidden px-4">
        <motion.div
          className="flex"
          // IMPORTANT: Pure percentage translation to avoid cumulative drift.
          animate={{ x: `${translateX}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{ gap }} // actual physical gap between cards
        >
          {content.testimonials.map((t: any, i: number) => (
            <div
              key={i}
              className="bg-white border border-[#3A1F75]/70 rounded-xl p-6 flex-shrink-0 h-fit"
              style={{ width: cardWidth }}
            >
              <p className="mb-4 text-[#3A1F75]">{t.description}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  width={40}
                  height={40}
                  alt={t.name}
                  quality={100}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#3A1F75]">{t.name}</p>
                  <p className="text-sm text-[#3A1F75]/70">{t.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
