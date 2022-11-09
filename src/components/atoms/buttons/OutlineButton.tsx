import { FC } from "react";
import { ButtonProps } from "../../../types/propsTypes";


export const OutlineButton: FC<ButtonProps> = (props) => {
  const { children ,onClick} = props;
  return (
    <button onClick={onClick} className="bg-transparent rounded outline outline-1 outline-[#ffffff] text-[#ffffff] text-xs sm:text-sm font-bold  md:text-base px-2 py-1 md:px-4 md:py-2 cursor-pointer flex items-center">
      {children}
    </button>
  );
};
