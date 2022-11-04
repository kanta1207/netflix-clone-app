import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC, memo} from "react";
import { MovieData, Movies } from "../../types/apiTypes";
import { Slideshow } from "./Slideshow";

type Props = {
  title: string;
  endPoint: string;
  onOpenMoal : (movieData : MovieData | undefined) => void;
};

export const RowContainer: FC<Props> = memo((props) => {
  const { title, endPoint ,onOpenMoal} = props;

  const fetchMovies = async () => {
    console.log("fetchPopularMovies");
    const result = await axios.get<Movies>(endPoint);
    console.log(result.data.results);
    return result.data;
  };

  const { data } = useQuery<Movies>([title], fetchMovies);

  return (
    <div className="w-full">
      <h2 className="text-[#ffffff] font-bold md:text-xl p-2">{title}</h2>
      <Slideshow moviesArray={data?.results} onOpenModal={onOpenMoal}/>
    </div>
  );
});
