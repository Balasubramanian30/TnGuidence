import React from "react";

interface CaptionLGProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const CaptionLG: React.FC<CaptionLGProps> = ({ style, children, className = "" }) => {
  return (
    <h3
      className={`font-sora font-bold leading-snug 2xl:leading-none capitalize ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-captionLarge)",
      }}
    >
      {children}
    </h3>
  );
};

export default CaptionLG;
