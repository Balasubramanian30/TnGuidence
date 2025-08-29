"use client";
import RippleCard from "@/components/blocks/ripple-card";
import Container from "@/components/constants/container";
import Body from "@/components/text-components/Body";
import CaptionSM from "@/components/text-components/CaptionSM";
import { getLanguageContent } from "@/i18n";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import SectionTitle from "../block/section-title";

const Shape = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.shape_section || getLanguageContent("EN").shape_section;

  return (
    // <Container className='bg-gradient-to-b from-[#602DFB]/10 to-[#602DFB]/30'>
    <Container className="bg-gradient-to-b from-[#602DFB]/0 to-[#3A1F75]/10">
      <SectionTitle title={content.title} />
      <Body className="text-[#3A1F75] text-center lg:text-justify max-w-6xl 6xl:max-w-full mt-4">
        {content.description}
      </Body>

      <div className="flex flex-col mt-7 gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
          {/* CARD 1 */}
          <div className="flex flex-col gap-4 w-full justify-between">
            <RippleCard className="!bg-gradient-to-tl from-[#5000FF]/30 to-[#5000FF]/10 min-h-64 max-h-64 w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden">
              <Image
                src="/icons/factories-shape.svg"
                alt=""
                width={500}
                height={500}
                className="absolute top-5 6xl:top-7 -right-5 -rotate-180 w-96 lg:w-72 6xl:w-96 h-fit"
              />
              <CaptionSM className="text-[#3A1F75] uppercase !z-10">
                {content.cards[0].title}
              </CaptionSM>
              <CaptionSM className="text-white text-right max-w-sm self-end !leading-tight">
                {content.cards[0].text}
              </CaptionSM>
            </RippleCard>

            {/* CARD 2 */}
            <RippleCard className="!bg-transparent border border-[#3A1F75]/40 min-h-96 h-full w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden">
              <Image
                src="/icons/annual-shape.svg"
                alt=""
                width={500}
                height={500}
                className="absolute -z-10 bottom-16 5xl:bottom-28 6xl:bottom-16 left-10 5xl:left-5 6xl:left-10 w-52 h-52"
              />
              <CaptionSM className="uppercase text-[#3A1F75]">
                {content.cards[1].title}
              </CaptionSM>
              <CaptionSM className="text-[#3A1F75] text-right self-end !leading-tight space-x-2 max-w-sm">
                {content.cards[1].text_parts.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-[#602DFB] via-[#391B95]/80 to-[#391B95]/80 bg-clip-text text-transparent w-fit"
                  >
                    {t}
                  </span>
                ))}
              </CaptionSM>
            </RippleCard>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-4 !w-full">
            <RippleCard
              className="border border-[#602DFB]/40 !bg-gradient-to-b from-[#fff]/30 to-[#5000FF]/10 min-h-96 h-full w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden"
              color="#602DFB"
            >
              <Image
                src="/icons/top-ranking-shape.svg"
                alt=""
                width={500}
                height={500}
                className="absolute -z-10 top-14 lg:top-44 left-20 sm:left-10 5xl:left-12 w-52 h-52 lg:w-80 lg:h-80 5xl:w-96 5xl:h-96"
              />
              <CaptionSM className="text-[#3A1F75] uppercase !z-50">
                {content.cards[2].title}
              </CaptionSM>
              <CaptionSM className="text-[#3A1F75] text-center !leading-tight flex flex-wrap gap-x-2 capitalize mx-auto">
                {content.cards[2].text_parts.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-[#391B95] via-[#602DFB]/80 to-[#391B95] bg-clip-text text-transparent text-center !max-w-lg mx-auto"
                  >
                    {t}
                  </span>
                ))}
              </CaptionSM>
            </RippleCard>
          </div>

          {/* CARD 4 & 5 */}
          <div className="flex flex-col gap-4 w-full justify-between">
            <RippleCard
              className="!bg-[#3A1F75]/70 min-h-52 max-h-52 h-full w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden"
              color="#3A1F75"
            >
              <CaptionSM className="text-[#fff] uppercase">
                {content.cards[3].title_below}
              </CaptionSM>
              <Image
                src="/icons/patents-shape.svg"
                alt=""
                width={500}
                height={500}
                className="absolute -z-10 -top-16 -left-5 w-72 h-fit"
              />
              <CaptionSM className="text-[#fff] text-right self-end !leading-tight space-x-2 max-w-sm">
                {content.cards[3].text}
              </CaptionSM>
            </RippleCard>

            <RippleCard className="!border border-[#602DFB]/40 min-h-96 h-full w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden">
              <Image
                src="/shape/women.svg"
                alt=""
                width={500}
                height={500}
                className="absolute -z-0 top-5 -right-5 w-72 h-72"
              />
              <CaptionSM className="uppercase text-[#3A1F75]">
                {content.cards[4].title}
              </CaptionSM>
              <CaptionSM className="text-[#fff] text-right self-end !leading-tight space-x-2 max-w-sm">
                {content.cards[4].text_parts.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-[#3A1F75] via-[#3A1F75] to-[#3A1F75]  bg-clip-text text-transparent w-fit"
                  >
                    {t}
                  </span>
                ))}
              </CaptionSM>
            </RippleCard>
          </div>
        </div>

        {/* CARD 6 */}
        <RippleCard
          className=" !bg-gradient-to-tl from-[#5000FF]/30 to-[#5000FF]/10 min-h-44 lg:min-h-52 w-full rounded-3xl shadow-3xl p-5 xl:p-7 flex flex-col justify-between relative overflow-hidden"
          color="#5000FF"
        >
          <Image
            src="/icons/sez-shape.svg"
            alt=""
            width={500}
            height={500}
            className="absolute -z-10 bottom-5 left-72 w-64 6xl:w-72 h-fit"
          />
          <CaptionSM className="text-[#5000FF] uppercase">
            {content.cards[5].title}
          </CaptionSM>
          <CaptionSM className="text-[#fff]/70 text-right max-w-xl self-end !leading-tight">
            {content.cards[5].text}
          </CaptionSM>
        </RippleCard>
      </div>
    </Container>
  );
};

export default Shape;
