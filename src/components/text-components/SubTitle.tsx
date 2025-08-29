import React from "react";

interface SubTitleProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ style, children, className = "" }) => {
  return (
    <h2
      className={`font-sora font-bold leading-none ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-subTitle) !important",
      }}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
