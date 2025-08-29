

"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import { getLanguageContent } from "@/i18n";
import SubTitle from "@/components/text-components/SubTitle";

const KeyFeatures = () => {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const keyFeatures = langContent.key_features || getLanguageContent("EN").key_features;

  return (
    <div className="bg-gradient-to-br from-[#E870AB]/10 via-[#AB5799]/10 to-[#5E72EB]/10 py-12 px-4">
      <SubTitle className="font-bold mb-2">
        <span className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent">
          Key Features
        </span>
      </SubTitle>
      <HorizontalScrollCarousel cards={keyFeatures.cards} />
    </div>
  );
};

interface KeyFeatureCard {
  title: string;
  image: string;
  description: string;
}
const HorizontalScrollCarousel = ({ cards }: { cards: KeyFeatureCard[] }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[220vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card, idx) => (
            <Card card={card} key={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: KeyFeatureCard }) => (
  <div
    className="group relative h-[400px] w-[350px] overflow-hidden bg-white rounded-2xl shadow-lg flex items-center justify-center text-center p-0 transition-transform hover:scale-105"
    style={{
      backgroundImage: card.image ? `url(${card.image})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 z-0"></div>
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-8">
      <div className="flex flex-col justify-center items-center h-20 w-full">
        <SubTitle className="font-bold mb-0 w-full flex items-center justify-center h-full">
          <span className="bg-gradient-to-t text-2xl from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent text-white font-bold block w-full text-center line-clamp-2 break-words">
            {card.title}
          </span>
        </SubTitle>
      </div>
      <p className="text-base mb-0 drop-shadow text-center">
        {card.description}
      </p>
    </div>
  </div>
);

export default KeyFeatures;
