import React from "react";

interface CaptionSMProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  outlined?: boolean;
}

const CaptionSM: React.FC<CaptionSMProps> = ({ style, children, outlined = false, className = "" }) => {
  return (
    <h4
      className={`font-sora leading-none font-semibold capitalize ${className} ${outlined ? "gradient-outline-text" : ""
        }`}
      style={{
        ...style,
        fontSize: "var(--font-captionSmall)",
      }}
    >
      {children}
    </h4>
  );
};

export default CaptionSM;
