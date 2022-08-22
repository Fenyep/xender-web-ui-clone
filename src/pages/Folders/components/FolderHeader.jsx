import React from 'react'

import { BiSearch } from 'react-icons/bi';

const FoldersHeader = ({ selectedRepository }) => {

  return (
    <div className={`border py-2 px-4 flex items-center justify-between`} 
      style={{
        width: "calc(100vw - 4vw)",
      }}
    >
        <div className={`font-['PoppinsMedium'] text-sm`}>
          <span 
            className={`text-[1rem] font-['PoppinsMedium']`}
          >{selectedRepository}</span>
        </div>
        <div className={`relative border-2 rounded-full flex`}>
          <span className={` w-1/12 mx-1 flex items-center justify-center`}>
            <BiSearch size={27} color="grey" />
          </span>
          <input type="text" className='z-30 w-11/12 focus:outline-none rounded-r-full text-black py-1.5' />
        </div>
      </div>
  )
}

export default FoldersHeader