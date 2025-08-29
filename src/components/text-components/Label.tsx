import React from "react";

const Label = ({ style, children, className, htmlFor }) => {
  return (
    <label
      className={`!font-sora text-smallText md:!text-mdsmallText 4xl:!text-lgsmallText 7xl:!text-xlsmallText leading-[1.25] 4xl:leading-[1.5] ${className}`}
      style={style}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
