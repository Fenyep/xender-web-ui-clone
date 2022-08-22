import { createContext } from "react";

export const XenderModalContext = createContext({
    showXenderModal: false,
    openXenderModal: () => {},
    closeXenderModal: () => {},
});