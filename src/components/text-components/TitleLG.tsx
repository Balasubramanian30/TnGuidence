import { selectedLanguageAtom } from "@/jotai/store";
import { useAtomValue } from "jotai";
import React from "react";

interface TitleLGProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const TitleLG: React.FC<TitleLGProps> = ({ style, children, className = "" }) => {
  const selectedLang = useAtomValue(selectedLanguageAtom);
  const isEnglish = selectedLang === "EN";

  const fontSize = isEnglish ? "var(--font-largeTitle)" : "var(--font-largeTitle)";
  const lineHeight = isEnglish ? "leading-none" : "leading-none";

  return (
    <h1
      className={`font-sora font-bold uppercase ${lineHeight} ${className}`}
      style={{
        ...style,
        fontSize,
      }}
    >
      {children}
    </h1>
  );
};

export default TitleLG;
