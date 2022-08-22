import React, { memo, useContext } from 'react'
import styles from './css/menu_sidebar.module.css';
import MenuItem from './menuItem/MenuItem';
import { Link } from 'react-router-dom';
import { homeIconHoverBackgroundColor, iconPrimaryColor } from '../../utils/constants';
import XenderLogo from '../../assets/images/xender_logo.png';

import { IoImageOutline, IoGridOutline } from 'react-icons/io5';
import { VscHome } from 'react-icons/vsc';
import { BsPlayBtn, BsFolder2 } from 'react-icons/bs';
import { TbMusic } from 'react-icons/tb'; 
import { RiFileList2Line } from 'react-icons/ri';
// import MaskContext from '../../services/state/context/maskContext';
import { useLocation } from 'react-router-dom';
import { XenderModalContext } from '../../services/state/context/xenderModalContext';

const Sidebar = () => {

  // const { showShadowMask } = useContext(MaskContext);
  const { openXenderModal } = useContext(XenderModalContext);

  const location = useLocation();

  const handleShowMaskAndModal = () => {
    // showShadowMask();
    openXenderModal();
  }

  return (
    <aside className={styles.menu_container}>
        <div className={`w-full h-[7vh] flex justify-center items-center hover:cursor-pointer`}
          onClick={() => handleShowMaskAndModal()}
        >
          <img className='rounded-full p-3' src={XenderLogo} alt="xender logo" />
        </div>
        <nav className={styles.menu_nav}>
          <Link to="/">
            <MenuItem backgroundColor={location.pathname === "/" ? homeIconHoverBackgroundColor : null } label='Accueil'>
              <VscHome color={location.pathname === "/" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>

          <Link to="/images">
            <MenuItem backgroundColor={location.pathname === "/images" ? homeIconHoverBackgroundColor : null }  label='Images'>
              <IoImageOutline color={location.pathname === "/images" ? "#FFFFFF" : iconPrimaryColor} size={40}  />
            </MenuItem>
          </Link>

          <Link to='/videos'>
            <MenuItem backgroundColor={location.pathname === "/videos" ? homeIconHoverBackgroundColor : null }  label='Vidéos'>
              <BsPlayBtn color={location.pathname === "/videos" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>

          <Link to="/songs">
            <MenuItem backgroundColor={location.pathname === "/songs" ? homeIconHoverBackgroundColor : null }  label='Musiques'>
              <TbMusic color={location.pathname === "/songs" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>

          <Link to="/files">
            <MenuItem backgroundColor={location.pathname === "/files" ? homeIconHoverBackgroundColor : null }  label='Documents'>
              <RiFileList2Line color={location.pathname === "/files" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>

          <Link to="/applications">
            <MenuItem backgroundColor={location.pathname === "/applications" ? homeIconHoverBackgroundColor : null }  label='Applications'>
              <IoGridOutline color={location.pathname === "/applications" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>
          
          <Link to="/folders">
            <MenuItem backgroundColor={location.pathname === "/folders" ? homeIconHoverBackgroundColor : null }  label='Fichiers'>
              <BsFolder2 color={location.pathname === "/folders" ? "#FFFFFF" : iconPrimaryColor} size={40} />
            </MenuItem>
          </Link>
        </nav>
    </aside>
  )
}

export const MenuSidebar = memo(Sidebar);
