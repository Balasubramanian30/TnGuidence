/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Body from "../text-components/Body";
import SmallText from "../text-components/SmallText";
import Image from "next/image";
import CaptionLG from "../text-components/CaptionLG";
import PrimaryButton from "../constants/primary-button";
import { ArrowRight } from "lucide-react";
import CaptionSM from "../text-components/CaptionSM";

const sectorImageMap: Record<string, string> = {
  "Automobile, Components & Electric Vehicles": "/sectors/automobile.png",
  "Electronics & Semiconductors": "/sectors/electronics.png",
  "Textiles, Apparel & Technical Textiles": "/sectors/apparel.png",
  "Information Technology & Services": "/sectors/it.png",
  "Renewable Energy": "/sectors/renewable.png",
  "Service & R&D Centres": "/sectors/gcc.png",
  "Aerospace & Defence": "/sectors/aerospace.png",
  "Consumer Goods, Food Processing & Agri-business": "/sectors/agro.png",
  "Leather & Footwear": "/sectors/leather.png",
  "Engineering & Capital Goods": "/sectors/engineering.png",
  "Industrial Parks": "/sectors/industrial.png",
  "Life Sciences": "/sectors/lifescience.png",
  "Banking & Financial Services": "/sectors/banking.png",
  "Chemicals & Petrochemicals": "/sectors/petrochemicals.png",
  "Tourism & Hospitality": "/sectors/tourism.png",
};

