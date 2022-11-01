import React, { FC, Suspense } from "react";
import { MovieData } from "../../types/apiTypes";
import { SlideShowLoading } from "../atoms/fallback/SlideShowLoading";

type Props = {
  moviesArray?: Array<MovieData>;
};

export const Slideshow: FC<Props> = (props) => {
  const { moviesArray } = props;

  return (
    <Suspense fallback={<SlideShowLoading/>}>
      <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
        {moviesArray?.map((movie) => (
          <div
            key={movie.id}
            className="w-[170px] sm:w-[230px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
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
};
