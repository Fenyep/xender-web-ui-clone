import React, { useState } from 'react'
import { useContext } from 'react';
import { ConfirmationModalContext } from '../context/confirmationModalContext';
import MaskContext from '../context/maskContext'

const MaskProvider = ({children}) => {
  // Set local state
  const [showMask, setShowMask] = useState(true);

  const { closeConfirmationModal } = useContext(ConfirmationModalContext)

  const handleShowMask = () => {
    setShowMask(true)
  }

  const handleHideMask = () => {
    setShowMask(false)
    closeConfirmationModal()
  }

  const contextValue = {
    showMask,
    showShadowMask: handleShowMask,
    hideShadowMask: handleHideMask,
  }
  
  return (
    <MaskContext.Provider value={contextValue}>
        {children}
    </MaskContext.Provider>
  )
}

export default MaskProvider