const SectorsGrid = ({ content }: { content: any }) => {
  const centerRef = React.useRef<HTMLDivElement | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (window.innerWidth < 1024 && centerRef.current) {
      centerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const [selectedIndex, setSelectedIndex] = useState(0); // Default to first sector

  const sectors = content?.sectors || [];
  const displaySector = sectors[selectedIndex];

  return (
    <div className="flex flex-col gap-6">
      <div ref={centerRef} className="flex justify-between h-fit mb-7">
        <motion.div
          // style={{ minHeight: 600 }}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-fit flex flex-col gap-4 max-w-screen-md"
        >
          <CaptionLG className="!font-bold text-[#3A1F75]">
            {displaySector?.title}
          </CaptionLG>

          <Body className="leading-tight text-[#3A1F75]">
            {displaySector.description}
          </Body>

          {displaySector.stats && (
            <div className="flex gap-7 items-start mt-4">
              <div className="flex flex-col gap-2 max-w-40">
                <CaptionSM className="w-fit">
                  <svg
                    viewBox="230 -10 600 100"
                    className="w-full h-10"
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
                      fontSize="170"
                      fontFamily="var(--font-poppins)"
                      fill="transparent"
                      stroke="url(#gradient-stroke)"
                      strokeWidth="5"
                    >

                      {displaySector.stats.left}
                    </text>
                  </svg>
                </CaptionSM>
                <SmallText className="text-[#3A1F75] font-medium">
                  {displaySector.stats.leftLabel}
                </SmallText>
              </div>
              <div className="flex flex-col gap-2 max-w-40">
                <CaptionSM className="w-fit">
                  <svg
                    viewBox="230 -10 600 100"
                    className="w-full h-10"
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
                      fontSize="170"
                      fontFamily="var(--font-poppins)"
                      fill="transparent"
                      stroke="url(#gradient-stroke)"
                      strokeWidth="5"
                    >

                      {displaySector.stats.right}
                    </text>
                  </svg>
                </CaptionSM>
                <SmallText className="text-[#3A1F75] font-medium">
                  {displaySector.stats.rightLabel}
                </SmallText>
              </div>
            </div>
          )}

          {displaySector?.speaker && (
            <div className="my-4 flex gap-2 items-center">
              <div className="flex flex-col gap-3">
                <SmallText className="!font-bold text-[#6D589F]">Sector Expert</SmallText>

                <div className="flex gap-3">

                  <div className="flex flex-col gap-1">
                    <div className="bg-gray-200 rounded-full w-10 h-10 overflow-hidden">
                      {displaySector?.speaker?.image && (
                        <Image
                          width={500}
                          height={500}
                          src={"/person.png"}
                          alt="Speaker"
                          className="object-cover w-full h-full rounded-full object-center"
                        />
                      )}
                    </div>
                    <SmallText className="!font-bold text-[#3A1F75]">
                      {displaySector.speaker.name}
                    </SmallText>
                    <SmallText className="!font-medium text-[#3A1F75]/90">
                      {displaySector.speaker.email}
                    </SmallText>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="bg-gray-200 rounded-full w-10 h-10 overflow-hidden">
                      {displaySector?.speaker?.image && (
                        <Image
                          width={500}
                          height={500}
                          src={"/person.png"}
                          alt="Speaker"
                          className="object-cover w-full h-full rounded-full object-center"
                        />
                      )}
                    </div>
                    <SmallText className="!font-bold text-[#3A1F75]">
                      {displaySector.speaker.name}
                    </SmallText>
                    <SmallText className="!font-medium text-[#3A1F75]/90">
                      {displaySector.speaker.email}
                    </SmallText>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="bg-gray-200 rounded-full w-10 h-10 overflow-hidden">
                      {displaySector?.speaker?.image && (
                        <Image
                          width={500}
                          height={500}
                          src={"/person.png"}
                          alt="Speaker"
                          className="object-cover w-full h-full rounded-full object-center"
                        />
                      )}
                    </div>
                    <SmallText className="!font-bold text-[#3A1F75]">
                      {displaySector.speaker.name}
                    </SmallText>
                    <SmallText className="!font-medium text-[#3A1F75]/90">
                      {displaySector.speaker.email}
                    </SmallText>
                  </div>

                </div>
              </div>
            </div>
          )}

          <PrimaryButton title={displaySector.sector_btn} className="w-fit" />
        </motion.div>

        <div className="bg-gradient-to-b from-[#602DFB]/5 to-[#3A1F75]/10 rounded-[3rem] flex flex-col justify-center items-center overflow-hidden flex-grow w-full ml-4">
          <Image
            alt={displaySector.title}
            src={displaySector.sector_image_full}
            width={700}
            height={500}
            className="object-cover object-right w-full h-full flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7">
        {sectors.map((sector: any, i: number) => (
          <motion.div
            key={`${i}`}
            className={`cursor-pointer p-1 rounded-xl opacity-80 max-w-80 5xl:max-w-96 min-w-80 5xl:min-w-96 h-fit flex items-center bg-gradient-to-r from-[#AB5799] via-[#E870AB] to-[#5E72EB] relative ${selectedIndex === i ? "opacity-100" : ""
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            // onMouseEnter={() => setHoveredIndex(i)}
            // onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              setSelectedIndex(i);
              handleSelect(i);
            }}
          >
            {/* redirect button  */}
            <div className="bg-white absolute -bottom-5 -right-5 z-50 p-2 !rounded-full">
              <div className="bg-[#3A1F75] p-2 rounded-full">
                <ArrowRight size={24} color="#fff" className="-rotate-45" />
              </div>
            </div>
            <div className="rounded-lg bg-white p-2 w-full max-h-44 min-h-44 flex items-center !overflow-hidden relative">
              {/* Sector Images here  */}
              {/* <Image alt={sector.title} src={sector.sector_image} width={500} height={500} className='absolute inset-0 object-cover w-full h-full' /> */}
              {sectorImageMap[sector?.title] && (
                <div className="absolute right-0 bottom-0 w-44 h-44">
                  <Image
                    alt={sector.title}
                    src={sector.sector_image}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <Image
                src="/icons/top-ranking-shape.svg"
                alt=""
                width={500}
                height={500}
                className="absolute z-10 -top-10 -right-16 w-52 h-fit -rotate-45 opacity-15"
              />
              {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}
              <Body className="font-bold z-50 max-w-36 text-[#3A1F75]">{sector.title}</Body>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectorsGrid;
