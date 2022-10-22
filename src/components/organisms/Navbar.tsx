import { OutlineButton } from "../atoms/buttons/OutlineButton"
import { RedButton } from "../atoms/buttons/RedButton"
import { TransparentButton } from "../atoms/buttons/TrasparentButton"
import { NetflixLogo } from "../atoms/logos/NetflixLogo"

export const Navbar = () => {
  return (
    <div className="absolute w-full top-0 flex justify-between items-center p-4">
      <div className="">
         <NetflixLogo />
      </div>
        <div className="space-x-5">
          <OutlineButton>Sign Up</OutlineButton>
          <RedButton>Sign In</RedButton>
        </div>
    </div>
  )
}
