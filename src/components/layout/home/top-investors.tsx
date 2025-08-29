"use client";
import Container from "@/components/constants/container";
import { getLanguageContent } from "@/i18n";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../block/section-title";

const logos = [
  { name: "Aditya Birla", src: "/investors/aditya-birla.png" },
  { name: "Apollo", src: "/investors/apollo.png" },
  { name: "Ather", src: "/investors/ather.png" },
  { name: "Baettr", src: "/investors/baettr.png" },
  { name: "Britannia", src: "/investors/britannia.png" },
  { name: "Daimler", src: "/investors/daimler.png" },
  { name: "Eickoff", src: "/investors/eickoff.png" },
  { name: "First Solar", src: "/investors/first-solar.png" },
  { name: "Hyundai", src: "/investors/hyundai.png" },
  { name: "INOX", src: "/investors/inox.png" },
  { name: "JSW", src: "/investors/jsw.png" },
  { name: "Kobelco", src: "/investors/kobelco.jpg" },
  { name: "Lincoln Electric", src: "/investors/lincoln-electric.jpg" },
  { name: "BMW", src: "/investors/logo-bmw.jpg" },
  { name: "Nordex", src: "/investors/nordex.png" },
  { name: "OLA Electric", src: "/investors/ola-electric.png" },
  { name: "Pegatron", src: "/investors/pegatron.png" },
  { name: "Renault", src: "/investors/renault.jpg" },
  { name: "TATA", src: "/investors/tata.png" },
  { name: "Yamaha", src: "/investors/yamaha.svg" },
];

const TopInvestors = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.top_investors_section ||
    getLanguageContent("EN").top_investors_section;

  return (
    <Container className="bg-gradient-to-b from-[#602DFB]/0 to-[#3A1F75]/5 !py-10">
      <div className="flex justify-between">
        <SectionTitle title={content.title} />

        {/* <div className="flex gap-2 items-center">
          <button className={`bg-[#5E72EB] text-white p-2 rounded-full`}>
            <ArrowLeft color="#fff" size={24} />
          </button>
          <button className={`bg-[#5E72EB] text-white p-2 rounded-full`}>
            <ArrowRight color="#fff" size={24} />
          </button>
        </div> */}
      </div>

      <Marquee>
        <div className="flex">
          {logos.map((logo, i) => {
            return (
              <div key={i} className="py-7">
                <Image
                  alt={logo.name}
                  src={logo.src}
                  width={500}
                  height={500}
                  className="w-44 h-32 object-contain bg-white rounded-xl p-1 mx-3 border border-[#3A1F75]"
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </Container>
  );
};

export default TopInvestors;
