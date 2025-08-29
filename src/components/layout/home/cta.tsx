"use client";
import Container from "@/components/constants/container";
import PrimaryButton from "@/components/constants/primary-button";
import SubTitle from "@/components/text-components/SubTitle";
import { getLanguageContent } from "@/i18n";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import React from "react";

const CTA = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.cta_section || getLanguageContent("EN").cta_section;
  return (
    <Container className="">
      <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-14">
        {/* <Image
          width={500}
          height={500}
          alt="Tamil Nadu Guidance"
          src={"/guidance-logo.png"}
          className="w-96 h-fit object-contain"
        /> */}

        <div className="flex flex-col max-w-screen-sm 5xl:max-w-screen-lg justify-center items-center">
          <SubTitle className="bg-gradient-to-tr from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent !leading-tight text-center">
            {content.title}
          </SubTitle>
        </div>
      </div>

      <div className="flex justify-center items-center !max-w-lg mx-auto mt-7">
        <PrimaryButton title={content.cta_button_text} className="!w-full" />
      </div>
    </Container>
  );
};

export default CTA;
