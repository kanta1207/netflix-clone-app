import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { memo, Suspense, useEffect, useState } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

import { movieDataRequests } from "../../api/movieDataRequest";
import { PopularMovies } from "../../types/apiTypes";
import { OutlineButton } from "../atoms/buttons/OutlineButton";
import { WhiteButton } from "../atoms/buttons/WhiteButton";

export const TopBanner = memo(() => {
  const [movieIndex, setMovieIndex] = useState(0);
  console.log("topBanner");

  const fetchPopularMovies = async () => {
    console.log("fetchPopularMovies");
    const result = await axios.get<PopularMovies>(
      movieDataRequests.requestPopular
    );
    return result.data;
  };

  const { data } = useQuery<PopularMovies>(
    ["popularMovies"],
    fetchPopularMovies
  );

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
      movieIndex < data.results.length
        ? setMovieIndex(movieIndex + 1)
        : setMovieIndex(0);
  };

  return (
    <>
      <Suspense fallback={"Loading...."}>
        <div className="w-full h-[25%] text-[#ffffff]">
          <div className="w-full h-full">
            <div className="absolute w-full h-[25%] bg-gradient-to-b from-[#3D3837]"></div>
            <img
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original/${data?.results[movieIndex].backdrop_path}
`}
              alt=""
            />
            <div className="absolute top-[17%] w-full flex justify-between">
              <AiOutlineDoubleLeft
                color="#ffffff"
                size=""
                onClick={onClickLeft}
                className="cursor-pointer"
              />
              <AiOutlineDoubleRight
                color="#ffffff"
                size=""
                onClick={onClickRight}
                className="cursor-pointer"
              />
            </div>
            <div className="absolute top-[20%] md:top-[30%] mx-3">
              <h1 className="text-2xl md:text-5xl font-bold my-3">
                {data?.results[movieIndex].title}
              </h1>
              <div className="flex space-x-3">
                <WhiteButton>
                  <BsPlayFill size="2rem" />
                  Play
                </WhiteButton>
                <OutlineButton>
                  <AiOutlineInfoCircle size="1.5rem"/>
                  More Info
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
});
