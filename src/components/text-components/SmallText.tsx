import React from "react";

interface SmallTextProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const SmallText: React.FC<SmallTextProps> = ({ style, children, className = "" }) => {
  return (
    <p
      className={`font-sora leading-none capitalize ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-smallText)",
      }}
    >
      {children}
    </p>
  );
};

export default SmallText;
