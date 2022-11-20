import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedContentState } from "../../global/atoms";
import { MovieData } from "../../types/apiTypes";

type Props = {
  moviesArray?: Array<MovieData>;
};

export const Slideshow: FC<Props> = memo((props) => {
  const { moviesArray } = props;
  const [selectedContent, setSelectedContent] =
  useRecoilState(selectedContentState);

  const navigate = useNavigate();

  const onClickMovie = (movie : MovieData) => {
    setSelectedContent({
      contentData: movie,
      contentId: movie.id,
    });
    navigate(`${movie.id}`);
  };

  return (
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
        {moviesArray?.map((movie) => (
          <div
            key={movie.id}
            className="z-90 relative w-[170px] sm:w-[230px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer hover:opacity-90 p-2"
            onClick={()=>onClickMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}
`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
  );
});
