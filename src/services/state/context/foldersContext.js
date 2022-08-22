const { createContext } = require("react");

export const FoldersContext = createContext({
    files: [],
    phoneMemory: [],
    sdCard: [],
})