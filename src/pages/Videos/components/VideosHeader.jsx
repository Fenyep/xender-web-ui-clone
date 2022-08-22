import React from 'react'

const VideosHeader = () => {

  return (
    <div className={`border py-5 px-4 flex items-center justify-between`} 
      style={{
        width: "calc(100vw - 4vw)",
      }}
    >
        <div className='flex items-baseline'>
          <input type='checkbox' /> <span className={`ml-1 font-['PoppinsMedium']`}>Select all</span>
        </div>
        <div className={`font-['PoppinsMedium'] text-sm`}>
          <span 
            className={`p-2 select-none rounded-lg bg-[#888888] text-white`}
          >Videos</span>
        </div>
        <div className=''></div>
      </div>
  )
}

export default VideosHeader