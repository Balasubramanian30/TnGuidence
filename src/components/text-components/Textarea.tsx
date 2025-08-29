import React from "react";

const Textarea = ({
  style,
  type,
  value,
  className,
  placeholder,
  cols,
  rows,
  onChange = () => { },
  onBlur,
  name = "input"
}) => {
  return (
    <textarea
      className={`!font-georgia !text-body md:!text-mdbody 4xl:!text-lgbody 7xl:!text-xlbody leading-[1.25] 4xl:leading-[1.5] ${className}`}
      style={style}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Textarea;
