/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { motion, AnimatePresence } from "framer-motion";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import Body from "@/components/text-components/Body";
import Container from "@/components/constants/container";
import PrimaryButton from "@/components/constants/primary-button";
import Title from "@/components/text-components/Title";
import SocialIconsNavbar from "@/components/blocks/social-icons-navbar";
import Link from "next/link";

const floatVariants = {
  animate: (i: number) => ({
    x: [0, i % 2 === 0 ? 15 : -15, 0],
    y: [0, i % 2 === 0 ? -15 : 15, 0],
    transition: {
      duration: 4 + (i % 5),
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};
// Unique image sources
const IMAGES = [
  "/sectors/full/aerospace.jpeg",
  "/sectors/full/agro.png",
  "/sectors/full/automobile.png",
  "/sectors/full/banking.jpg",
  "/sectors/full/chemicals.jpg",
  "/sectors/full/datacenter.png",
  "/sectors/full/electronics.png",
  "/sectors/full/engineering.png",
  "/sectors/full/gcc.webp",
  "/sectors/full/industrial.png",
  "/sectors/full/it.jpeg",
  "/sectors/full/leather.png",
  "/sectors/full/lifesciences.jpeg",
  "/sectors/full/renewable.jpeg",
  "/sectors/full/shipbuilding.jpg",
  "/sectors/full/textile.jpeg",
  "/sectors/full/tourism.jpg",
  "/sectors/full/toys.jpg",
];

// Non-overlapping hardcoded positions for each ball
const FIXED_POSITIONS = [
  // Top zone (0–30%), avoiding center (30%-70%)
  { top: "5%", left: "5%" },
  { top: "8%", left: "15%" },
  { top: "12%", left: "25%" },
  { top: "6%", right: "5%" },
  { top: "10%", right: "15%" },
  { top: "14%", right: "25%" },
  { top: "20%", left: "5%" },
  { top: "22%", left: "20%" },
  { top: "25%", right: "5%" },

  // Bottom zone (70–100%), avoiding center (30%-70%)
  { bottom: "5%", left: "5%" },
  { bottom: "8%", left: "15%" },
  { bottom: "12%", left: "25%" },
  { bottom: "6%", right: "5%" },
  { bottom: "10%", right: "15%" },
  { bottom: "14%", right: "25%" },
  { bottom: "20%", left: "5%" },
  { bottom: "22%", left: "20%" },
  { bottom: "25%", right: "5%" },
  { bottom: "28%", right: "25%" },
];

const BizBuddy = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const content = getLanguageContent(selectedLang).hero_section;

  const [visible, setVisible] = useState<number[]>(
    IMAGES.slice(0, 4).map((_, i) => i)
  );
  const [pointer, setPointer] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => {
        const next = [...prev];
        next.shift();
        next.push(pointer % IMAGES.length);
        return next;
      });
      setPointer((p) => (p + 1) % IMAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [pointer]);

  return (
    <Container className="bg-white !pt-32 h-screen relative overflow-hidden w-full relative">
      <div className="absolute inset-0 h-full w-screen bg-[url('/transparent-grid.png')] bg-cover opacity-10" />
      <div className="flex flex-col justify-center items-center-safe h-full gap-7">
        <SocialIconsNavbar />
        <AnimatePresence>
          {visible.map((idx, i) => (
            <motion.img
              key={idx}
              src={IMAGES[idx]}
              alt={`ball-${idx}`}
              custom={i}
              variants={floatVariants}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              className="absolute size-20 object-cover rounded-full shadow-2xl shadow-blue-500/20"
              style={FIXED_POSITIONS[idx]}
            />
          ))}
        </AnimatePresence>

        <Title className="!font-medium leading-tight text-[#5E3B83] space-x-1.5 text-center z-50">
          <motion.span
            className="bg-gradient-to-r from-[#AB5799] via-[#E870AB] to-[#5E72EB] bg-clip-text text-transparent w-fit text-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Biz Buddy
          </motion.span>
        </Title>

        <div className="flex flex-col gap-4 w-fit 4xl:ml-auto z-50">
          <Body className="text-[#3A1F75] !leading-snug max-w-lg xl:!max-w-xl text-center">
            {content?.description ||
              `Biz Buddy, the dedicated industrial help desk, resolves issues and challenges faced by investors in a time-bound and accountable manner.`}
          </Body>

          <Link
            href="https://tnbizbuddy.com/BIZBUDDY/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-center self-center z-50"
          >
            <PrimaryButton
              title={content?.Biz_Buddy || "Go To Biz Buddy"}
              className="w-fit text-center self-center z-50"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default BizBuddy;
