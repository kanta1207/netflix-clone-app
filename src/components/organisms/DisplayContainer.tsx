import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilState } from "recoil";
import { requestYouMightLikes } from "../../api/movieDataRequest";
import { selectedContentState } from "../../global/atoms";
import { Movies } from "../../types/apiTypes";
import { Display } from "../molecules/Display";

export const DisplayContainer = () => {
    const [selectedContent, setSelectedContent] =
    useRecoilState(selectedContentState);

     const fetchSimilarMovies = async () => {
    console.log("fetchSimilarMovies");
    const result = await axios.get(requestYouMightLikes(selectedContent.contentData?.id));
    console.log(requestYouMightLikes(selectedContent.contentData?.id))
    return result.data;
  };

  const { data } = useQuery<Movies>(["similarMovies"], fetchSimilarMovies);

  console.log(data?.results)
  return (
    <div className="w-full ml-[3%]">
        <Display moviesArray={data?.results} isSlideShow={false}/>
    {/* {data?.results.map((similarMovie) => (
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
    ))} */}
  </div>
  )
}
