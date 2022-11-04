import { ReactNode } from "react";

export type ButtonProps = {
    onClick? : React.MouseEventHandler<HTMLButtonElement> | undefined;
    children : ReactNode;
}