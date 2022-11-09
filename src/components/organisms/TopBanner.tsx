import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { memo, Suspense, useState } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { requests } from "../../api/movieDataRequest";
import { selectedContentState } from "../../global/atoms";
import { MovieData, Movies } from "../../types/apiTypes";
import { OutlineButton } from "../atoms/buttons/OutlineButton";
import { WhiteButton } from "../atoms/buttons/WhiteButton";
import { TopBannerLoading } from "../atoms/fallback/TopBannerLoading";


export const TopBanner = memo(() => {
  const [movieIndex, setMovieIndex] = useState(0);
  const [selectedContent,setSelectedContent] = useRecoilState(selectedContentState)
  const navigate = useNavigate();

  console.log("topBanner");

  const fetchPopularMovies = async () => {
    console.log("fetchTopBannerMovies");
    const result = await axios.get<Movies>(requests.requestPopularMovies);
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

  //pass the movieData to Detail Info Page
  const onClickMoreInfo = () => {
    setSelectedContent({contentData : data?.results[movieIndex] , contentId : data?.results[movieIndex].id})
    navigate(`${data?.results[movieIndex].id}`);
  }

  return (
    <Suspense fallback={<TopBannerLoading />}>
      <div className="w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[578px] text-[#ffffff]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[15%] bg-gradient-to-b from-[#3D3837]"></div>
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
          <div className="absolute top-[15%] sm:top-[25%] md:top-[25%] lg:top-[20%] xl:top-[40%] mx-[3%] lg:mx-8  space-y-[5%] md:space-y-[5%]">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold">
              {data?.results[movieIndex].title}
            </h1>
            <div className="flex space-x-3 my-2">
              <WhiteButton>
                <BsPlayFill />
                Play
              </WhiteButton>
              <OutlineButton onClick={()=>onClickMoreInfo()}>
                <AiOutlineInfoCircle/>
                More Info
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
});
