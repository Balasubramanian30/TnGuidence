import React from "react";
import Body from "../text-components/Body";
import Image from "next/image";

// Define props type, extending native button attributes
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`!bg-[#3A1F75] hover:shadow-xl hover:!bg-[#E870AB] rounded-full flex items-center justify-between pl-7 gap-4 !py-0 cursor-pointer !transition-all !duration-300 !ease-linear group !min-h-14 !max-h-14 min-w-fit ${className}`}
      {...props}
    >
      <Body className="text-white font-semibold capitalize !text-center mx-auto w-full">{title}</Body>
      <span className="bg-white group-hover:bg-[#3A1F75] border border-[#3A1F75] p-2 px-4 rounded-full !min-h-14 !max-h-14 flex flex-col justify-center items-center !transition-all !duration-300 !ease-linear">
        {/* <ArrowRight className="-rotate-45 group-hover:text-white" size={24} /> */}
        <Image width={500} height={500} alt='Language Filter' src={"/cutout-logo.svg"} className={"w-10 h-6 Srotate-45"} />
      </span>
    </button>
  );
};

export default PrimaryButton;

//     <button
//       className={`!bg-[#3A1F75] hover:!bg-[#E870AB] rounded-full flex items-center justify-between pl-7 gap-4 !py-0 cursor-pointer !transition-all !duration-300 !ease-linear group ${className}`}
//       {...props}
//     >
//       <Body className="text-white font-semibold capitalize !py-3.5">{title}</Body>
//       <span className="bg-white border border-[#3A1F75] p-2 px-4 rounded-full h-full flex flex-col justify-center items-center !transition-all !duration-300 !ease-linear">
//         <ArrowRight className="-rotate-45 group-hover:text-[#3A1F75]" size={24} />
//       </span>
//     </button>