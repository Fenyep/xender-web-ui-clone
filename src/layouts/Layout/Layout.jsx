import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { MenuSidebar } from '../Menu/MenuSidebar';
import { Header } from '../Header/Header';
import MaskContext from '../../services/state/context/maskContext';
import ShadowMask from '../../components/shadowMask/ShadowMask';
// import ConnectionWarning from '../../components/connectionWarning/ConnectionWarning';
import XenderModal from '../../components/modals/XenderModal/XenderModal';
import { XenderModalContext } from '../../services/state/context/xenderModalContext';
import { ConfirmationModalContext } from '../../services/state/context/confirmationModalContext';
import ConfirmationModal from '../../components/modals/ConfirmationModal/ConfirmationModal.jsx';
import InformationDisplayModal from '../../components/modals/InformationDisplayModal/InformationDisplayModal';

const Layout = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true })
  }, [])

  const { showMask } = useContext(MaskContext);
  const { showXenderModal } = useContext(XenderModalContext);
  const { showConfirmationModal } = useContext(ConfirmationModalContext);

  return (
    <>
      
      {/* <ConnectionWarning /> */}
      <div style={{ display : "flex", position: 'relative' }}>
          {<MenuSidebar />}
          {showXenderModal ? <XenderModal /> : null}
          {showConfirmationModal ? <ConfirmationModal /> : null}
          <div style={{display: "flex", flexDirection: "column", width: "calc(100vw-8vw)", height: "100vh"}} className={``}>
            <Header />
            <Outlet />
          </div>
      </div>
      {showMask ? <ShadowMask /> : null}
      { <InformationDisplayModal /> }
    </>
  )
}

export default Layout