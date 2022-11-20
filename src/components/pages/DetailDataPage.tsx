import { FC, memo, Suspense } from "react";
import { MovieData, Movies } from "../../types/apiTypes";
import { IoIosClose } from "react-icons/io";
import { WhiteButton } from "../atoms/buttons/WhiteButton";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { requestYouMightLikes } from "../../api/movieDataRequest";
import { useRecoilState } from "recoil";
import { selectedContentState } from "../../global/atoms";
import { useNavigate } from "react-router-dom";


export const DetailDataPage  = memo(() => {
  console.log("detailDataPage");
  const navigate = useNavigate()
  const [selectedContent,setSelectedContent] = useRecoilState(selectedContentState)

  const onClickBack = () => {
    navigate(-1)
    setSelectedContent({contentData : undefined, contentId : undefined});
  }

  console.log(selectedContent.contentData)
  // const fetchSimilarMovies = async () => {
  //   console.log("fetchSimilarMovies");
  //   const result = await axios.get(requestYouMightLikes(selectedContent.contentData?.id));
  //   return result.data;
  // };

  // const { data } = useQuery<Movies>(["similarMovies"], fetchSimilarMovies);

  return (
    <>
    <div className="absolute top-0 w-full h-[200%] z-[100]">
      <div className="w-full h-[100%] bg-[#181818] opacity-50"></div>
      <div className="absolute top-0 left-[2.5%] md:left-[10%] lg:left-[2.5%] xl:left-[20%] w-[95%] md:w-[80%] lg:w-[95%] xl:w-[60%] h-[99%] mt-8">
        <div className="w-full h-full bg-[#181818] text-[#ffffff] rounded-lg">
          <div className="flex justify-end">
            <IoIosClose
              size="2.5rem"
              onClick={()=>onClickBack()}
              color={"#ffffff"}
              className="cursor-pointer absolute z-[100] opacity-60 hover:opacity-100"
            />
          </div>
          <div className="w-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${selectedContent.contentData?.backdrop_path}`}
              alt="movieImg"
              className="object-cover rounded-lg"
            />
            <div className="absolute top-0 h-[16%] sm:h-[25%] md:h-[18%] lg:h-[22%] xl:h-[35%] w-full bg-gradient-to-t from-[#181818]"></div>
          </div>
          <div className="absolute top-[11%] sm:top-[15%] md:top-[11%] lg:top-[14%] xl:top-[20%] mx-3 md:mx-6 lg:mx-10">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold my-3">
              {selectedContent.contentData?.title === undefined ? selectedContent.contentData?.name : selectedContent.contentData.title}
            </h1>
            <div className="flex my-2 md:my-6 lg:my-8 xl:my-10 space-x-2 xl:space-x-5">
              <WhiteButton>
                <BsPlayFill />
                Play
              </WhiteButton>
              <AiOutlinePlusCircle
                size="2rem"
                className="cursor-pointer hover:opacity-60"
              />
              <AiOutlineLike
                size="2rem"
                className="cursor-pointer hover:opacity-60"
              />
            </div>
          </div>
          <div className="w-full absolute top-[18%] md:top-[17%] lg:top-[20%] xl:top-[30%]">
            <div className="m-3 space-y-3">
              <p className="text-md">{selectedContent.contentData?.release_date?.slice(0, 4)}</p>
              <p className="text-xs w-[95%] lg:w-[60%] ">{selectedContent.contentData?.overview}</p>
            </div>
            <div className="m-3 space-y-2">
              <h2 className="text-1xl font-bold">More Like This</h2>
              {/* <Suspense>
                <div className="w-full ml-[3%]">
                  {data?.results.map((similarMovie) => (
                    <div
                      key={similarMovie.id}
                      className="w-[47%] inline-block cursor-pointer hover:opacity-90 p-[1%]"
                      // onClick={() => onOpenModal(similarMovie)}
                    >
                      <img
                        className="rounded-sm"
                        src={`https://image.tmdb.org/t/p/w500/${similarMovie.backdrop_path}
            `}
                        alt={similarMovie.title}
                      />
                    </div>
                  ))}
                </div>
              </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
});
