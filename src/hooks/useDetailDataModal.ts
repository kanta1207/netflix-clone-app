import { MovieData } from './../types/apiTypes';
import { useState } from 'react';
export const useDetailDataModal = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [movieData,setMovieData] = useState<MovieData>()

    const onOpenModal = (movieData : MovieData | undefined) => {
        setMovieData(movieData);
        setIsOpen(true);
    };

    const onCloseModal = () => {
        setIsOpen(false);
        setMovieData(undefined);
    }
        
    return {isOpen,movieData,onOpenModal,onCloseModal}
}