import React, { useContext } from 'react'
import PhoneMiniImg from '../../../assets/images/phone_mini.png';
import { ConfirmationModalContext } from '../../../services/state/context/confirmationModalContext';
import MaskContext from '../../../services/state/context/maskContext';

const ConfirmationModal = () => {

  const { closeConfirmationModal } = useContext(ConfirmationModalContext);
  const { hideShadowMask } = useContext(MaskContext);

  const handleConfirmClick = () => {
    closeConfirmationModal();
    hideShadowMask();
  }

  return (
    <div className={`z-40 flex flex-col justify-between bg-white w-[300px] h-[425px] rounded-md absolute top-1/2 left-1/2 translate-y-[-63%] translate-x-[-50%]`}>
        <div className={`mt-7`}>
            <p className={`font-['PoppinsMedium'] text-center`}>
              Cette transmission ne consomme pas de donnes mobiles
            </p>
        </div>
        <div className='w-full mb-20 flex justify-center items-center'>
            <img className={'shadow-[0_15px_15px_-3px_rgba(0,0,0,0.2)]'} src={PhoneMiniImg} alt="phone airtime" />
        </div>
        <button className='border-none w-[90%] ml-auto mr-auto mb-3 p-3 bg-[#418100] text-white cursor-pointer' 
                onClick={() => handleConfirmClick()}>
            Confirmer
        </button>
    </div>
  )
}

export default ConfirmationModal