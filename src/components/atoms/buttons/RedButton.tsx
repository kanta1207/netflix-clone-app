import { FC } from "react";
import { ButtonProps } from "../../../types/propsTypes";

export const RedButton: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button className="bg-[#E50815] text-[#ffffff] rounded px-4  py-1 md:px-4 md:py-2 cursor-pointer flex items-center">
      {children}
    </button>
  );
};
