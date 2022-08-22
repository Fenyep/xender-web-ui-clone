import React from 'react'

const InformationDisplayModal = () => {
  return (
    <div className='z-20 w-[250px] shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] bg-white animate-[dissapear_5s_ease_both] h-auto absolute top-[7vh] right-[2vh] rounded-b-md'>
        <div className={`border-b-2 p-2 font-['PoppinsMedium']`}>Mode Direct</div>
        <div className={`p-5 text-center font-['PoppinsLight']`}>Données mobiles inutiles</div>
    </div>
  )
}

export default InformationDisplayModal