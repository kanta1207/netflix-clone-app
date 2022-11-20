import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  buttonType : "red" | "white" | "outline" | "transparent";
  mediaQueries: string;
};

//set styles for each color, using color names as keys.
const colorMap = new Map<string, string>([
  ["red", "bg-[#E50815] text-[#ffffff]"],
  ["white", "bg-[#ffffff] text-[#000000] hover:opacity-80"],
  [
    "outline",
    "bg-transparent outline outline-1 outline-[#ffffff] text-[#ffffff]",
  ],
  ["transparent", "bg-transparent text-[#ffffff]"],
]);

//basic styles apply to all of the buttons
const baseStyle = "font-bold rounded cursor-pointer flex items-center";

export const Button: FC<Props> = (props) => {
  const { children, onClick, buttonType, mediaQueries } = props;
  return (
    <button
      onClick={onClick}
      className={`${colorMap.get(buttonType)} , ${mediaQueries} , ${baseStyle}`}
    >
      {children}
    </button>
  );
};
