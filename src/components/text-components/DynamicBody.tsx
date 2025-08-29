import React from "react";

interface DynamicBodyProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const DynamicBody: React.FC<DynamicBodyProps> = ({ style, children, className = "" }) => {
  return (
    <div
      className={`!font-sora !text-body md:!text-mdbody 4xl:!text-lgbody 7xl:!text-xlbody leading-[1.25] 4xl:leading-[1.5] capitalize ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default DynamicBody;
