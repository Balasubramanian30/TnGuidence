/* eslint-disable @typescript-eslint/no-explicit-any */
import Body from "@/components/text-components/Body";
import SmallText from "@/components/text-components/SmallText";
import Image from "next/image";

import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";

import React from "react";
import { districts } from "./utils/district";
import CaptionLG from "@/components/text-components/CaptionLG";
import BigBody from "@/components/text-components/big-body";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OutlineButton from "@/components/constants/outline-button";
import PrimaryButton from "@/components/constants/primary-button";
import GradientText from "@/components/layout/block/gradient-text";

const MapFeatureContent = ({
  activeType,
  selectedDistrict,
  setSelectedDistrict,
}: {
  selectedDistrict: string;
  activeType: string;
  setSelectedDistrict: (v: string) => void;
}) => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.map_section || getLanguageContent("EN").map_section;

  const sectionContent =
    activeType === "district"
      ? content.districts?.[selectedDistrict]
      : content[activeType];

  if (!sectionContent) return null;

  return (
    <div className="flex flex-col gap-7 mt-14">
      {activeType == "district" && (
        <div className="w-full max-w-sm">
          <Select
            value={selectedDistrict ?? ""}
            onValueChange={(value) => setSelectedDistrict(value)}
          >
            <SelectTrigger className="border border-gray-200 bg-white shadow-sm rounded-lg px-4 w-64 py-3 focus:ring-2 focus:ring-primary focus:border-primary">
              <SelectValue placeholder="Select District" />
            </SelectTrigger>
            <SelectContent className="rounded-xl shadow-lg border border-gray-100 bg-white">
              {[...districts]
                .sort((a, b) => a.localeCompare(b))
                .map((district) => (
                  <SelectItem
                    key={district}
                    value={district}
                    className="hover:bg-primary/10 cursor-pointer rounded-lg"
                  >
                    {district}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <CaptionLG className="text-[#5E72EB] capitalize">
        {sectionContent.title}
      </CaptionLG>

      <Body className="max-w-3xl line-clamp-2 text-[#3A1F75]">
        {sectionContent.description}
      </Body>

      {/* Conditional Stats */}
      {sectionContent.stats && (
        <div className="flex flex-wrap mt-2 divide-x divide-[#3A1F75]">
          {Object.entries(sectionContent.stats).map(([key, value]) => (
            <div
              className="flex flex-col gap-2 min-w-fit max-w-72 px-4"
              key={key}
            >
              <BigBody className="w-fit">
                <GradientText value={value as string} />
              </BigBody>
              <SmallText className="ml-2">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </SmallText>
            </div>
          ))}
        </div>
      )}

      {/* Highlights or Icons */}
      {sectionContent.highlights && (
        <div className="flex flex-wrap mt-2 divide-x divide-[#5E72EB]">
          {Object.entries(sectionContent.highlights).map(([key, value]) => (
            <div
              className="flex flex-col gap-2 min-w-fit max-w-72 px-4"
              key={key}
            >
              <BigBody className="font-semibold" outlined>
                {value as string}
              </BigBody>
              <SmallText className="max-w-32">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </SmallText>
            </div>
          ))}
        </div>
      )}

      {sectionContent.icons && (
        <div className="flex flex-wrap mt-2 gap-10">
          {sectionContent.icons.map((icon: any, i: number) => (
            <div className="flex flex-col gap-2 max-w-52" key={i}>
              <div className="relative w-12 h-12">
                <Image
                  alt={icon.label}
                  src={icon.src}
                  fill
                  className="object-contain opacity-0"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#7472e3] to-[#da75bd] mask-no-repeat mask-center mask-contain"
                  style={{ maskImage: `url(${icon.src})`, WebkitMaskImage: `url(${icon.src})` }}
                />
              </div>
              <SmallText className="text-[#3A1F75]">{icon.label}</SmallText>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center lg:justify-start gap-4">
        {selectedDistrict && activeType === "district" && (
          <PrimaryButton title={`${content.explore_district_btn} ${selectedDistrict}`} />
        )}

        <OutlineButton title={content.view_all_btn} />
      </div>
    </div>
  );
};

export default MapFeatureContent;
