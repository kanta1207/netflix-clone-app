import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC, memo} from "react";
import { Movies } from "../../types/apiTypes";
import { Slideshow } from "./Slideshow";

type Props = {
  title: string;
  endPoint: string;
};

export const RowContainer: FC<Props> = memo((props) => {
  const { title, endPoint } = props;

  const fetchMovies = async () => {
    console.log("fetchPopularMovies");
    const result = await axios.get<Movies>(endPoint);
    console.log(result.data.results);
    return result.data;
  };

  const { data } = useQuery<Movies>([title], fetchMovies);

  return (
    <div className="my-2 w-full">
      <h2 className="text-[#ffffff] font-bold md:text-xl p-4">{title}</h2>
      <Slideshow moviesArray={data?.results} />
    </div>
  );
});
