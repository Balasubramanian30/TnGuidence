"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/constants/container";
import TitleLG from "@/components/text-components/TitleLG";
import AnimatedLine from "@/components/icons/animated-line";
import Body from "@/components/text-components/Body";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import { useAtom } from "jotai";
import CaptionLG from "@/components/text-components/CaptionLG";
import PrimaryButton from "@/components/constants/primary-button";
import OutlineButton from "@/components/constants/outline-button";

const Innovation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const investX = useTransform(scrollYProgress, [0, 1], ["-63%", "0%"]);
  const createX = useTransform(scrollYProgress, [0, 1], ["38%", "-40%"]);

  const [selectedLang] = useAtom(selectedLanguageAtom);
  const content = getLanguageContent(selectedLang).innovation_section;

  return (
    <Container
      ref={ref}
      className="flex flex-col justify-center relative overflow-hidden"
    >
      <div className="-z-50">
        <AnimatedLine scrollProgress={scrollYProgress} />
      </div>

      {/* Invest */}
      <motion.div style={{ x: investX }} className="w-full mx-auto md:mx-0">
        <TitleLG className="w-full -my-16">
          <svg
            viewBox="0 0 800 150"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="invest-gradient"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#7472e3" />
                <stop offset="80%" stopColor="#da75bd" />
                <stop offset="100%" stopColor="#da75bd" />
              </linearGradient>
            </defs>
            <text
              x="50%" /* Centered text */
              y="100"
              textAnchor="middle"
              fontSize="80"
              fontFamily="var(--font-poppins)"
              fill="transparent"
              stroke="url(#invest-gradient)"
              strokeWidth="1.5"
            >
              {content.invest}
            </text>
          </svg>
        </TitleLG>
      </motion.div>

      {/* Innovate */}
      <div className="w-full text-center">
        <TitleLG className="bg-gradient-to-t from-[#7472e3] to-[#da75bd] bg-clip-text text-transparent inline-block">
          {content.innovate}
        </TitleLG>
      </div>

      {/* Create */}
      <motion.div style={{ x: createX }} className="w-full">
        <TitleLG className="w-full text-right -my-16">
          <svg
            viewBox="0 0 800 150"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient-stroke"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#7472e3" />
                <stop offset="80%" stopColor="#da75bd" />
                <stop offset="100%" stopColor="#da75bd" />
              </linearGradient>
            </defs>
            <text
              x="100%"
              y="100"
              textAnchor="end"
              fontSize="80"
              fontFamily="var(--font-poppins)"
              fill="transparent"
              stroke="url(#gradient-stroke)"
              strokeWidth="1.5"
            >
              {content.create}
            </text>
          </svg>
        </TitleLG>
      </motion.div>

      {/* Description & CTA */}
      <div className="flex flex-wrap-reverse 2xl:flex-nowrap gap-4 justify-between items-start">
        <div className="">
          <Body className="text-center lg:text-justify text-[#3A1F75] max-w-6xl">
            {content.overview}
          </Body>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <PrimaryButton title={content.cta_button_1} />
            <OutlineButton title={content.cta_button_2} />
          </div>
        </div>

        {/* Tagline */}
        <CaptionLG className="2xl:mb-4 text-right uppercase flex gap-2 justify-end mx-auto lg:ml-auto !w-full">
          <span className="bg-gradient-to-r from-[#5E72EB]/80 to-[#5E72EB]/90 bg-clip-text text-transparent w-fit">
            {content.in_tamil_nadu.in}
          </span>
          <span className="bg-gradient-to-r from-[#5E72EB] via-[#da75bd]/80 to-[#da75bd] bg-clip-text text-transparent w-fit">
            {content.in_tamil_nadu.location}
          </span>
        </CaptionLG>
      </div>
    </Container>
  );
};

export default Innovation;
