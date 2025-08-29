import React from "react";

interface BodyProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ style, className = "", children }) => {
  return (
    <p
      className={`font-sora leading-tight ${className}`}
      style={{
        ...style,
        fontSize: "var(--font-body)",
      }}
    >
      {children}
    </p>
  );
};

export default Body;
