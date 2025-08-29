import React from "react";

interface TitleXLProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const TitleXL: React.FC<TitleXLProps> = ({ style, children, className = "" }) => {
  return (
    <h1
      className={`font-sora font-bold uppercase leading-none ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-xlTitle)",
      }}
    >
      {children}
    </h1>
  );
};

export default TitleXL;
