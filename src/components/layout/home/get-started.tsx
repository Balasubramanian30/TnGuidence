/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/constants/container";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import FloatingCard from "@/components/blocks/FloatingCard";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import { getLanguageContent } from "@/i18n";
import Image from "next/image";
import SectionTitle from "../block/section-title";
import BigBody from "@/components/text-components/big-body";

const GetStarted = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.get_started_section ||
    getLanguageContent("EN").get_started_section;

  return (
    <Container ref={containerRef} className="relative overflow-hidden">
      {/* Floating Cube */}
      <motion.div
        className="absolute -top-20 -right-20"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src={"/icons/top-ranking-shape.svg"}
          alt={"Decoration"}
          width={500}
          height={500}
          className="w-80 h-80"
        />
      </motion.div>

      {/* Floating Sphere - opposite rhythm */}
      <motion.div
        className="absolute -top-36 -left-20"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src={"/icons/patents-shape.svg"}
          alt={"Decoration"}
          width={500}
          height={500}
          className="w-80 h-80"
        />
      </motion.div>

      <SectionTitle title={content.title} center />
      <BigBody className="text-[#3A1F75] mt-4 max-w-lg text-center mx-auto">
        {content.subtitle}
      </BigBody>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-16">
        {content.cards.map((item: any, idx: number) => (
          <FloatingCard
            key={idx}
            item={item}
            idx={idx}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </Container>
  );
};

export default GetStarted;
