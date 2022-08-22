import { createContext } from "react";

export const ConfirmationModalContext = createContext({
    showConfirmationModal: true,
    openConfirmationModal: () => {},
    closeConfirmationModal: () => {},
});