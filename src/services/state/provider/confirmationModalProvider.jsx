import React, { useState } from 'react'
import { ConfirmationModalContext } from '../context/confirmationModalContext';

const ConfirmationModalProvider = ({children}) => {

    const [confirmationModal, setConfirmationModal] = useState(true);

    const handleShowConfirmationModal = () => {
        setConfirmationModal(true);
    }

    const handleHideConfirmationModal = () => {
        setConfirmationModal(false);
    }

    const contextValue = {
        showConfirmationModal: confirmationModal,
        openConfirmationModal: handleShowConfirmationModal,
        closeConfirmationModal: handleHideConfirmationModal,
    }
  return (
    <ConfirmationModalContext.Provider value={contextValue}>
        {children}
    </ConfirmationModalContext.Provider>
  )
}

export default ConfirmationModalProvider