import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { memo, Suspense, useState } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

import { movieDataRequests } from "../../api/movieDataRequest";
import { Movies } from "../../types/apiTypes";
import { OutlineButton } from "../atoms/buttons/OutlineButton";
import { WhiteButton } from "../atoms/buttons/WhiteButton";

export const TopBanner = memo(() => {
  const [movieIndex, setMovieIndex] = useState(0);
  console.log("topBanner");

  const fetchPopularMovies = async () => {
    console.log("fetchPopularMovies");
    const result = await axios.get<Movies>(movieDataRequests.requestPopular);
    console.log(result.data.results);
    return result.data;
  };

  const { data } = useQuery<Movies>(["popularMovies"], fetchPopularMovies);

  const onClickLeft = () => {
    console.log("onClickLeft");
    if (data !== undefined)
      movieIndex > 0
        ? setMovieIndex(movieIndex - 1)
        : setMovieIndex(data.results.length - 1);
  };

  const onClickRight = () => {
    console.log("onClickRight");
    if (data !== undefined)
      movieIndex < data.results.length - 1
        ? setMovieIndex(movieIndex + 1)
        : setMovieIndex(0);
  };

  return (
    <>
      <Suspense fallback={<p className="text-white">Loading</p>}>
        <div className="w-full h-[25%] text-[#ffffff]">
          <div className="w-full h-full">
            <div className="absolute w-full h-[25%] bg-gradient-to-b from-[#3D3837]"></div>
            <img
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original/${data?.results[movieIndex].backdrop_path}
`}
              alt=""
            />
            <div className="absolute top-[17%] sm:top-[23%] md:top-[30%] lg:top-[35%] w-full flex justify-between">
              <AiOutlineDoubleLeft
                color="#ffffff"
                size=""
                onClick={onClickLeft}
                className="cursor-pointer m-2 opacity-20 hover:opacity-80 bg-[#3D3837]"
              />
              <AiOutlineDoubleRight
                color="#ffffff"
                size=""
                onClick={onClickRight}
                className="cursor-pointer opacity-20 hover:opacity-80 bg-[#3D3837]"
              />
            </div>
            <div className="absolute top-[15%] sm:top-[20%] md:top-[23%] lg:top-[40%] mx-5">
              <h1 className="text-1xl sm:text-2xl md:text-5xl font-bold my-3">
                {data?.results[movieIndex].title}
              </h1>
              <div className="flex space-x-3 my-2">
                <WhiteButton>
                  <BsPlayFill />
                  Play
                </WhiteButton>
                <OutlineButton>
                  <AiOutlineInfoCircle />
                  More Info
                </OutlineButton>
              </div>
              <p className="w-full text-[50%] sm:text-xs  max-w-[75%] sm:max-w-[70%] md:max-w-[50%] opacity-10 hover:opacity-75">
                {data?.results[movieIndex].overview}
              </p>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
});
