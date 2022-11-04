import { FC, memo } from "react";
import { MovieData } from "../../types/apiTypes";

type Props = {
  movie?: MovieData;
  isOpen: boolean;
  onClose: () => void;
};

export const DetailDataModal: FC<Props> = memo((props) => {
  const { isOpen, movie, onClose } = props;
  return (
    <>
      {isOpen ? (
        <div className="absolute top-0 w-full h-[140%] z-[100]">
          <div className="w-full h-[110%] bg-[#181818] opacity-50"></div>
          <div className="absolute top-0 w-[95%] h-full mt-8 mx-3">
            <div className="w-full h-full bg-[#181818] rounded-md">
              <div className="w-full"></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt="moviePic"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      ;
    </>
  );
});
