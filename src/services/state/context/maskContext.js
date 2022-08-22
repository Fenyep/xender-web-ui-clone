import { createContext } from "react";

const MaskContext = createContext({
    showMask: true,
    showShadowMask: () => {},
    hideShadowMask: () => {},
});

export default MaskContext;