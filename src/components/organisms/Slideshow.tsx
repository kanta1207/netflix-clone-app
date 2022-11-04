import React, { FC, memo, Suspense } from "react";
import { MovieData } from "../../types/apiTypes";
import { SlideShowLoading } from "../atoms/fallback/SlideShowLoading";

type Props = {
  moviesArray?: Array<MovieData>;
  onOpenModal : (movieData : MovieData | undefined) => void;
};

export const Slideshow: FC<Props> = memo((props) => {
  const { moviesArray ,onOpenModal} = props;

  return (
    <Suspense fallback={<SlideShowLoading/>}>
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
        {moviesArray?.map((movie) => (
          <div
            key={movie.id}
            className="w-[170px] sm:w-[230px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer hover:opacity-90 p-2"
            onClick={()=>onOpenModal(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}
`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </Suspense>
  );
});
