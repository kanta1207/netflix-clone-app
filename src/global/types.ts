import { MovieData } from './../types/apiTypes';

export type SelectedContentAtom = {
    contentData : MovieData | undefined;
    contentId : number | undefined;
}