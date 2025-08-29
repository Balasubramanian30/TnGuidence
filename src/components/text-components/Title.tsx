import React from "react";

interface TitleProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ style, className = "", children }) => {
  return (
    <h1
      className={`font-sora font-bold uppercase leading-none ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-title)",
      }}
    >
      {children}
    </h1>
  );
};

export default Title;
