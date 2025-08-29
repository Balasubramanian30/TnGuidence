/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import ButtonGroup from "@/components/blocks/map/button-group";
import Container from "@/components/constants/container";
import AnimatedLine from "@/components/icons/animated-line";
import { useScroll } from "framer-motion";
import Body from "@/components/text-components/Body";
import MapFeatureContent from "@/components/blocks/map/map-features-content";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import { getLanguageContent } from "@/i18n";
import { Location } from "iconsax-react";
import { IconWorld } from "@tabler/icons-react";
import SectionTitle from "../block/section-title";

// Lazy load the map component to avoid SSR issues
const TamilNaduInteractiveMap = dynamic(
  () => import("./../../blocks/map/map"),
  { ssr: false }
);

const MapSection = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.map_section || getLanguageContent("EN").map_section;
  const [activeType, setActiveType] = useState<
    "district" | "airports" | "seaports" | "highways" | "industries" | "telecom"
  >("district");
  const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(
    "Chennai"
  );

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const labels: Record<any, string> = {
    district: content.district_btn,
    airports: content.airports_btn,
    seaports: content.seaports_btn,
    highways: content.highways_btn,
    industries: content.industries_btn,
    telecom: content.telecom_btn,
  };

  return (
    <Container
      className="bg-gradient-to-b from-[#602DFB]/0 to-[#3A1F75]/10 overflow-hidden relative !pb-0"
      ref={ref}
    >
      <AnimatedLine scrollProgress={scrollYProgress} />

      <div className="bg-white p-4 rounded-full flex justify-center items-center absolute bottom-32 right-10">
        <a
          href="https://maps.app.goo.gl/fNm8Gji2NRtcXz1y7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWorld color="#3A1F73" size={32} />
        </a>
      </div>
      <div className="bg-white p-4 rounded-full flex justify-center items-center absolute bottom-10 right-10">
        <a
          href="https://maps.app.goo.gl/fNm8Gji2NRtcXz1y7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Location color="#3A1F73" size={32} variant="Bold" />
        </a>
      </div>

      <div className="flex flex-col gap-2 mb-10 text-center justify-center items-center">
        <SectionTitle title={content.title} center />
        <Body className="max-w-2xl mt-2 text-[#3A1F75]">{content.description}</Body>
      </div>

      <ButtonGroup
        activeType={activeType}
        setActiveType={setActiveType}
        labels={labels}
      />

      <div className="flex flex-wrap 2xl:flex-nowrap justify-between">
        <MapFeatureContent
          activeType={activeType}
          selectedDistrict={selectedDistrict ? selectedDistrict : ""}
          setSelectedDistrict={setSelectedDistrict}
        />

        <TamilNaduInteractiveMap
          onDistrictClick={(district) => setSelectedDistrict(district)}
          selectedDistrict={selectedDistrict}
          activeType={activeType}
        />
      </div>
    </Container>
  );
};

export default MapSection;
