import React, { useContext } from 'react'
import XenderLogo from '../../../assets/images/xender_logo.png';
import { AiOutlineClose } from 'react-icons/ai'
import { headerBottomBorderColor, iconPrimaryColor } from '../../../utils/constants';
import { XenderModalContext } from '../../../services/state/context/xenderModalContext';

const XenderModal = () => {

    const { closeXenderModal } = useContext(XenderModalContext);

  return (
    <div className={`z-40 bg-white w-[550px] h-[290px] shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] rounded-md border border-[${headerBottomBorderColor}] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]`}>
        <div 
            className={`w-[inherit] flex justify-between items-center border-b border-[${headerBottomBorderColor}] p-2.5`}
        >
            <p className={`font-['PoppinsMedium']`}>
                À propos de Xender
            </p>
            <AiOutlineClose 
                size={20} 
                onClick={() => closeXenderModal()}
                onMouseOut={({target}) => target.style.color = `${iconPrimaryColor}`} 
                onMouseOver={({target}) => target.style.cursor = "pointer"} 
            />
        </div>
        <div className='flex'>
            <img className='scale-125 ml-7 mt-7' src={XenderLogo} alt="xender logo" />
            <div className='flex flex-col justify-evenly pl-8 mt-8'>
                <p className="font-['PoppinsBold'] text-3xl mt-2">
                    Xender 3
                </p>
                <p className={'mb-2'} style={{ color: iconPrimaryColor }} >
                    <p className={''}>
                        Copyright @ 2011-2016 AnMobi.
                    </p>
                    <p className={`font-['PoppinsLight']`}>
                        All Rights Reserved.
                    </p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default XenderModal