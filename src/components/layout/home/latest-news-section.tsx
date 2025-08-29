/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/constants/container";
import Body from "@/components/text-components/Body";
import CaptionLG from "@/components/text-components/CaptionLG";
import CaptionSM from "@/components/text-components/CaptionSM";
import SmallText from "@/components/text-components/SmallText";
import { getLanguageContent } from "@/i18n";
import { selectedLanguageAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../block/section-title";
import OutlineButton from "@/components/constants/outline-button";

const LatestNews = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.news_section || getLanguageContent("EN").news_section;

  return (
    <Container className="bg-gradient-to-b from-[#602DFB]/10 to-[#602DFB]/30">
      {/* <Title className="text-center font-bold mb-10">
                <span className='!bg-gradient-to-b !from-[#3A1F75] !to-[#602DFB] !bg-clip-text !text-transparent'>
                    {content?.title || "Latest News"}
                </span>
            </Title> */}
      <SectionTitle title={content.title} center />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {content?.articles?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white border border-[#3A1F75]/40 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between gap-2"
          >
            <div className="relative h-72 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {item.tag && (
                <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-7 flex flex-col justify-between flex-grow gap-2">
              <CaptionSM className="text-lg font-bold mb-2 text-[#3A1F75] !leading-snug">
                {item.title}
              </CaptionSM>
              <Body className="text-sm text-[#3A1F75]/70 line-clamp-[6] !leading-snug">
                {item.description}
              </Body>
              <div className="mt-4">
                <SmallText>
                  <Link href={item.link}>
                    <OutlineButton title={content?.read_more_button || "Read More"} />
                  </Link>
                </SmallText>
              </div>
            </div>
          </div>
        ))}

        {content?.live_tweets_section && (
          <div className="bg-white border border-[#3A1F75]/40 rounded-3xl shadow-xl p-7 lg:col-span-2 relative overflow-hidden flex flex-col justify-center items-center gap-4">
            <Image
              src="/icons/top-ranking-shape.svg"
              alt=""
              width={500}
              height={500}
              className="absolute -top-5 -right-10 w-64 h-48 opacity-25 lg:opacity-100"
            />
            <Image
              src="/icons/annual-shape.svg"
              alt=""
              width={500}
              height={500}
              className="absolute -bottom-10 -left-10 w-64 h-52 opacity-25 lg:opacity-100"
            />

            <CaptionLG className="text-center font-semibold text-[#3A1F75] flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-blue-500 mr-2"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 001.88-2.35 8.55 8.55 0 01-2.7 1.03 4.27 4.27 0 00-7.3 3.9 12.11 12.11 0 01-8.78-4.45 4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.93-.53v.05a4.28 4.28 0 003.43 4.2 4.27 4.27 0 01-1.92.07 4.28 4.28 0 004 2.98A8.56 8.56 0 012 19.54a12.06 12.06 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.64 8.64 0 0024 5.54a8.57 8.57 0 01-2.54.7z" />
              </svg>
              <span>{content.live_tweets_section.title}</span>
            </CaptionLG>

            <Body className="flex justify-center items-center text-center underline">
              <Link
                className="twitter-timeline"
                href={content.live_tweets_section.twitter_handle_url}
                data-height={content.live_tweets_section.embed_height || "400"}
              >
                Tweets by Guidance_TN
              </Link>
            </Body>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LatestNews;
