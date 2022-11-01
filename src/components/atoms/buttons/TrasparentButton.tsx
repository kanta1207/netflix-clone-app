import { FC } from "react"
import { ButtonProps } from "../../../types/propsTypes"

export const TransparentButton :FC<ButtonProps>= (props) => {
 const {children} = props;
  return (
    <button className="bg-transparent text-[#ffffff] text-xs sm:text-sm  md:text-base px-4  py-1 md:px-4 md:py-2 cursor-pointer flex items-center">
        {children}
    </button>
  )
}
