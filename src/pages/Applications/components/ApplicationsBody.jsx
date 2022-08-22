import React from 'react'
import { useContext } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiDownload } from 'react-icons/fi'
import { useState } from 'react'
import { greenColor } from '../../../utils/constants'
import { ApplicationContext } from '../../../services/state/context/applicationContext'

const ApplicationsBody = () => {

    const { applications } = useContext(ApplicationContext) 

    const [isApplicationItemDownloadHovered, setIsApplicationItemDownloadHovered] = useState(false);

  return (
    <div className={`border border-x-0 border-b-0 border-emerald-600 grid grid-cols-7 gap-4 p-4`} style={{
        maxHeight: 'calc(100vh - 14vh)',
        height: "auto",
        width: 'calc(100vw - 4vw)',
        overflowY: 'auto'
    }}>
        {applications.map((application) => (
            <div style={{
                    position: 'relative',
                }} className={`group h-28 w-48 border shadow-lg flex justify-center items-center mr-4 select-none`}>
                <div className={`hidden active:bg-green-500 group-hover:block z-10 w-8 h-8 rounded-md absolute top-3 left-3 bg-black bg-opacity-50 `}>
                    <span className='hover:cursor-pointer flex justify-center items-center pt-1.5'>
                        <AiOutlineCheck size={22} color='white' />
                    </span>
                </div>
                <div className={`z-10 hidden group-hover:block w-full h-10 absolute bottom-0 left-0 bg-black bg-opacity-50`}>
                    <span                
                        onMouseOver={() => setIsApplicationItemDownloadHovered(true)}
                        onMouseOut={() => setIsApplicationItemDownloadHovered(false)} 
                        onClick={() => {}}
                        className={`hidden group-hover:block absolute top-[20%] left-[44%] hover:cursor-pointer`}
                    >
                        <FiDownload size={25} color={isApplicationItemDownloadHovered ? greenColor : 'white'} />
                    </span>
                </div>
                <div className={`flex justify-center items-center`}>
                    <div className={`w-3/5 h-full flex items-center justify-center`}>
                        <img src={application.image} className={`w-9/12`} alt="" />
                    </div>
                    <div className={`h-full w-2/5 mb-6`}>
                        <p className={`font-['PoppinsMedium'] w-full text-sm `} 
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}>
                            {application.name}
                        </p>
                        <p className={`font-['PoppinsLight'] w-full text-gray-500 text-sm`}
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}>
                            {application.weight} Mo
                        </p>
                    </div>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default ApplicationsBody