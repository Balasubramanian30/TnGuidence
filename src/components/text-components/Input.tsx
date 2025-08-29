import React from "react";

const Input = ({
  style,
  type,
  value,
  className,
  placeholder,
  onChange = () => {},
  onBlur,
  name = "input",
}) => {
  return (
    <input
      className={`!font-sora !text-smallText md:!text-mdsmallText 4xl:!text-lgsmallText 7xl:!text-xlsmallText leading-[1.25] 4xl:leading-[1.5] px-3 md ${className}`}
      style={style}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
