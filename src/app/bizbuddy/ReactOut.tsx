"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getLanguageContent } from "@/i18n";
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import SubTitle from "@/components/text-components/SubTitle";
import { useState } from "react";


export default function ReachOut() {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.experts_section ||
    getLanguageContent("EN").experts_section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-br from-[#E870AB]/10 via-[#AB5799]/10 to-[#5E72EB]/10 py-16">
      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-10 px-4">
        {/* Left Title */}
        <div className="flex-shrink-0 text-left xl:w-1/3 mb-8 xl:mb-0">
          <SubTitle className="font-bold mb-7">
            <span className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent">
              {content.title}
            </span>
          </SubTitle>
        </div>

        {/* Experts Row */}
        <div className="flex gap-8 xl:w-2/3 justify-center">
          {content.experts.map((expert: any, index: number) => (
            <motion.div
              key={index}
              className={`flex items-center bg-white rounded-full shadow-xl overflow-hidden cursor-pointer border border-[#E870AB]/30 transition-all duration-300`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ width: 120, height: 120 }}
              animate={{
                width: hoveredIndex === index ? 300 : 120,
                height: 120,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile Image */}
              <div
                className="relative flex-shrink-0"
                style={{ width: 120, height: 120 }}
              >
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover rounded-full border-4 border-[#E870AB]/30"
                  style={{ borderRadius: "50%" }}
                />
              </div>

              {/* Details */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pl-4 pr-6 flex flex-col items-start"
                >
                  <h4 className="text-base font-semibold text-[#5E3B83] mb-1">
                    {expert.name}
                  </h4>
                  <p className="text-sm text-[#3A1F75] mb-2">{expert.email}</p>
                  <button className="mt-1 px-4 py-1 text-sm font-medium bg-gradient-to-r from-[#AB5799] via-[#E870AB] to-[#5E72EB] text-white rounded-full shadow hover:scale-105 transition-transform duration-200">
                    Reach Out
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
