import { FC } from "react"
import { ButtonProps } from "../../../types/propsTypes"

export const WhiteButton :FC<ButtonProps>= (props) => {
 const {children} = props;
  return (
    <button className="bg-[#ffffff] text-[#000000] font-bold text-xs sm:text-sm  md:text-base rounded px-4  py-1 md:px-4 md:py-2  cursor-pointer hover:opacity-80 flex items-center">
      {/* <Button colorKey="white" mediaQueries="text-xs sm:text-sm md:text-base px-4 py-1 md:px-4 md:py-2"></Button> */}
        {children}
    </button>
  )
}
