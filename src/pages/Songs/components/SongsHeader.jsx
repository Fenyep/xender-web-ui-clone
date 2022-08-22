import React from 'react'

const SongsHeader = () => {
  return (
    <div className={`border py-5 px-4 flex items-center justify-between`} 
      style={{
        width: "calc(100vw - 4vw)",
      }}
    >
        <div className=''></div>
        <div className={`font-['PoppinsMedium'] text-sm`}>
          <span 
            className={`p-2 select-none rounded-lg bg-[#888888] text-white`}
          >Musique</span>
        </div>
        <div className=''></div>
    </div>
  )
}

export default SongsHeader