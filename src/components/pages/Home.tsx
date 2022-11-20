import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";

export const Home = () => {
  const navigate = useNavigate();

  const onClickGetStarted = () => {
    navigate("/browse");
  };

  return (
    <div>
      <div className="w-full">
        <div></div>
        <div className="absolute text-[#ffffff] text- text-center w-[70%] top-[20%] left-[15%] space-y-5">
          <h2 className="font-bold text-2xl">
            Unlimited movies, TV shows, and anime.
          </h2>
          <p className="">Watch anywhere. Cancel anytime.</p>
          <p className="">
            Ready to watch? Enter your email and password to create or restart
            your membership.
          </p>
          <div className="py-5 space-y-10">
            <input
              type="emails"
              placeholder="Email address"
              className="text-[#000000] outline-none rounded-sm w-full py-2 px-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-[#000000] outline-none rounded-sm w-full py-2 px-1"
            />
            <div className="flex items-center justify-center">
              <Button
                buttonType="red"
                mediaQueries="text-[md] sm:text-sm md:text-base px-4 py-2 md:px-4 md:py-2"
                onClick={() => onClickGetStarted()}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// <button className="bg-[#E50815] text-[#ffffff] font-bold text-[md] sm:text-sm md:text-base px-4 md:px-4 md:py-2 cursor-pointer flex items-center">
