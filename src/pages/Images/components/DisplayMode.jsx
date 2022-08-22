import React from 'react'

import { BsClock } from 'react-icons/bs'; 
import { AiOutlineCamera } from 'react-icons/ai';

const DisplayMode = ({ displayMode, setDisplayByFolder, setDisplayMode, isClock, setIsClock }) => {

  const handleSetPhotoCam = () => {
    setDisplayMode('photocam');
    setDisplayByFolder(false);
  }

  const handleSetGallerie = () => {
    setDisplayMode('gallerie'); 
    setDisplayByFolder(true);
  }

  return (
    <div className={`w-[calc(100vw - 4vw)] border py-5 flex items-center justify-between`} 
      style={{
        width: "calc(100vw - 4vw)",
      }}
    >
        <div></div>
        <div className={`font-['PoppinsMedium'] text-sm`}>
          <span 
            className={`p-2 select-none rounded-l-lg border ${displayMode === 'photocam' ? 'bg-[#888888] text-white' : 'bg-white text-[#888888]'} m-o hover:cursor-pointer`}
            onClick={() => handleSetPhotoCam()}
          >Appareil photo</span>
          <span 
            className={`p-2 select-none rounded-r-lg border ${displayMode === 'gallerie' ? 'bg-[#888888] text-white' : 'bg-white text-[#888888]'} m-0 hover:cursor-pointer`}
            onClick={() => handleSetGallerie()}
          >Gallerie</span>
        </div>
        {displayMode === 'photocam' ? 
          (<div className='z-30 w-14 h-7 flex items-center mr-8'>
            <span 
              className={`h-9 rounded-l-lg border hover:cursor-pointer ${isClock === true ? 'bg-[#888888]' : 'bg-white'} flex items-center px-2`}
              onClick={() => setIsClock(true)}
            >
              <BsClock size={20}
                color={isClock === true ? 'white' : '#888888'}
              />
            </span>
            <span 
              className={`h-9 rounded-r-lg border hover:cursor-pointer ${isClock === false ? 'bg-[#888888]' : 'bg-white'} flex items-center px-1.5`}
              onClick={() => setIsClock(false)}
            >
              <AiOutlineCamera size={25}
                color={isClock === false ? 'white' : '#888888'}
              />
            </span>
          </div>) 
        : (<div className='w-14 h-7 mr-8'></div>)}
      </div>
  )
}

export default DisplayMode