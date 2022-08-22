import React, { useState } from 'react'
import { XenderModalContext } from '../context/xenderModalContext'

const XenderModalProvider = ({children}) => {

    const [xenderModal, setXenderModal] = useState(false);

    const handleShowXenderModal = () => {
        setXenderModal(true);
    }

    const handleHideXenderModal = () => {
        setXenderModal(false);
    }

    const contextValue = {
        showXenderModal: xenderModal,
        openXenderModal: handleShowXenderModal,
        closeXenderModal: handleHideXenderModal,
    }
  return (
    <XenderModalContext.Provider value={contextValue}>
        {children}
    </XenderModalContext.Provider>
  )
}

export default XenderModalProvider