import React, { useState } from 'react'

import { hexToRgbA } from '../../utils/constants';

const DownloadButton = ({ color, text, tooltip }) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button className={`relative group inline-block text-white hover:animate-[grow_600ms_ease_infinite_alternate] p-1.5 px-4 mr-2 rounded-full font-['PoppinsMedium']`}
      style={{
        background: color,
        boxShadow: isHovering ? `0px 0px 20px ${hexToRgbA(color)}` : 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`
             hidden w-max bg-black font-['PoppinsMedium'] text-sm text-white text-center rounded-[6px] p-1
             absolute z-40 top-[135%] left-[0%]
             group-hover:block 
             `}>{tooltip}</span>
      {text}
    </button>
  )
}

export default DownloadButton