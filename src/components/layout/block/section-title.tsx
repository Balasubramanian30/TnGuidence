import React from "react";
import SubTitle from "@/components/text-components/SubTitle";

interface SectionTitleProps {
  title: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  center?: boolean;
  bold?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
  gradientFrom = "#5E72EB",
  gradientTo = "#da75bd",
  center = false,
  bold = true,
}) => {
  return (
    <SubTitle
      className={`${center ? "text-center" : ""} ${
        bold ? "font-bold" : ""
      } ${className}`}
    >
      <span
        className={`bg-gradient-to-t !bg-clip-text !text-transparent capitalize`}
        style={{
          backgroundImage: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {title}
      </span>
    </SubTitle>
  );
};

export default SectionTitle;