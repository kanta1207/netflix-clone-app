import { atom } from "recoil";
import { SelectedContentAtom } from "./types";

export const selectedContentState = atom<SelectedContentAtom>(
    {key : "selectedContent",
    default : {contentData : undefined,contentId : undefined}
}
)