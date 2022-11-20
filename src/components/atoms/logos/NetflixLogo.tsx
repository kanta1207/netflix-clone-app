import { FC } from "react";

type Props = {
  mediaQueries : string;
}

const baseStyle = "text-[#E50815] font-bold cursor-pointer"

export const NetflixLogo : FC<Props> = (props) => {
  const {mediaQueries} = props;
  return (
    <div className={`${baseStyle} , ${mediaQueries} `}>NETFLIX</div>
  ) 
}
