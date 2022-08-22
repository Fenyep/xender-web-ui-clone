import React, { memo, useState, useEffect } from 'react';
import styles from './css/header.module.css';

import { AiOutlinePoweroff, AiOutlineCopy } from 'react-icons/ai';
import { BiRename } from 'react-icons/bi';
import { MdContentPaste } from 'react-icons/md';
import { TbCut } from 'react-icons/tb';
import { BsFolderPlus } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';
import { FiDownload } from 'react-icons/fi';
import { GoLink } from 'react-icons/go';
import { deactivatedColor, deactivatedColor2, headerIconPrimaryColor, homeIconHoverBackgroundColor } from '../../utils/constants';
import DownloadButton from '../../components/buttons/DownloadButton';
import { useLocation } from 'react-router-dom';

const MemoizedHeader = () => {

  const location = useLocation();

  const [downloadButtonInfos, setDownloadButtonInfos] = useState({
    color: '',
    text: '',
    tooltip: ''
  })

  useEffect(() => {
    switch(location.pathname) {
      case '/images':
        setDownloadButtonInfos({color:'#E25032', text: 'Download Image', tooltip: 'Download the image on the phone'})
        break
      case '/videos':
        setDownloadButtonInfos({color:'#5596F3', text: 'Download Video', tooltip: 'Download the video on the phone'})
        break
      case '/songs':
        setDownloadButtonInfos({color:'#EFBD5F', text: 'Download Music', tooltip: 'Download the music on the phone'})
        break
      case '/files':
        setDownloadButtonInfos({color:'#5BAF4F', text: 'Download FIles', tooltip: 'Download the file on the phone'})
        break
      case '/applications':
        setDownloadButtonInfos({color:'#E02963', text: 'Install application', tooltip: 'Install the application on the phone'})
        break
      case '/folders':
        setDownloadButtonInfos({color:'#9C27B0', text: 'Download Document', tooltip: 'Download the document on the phone'})
        break
      default:
        break
    }
  }, [location.pathname])

  return (
    <header 
      className={`flex items-center ${location.pathname === '/' ? 'justify-end' : 'justify-between' } p-[15px]`} 
      style={{
        width: "calc(100vw - 4vw)",
        height: "7vh",
        borderBottom: "3px solid #E6E6E6"
      }}>

        {location.pathname === '/' ? 
          null :
          <div className='flex justify-between items-center'>
            
            <DownloadButton color={downloadButtonInfos.color} text={downloadButtonInfos.text} tooltip={downloadButtonInfos.tooltip} />
            
            <span className={`relative group inline-block border mr-2 rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor}] border-[${deactivatedColor}]`}>
              <span className={`
                hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                group-hover:block 
                after:absolute after:bottom-[80%] after:bg-red-700  
                after:left-[80%] after:ml-[-5px] after:border-[5px] after:border-solid
                after:border-black after:rotate-45`}>Download</span>
             <FiDownload 
                  color={deactivatedColor}
                  size={19} 
                />
            </span>
            {location.pathname === '/folders' ? (
              <span className='flex'>
                <span
                  className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
                  <span className={`
                    hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                    absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                    group-hover:block 
                    after:absolute after:bottom-[80%] after:bg-red-700  
                    after:left-[80%] after:ml-[-5px] after:border-[5px] after:border-solid
                    after:border-black after:rotate-45`}>New folder</span>
                  <BsFolderPlus
                    size={19}
                  />
                </span>
                <span
                className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
                <span className={`
                  hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                  absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                  group-hover:block 
                  after:absolute after:bottom-[80%] after:bg-red-700  
                  after:left-[80%] after:ml-[-5px] after:border-[5px] after:border-solid
                  after:border-black after:rotate-45`}>Rename</span>
                <BiRename
                  color={deactivatedColor}
                  size={19}
                />
                </span>
                <span
                className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
                <span className={`
                  hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                  absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                  group-hover:block 
                  after:absolute after:bottom-[80%] after:bg-red-700  
                  after:left-[55%] after:ml-[-5px] after:border-[5px] after:border-solid
                  after:border-black after:rotate-45`}>Cut</span>
                <TbCut
                  color={deactivatedColor}
                  size={19}
                />
                </span>
                <span
                  className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
                  <span className={`
                    hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                    absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                    group-hover:block 
                    after:absolute after:bottom-[80%] after:bg-red-700  
                    after:left-[65%] after:ml-[-5px] after:border-[5px] after:border-solid
                    after:border-black after:rotate-45`}>Copy</span>
                  <AiOutlineCopy
                    color={deactivatedColor}
                    size={19}
                  />
                </span>
                <span
                className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
                <span className={`
                  hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                  absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                  group-hover:block 
                  after:absolute after:bottom-[80%] after:bg-red-700  
                  after:left-[68%] after:ml-[-5px] after:border-[5px] after:border-solid
                  after:border-black after:rotate-45`}>Paste</span>
                <MdContentPaste
                  color={deactivatedColor}
                  size={19}
                />
                </span>
              </span>
            ) : null}
            <span
              data-for="refresh" data-tip="refresh"
              className={`relative group inline-block border mr-2 hover:bg-[#5BAF4F] hover:border-black rounded-full p-1.5 hover:cursor-pointer text-[${deactivatedColor2}] border-[${deactivatedColor2}]`}>
              <span className={`
                hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
                absolute z-40 top-[135%] right-[-00%] ml-[-60px]
                group-hover:block 
                after:absolute after:bottom-[80%] after:bg-red-700  
                after:left-[75%] after:ml-[-5px] after:border-[5px] after:border-solid
                after:border-black after:rotate-45`}>Refresh</span>
              <GrPowerCycle
                size={19}
              />
            </span>
          </div>
        }
        <div className={styles.header_rightSide_icons_container}>
          <span className={`text-[${headerIconPrimaryColor}] relative group inline-block`}>
          <span className={`
             hidden bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
             absolute z-40 top-[135%] right-[-00%] ml-[-60px]
             group-hover:block 
             after:absolute after:bottom-[80%] after:bg-red-700  
             after:left-[80%] after:ml-[-5px] after:border-[5px] after:border-solid
             after:border-black after:rotate-45`}>Liaison</span>

            <GoLink 
              onMouseOut={({target}) => target.style.color=`${headerIconPrimaryColor}`} 
              size={30} 
              onMouseOver={({target}) => target.style.color=`${homeIconHoverBackgroundColor}`} />
          </span>
          <span className={`text-[${headerIconPrimaryColor}] relative group inline-block`} 
          >
            <span className={`
             hidden  bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
             absolute z-40 top-[150%] left-[-45%] ml-[-60px]
             group-hover:block 
             after:absolute after:bottom-[80%] after:bg-red-700  
             after:left-[81%] after:ml-[-5px] after:border-[5px] after:border-solid
             after:border-black after:rotate-45`}>Deconnexion</span>

            <AiOutlinePoweroff 
              onMouseOut={({target}) => target.style.color=`${headerIconPrimaryColor}`} 
              size={25} 
              onMouseOver={({target}) => target.style.color=`${homeIconHoverBackgroundColor}`} />
          </span>
        </div>
    </header>
  )
}

export const Header = memo(MemoizedHeader);