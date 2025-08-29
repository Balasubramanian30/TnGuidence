import React from "react";

interface BigBodyProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  outlined?: boolean;
}

const BigBody: React.FC<BigBodyProps> = ({
  style,
  className = "",
  children,
  outlined = false,
}) => {
  return (
    <p
      className={`font-sora leading-tight ${className} ${
        outlined ? "gradient-outline-text" : ""
      }`}
      style={{
        ...style,
        fontSize: "var(--font-bigbody)",
      }}
    >
      {children}
    </p>
  );
};

export default BigBody;