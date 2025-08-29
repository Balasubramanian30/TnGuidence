import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ style, onClick, children, className = "" }) => {
  return (
    <button
      className={`font-sora !text-button md:!text-mdbutton 4xl:!text-lgbutton 7xl:!text-xlbutton !uppercase leading-[1.25] 4xl:leading-[1.5] ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
