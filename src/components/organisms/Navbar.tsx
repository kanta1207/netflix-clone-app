import { memo, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../atoms/Button";
import { NetflixLogo } from "../atoms/logos/NetflixLogo";

export const Navbar = memo(() => {
  const [offSetHeight, setOffSetHeight] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  console.log("navbar");
  const location = useLocation();
  console.log(location);

  // const isNavBarOnTop = useCallback(()=>window.scrollY === 0,[])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = window.scrollY;
      // console.log(position)
      if (position === 0) setIsAtTop(true);
      else if (position > 1 && isAtTop) setIsAtTop(false);
    });
  }, []);

  // useEffect(() => {
  //   setOffSetHeight(document.body.offsetHeight);
  // }, [location]);

  // console.log(offSetHeight)
  return (
    <div className={`absolute h-[1594px] w-full`}>
      <div className="sticky top-0 w-full z-[90]">
        <div className={`absolute w-full bg-[#181818] ${isAtTop ?  "opacity-0" : "opacity-100"} opacity-0 h-[45px] md:h-[70px]`}></div>
        <div className="absolute w-full p-4">
          <div className="flex justify-between items-center">
            <NetflixLogo mediaQueries="text-sm md:text-2xl xl:text-3xl" />
            <div className="flex space-x-2 md:space-x-4">
              {location.pathname === "/" ? (
                <></>
              ) : (
                <Button
                  buttonType="outline"
                  mediaQueries="text-[0.5rem] sm:text-xs md:text-base px-2 md:px-3 py-1 md:px-4 md:py-2"
                >
                  Sign Up
                </Button>
              )}
              <Button
                buttonType="red"
                mediaQueries="text-[0.5rem] sm:text-xs md:text-base px-2 md:px-3 py-1 md:px-4 md:py-2"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
