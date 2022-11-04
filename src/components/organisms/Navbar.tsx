import { memo } from "react";
import { RedButton } from "../atoms/buttons/RedButton";
import { TransparentButton } from "../atoms/buttons/TrasparentButton";
import { NetflixLogo } from "../atoms/logos/NetflixLogo";

export const Navbar = memo(() => {
  console.log("navbar");
  return (
    <div className="absolute w-full z-[90] flex justify-between items-center p-4">
      <NetflixLogo />
      <div className="flex">
        <TransparentButton>Sign Up</TransparentButton>
        <RedButton>Sign In</RedButton>
      </div>
    </div>
  );
});
