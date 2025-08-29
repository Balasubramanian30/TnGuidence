"use client";

import React, { useRef } from "react";
// import { useScroll } from 'framer-motion'
import Container from "@/components/constants/container";
// import AnimatedLine from '@/components/icons/animated-line-sectors'
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import SectorsGrid from "@/components/blocks/sectors-grid";
import SubTitle from "@/components/text-components/SubTitle";

const Sectors = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.sectors_section || getLanguageContent("EN").sectors_section;

  const containerRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start"],
  // })

  return (
    <Container ref={containerRef} className="relative overflow-hidden">
      {/* <AnimatedLine scrollProgress={scrollYProgress} /> */}
      <SubTitle className="font-bold mb-7">
        <span className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent">
          {content.title}
        </span>
      </SubTitle>

      <SectorsGrid content={content} />
    </Container>
  );
};

export default Sectors;
