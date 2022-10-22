import { FC } from "react"
import { ButtonProps } from "../../../types/propsTypes"

export const WhiteButton :FC<ButtonProps>= (props) => {
 const {children} = props;
  return (
    <button className="bg-[#ffffff] text-[#000000] px-2  py-1 md:px-4 md:py-2 cursor-pointer">
        {children}
    </button>
  )
}
