"use client";

import React from "react";
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import Body from "@/components/text-components/Body";
import Container from "@/components/constants/container";
import PrimaryButton from "@/components/constants/primary-button";
import Title from "@/components/text-components/Title";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { MorphingText } from "@/components/magicui/morphing-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BizBuddy = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const content = getLanguageContent(selectedLang).biz_buddy;
  const morphingTexts = ["Biz Buddy", "Industrial Help Desk"];

  return (
    <Container className="bg-white !pt-32 h-screen relative overflow-hidden w-full relative">
      <div className="flex flex-col justify-center items-center-safe h-full gap-7 relative">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)] skew-y-6"
          )}
        />
        <Title className="!font-medium text-center leading-tight text-[#5E3B83]  z-50">
          <MorphingText
            className="relative mx-auto inline-block text-center whitespace-nowrap"
            texts={morphingTexts}
          />
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
