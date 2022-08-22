import React, {useState, useEffect} from 'react'

import { getCalcDay, getCalcYear, getMonthText } from '../../../utils/constants';
import { FiDownload } from 'react-icons/fi';
import { TbCapture } from 'react-icons/tb';
import { AiOutlineCheck } from 'react-icons/ai';
import SheetImage from '../../../assets/images/sheet.jpeg';
import { useContext } from 'react';
import { ImagesContext } from '../../../services/state/context/imagesContext';


const ImagesComponent = ({ displayMode, isClock, displayByFolder }) => {

    const [folderSelected, setFolderSelected] = useState('');

    const { images, finalDates } = useContext(ImagesContext);
    
    useEffect(() => {
        setFolderSelected(images[0].folderName);
    },[images])

  return (
    <div style={{
        width: "calc(100vw - 4vw)",
      }}>
        <div>
          { displayMode === 'photocam' && isClock === false ? 
            (
              <div>

                <div className={`py-2 px-3 bg-[#EEEEEE]`}>
                  <input type="checkbox" /> <span className={`font-['PoppinsMedium'] ml-1 text-sm text-[#888888]`}>Mes images</span>
                </div>

                <div className='overflow-y-auto' style={{
                  height: 'calc(100vh - 21vh)'
                }}>
                  <div className={`p-2 grid grid-cols-5 gap-1`}>
                    { images.map((folder) => (
                      folder.images.map((imageByDate) => (
                        imageByDate.images.map((image) => (
                          <div className={`h-60 border group relative`}> 

                            <div className={`hidden active:bg-green-500 group-hover:block z-10 w-10 h-10 rounded-md absolute top-3 left-3 bg-black bg-opacity-50`}>
                              <span className='hover:cursor-pointer pt-2 flex justify-center items-center'>
                                <AiOutlineCheck size={25} color='white' />
                              </span>
                            </div>

                            <div className={`hidden group-hover:block z-10 w-full h-12 absolute bottom-0 left-0 bg-black bg-opacity-50 font-['PoppinsMedium'] text-sm`}>
                                <span className={`w-1/5 mt-2 m-auto flex justify-between`}>
                                  <span className='hover:cursor-pointer'>
                                    <FiDownload size={25} color='white' />
                                  </span>
                                  <span className='hover:cursor-pointer'>
                                    <TbCapture size={25} color='white' />
                                  </span>
                                </span>
                            </div>

                            <img src={image} className={`object-cover hover:scale-105 transition-all`} alt="" />
                          </div>
                        ))
                      ))
                    )) }
                  </div> 
                </div>
              </div>
            ) : (
              <div className={`${displayMode === 'gallerie' ? 'flex overflow-y-auto' : 'overflow-y-auto'}`} style={{
                height: 'calc(100vh - 16vh)'
              }}>
                {displayMode === 'gallerie' ? 
                  <div className='overflow-y-auto' style={{
                    width: "calc(100vw - 54vw)",
                    height: "calc(100vh - 16vh)"
                  }}>
                    { images && images.map((folder) => (
                      <div className={`w-full h-52 relative ${folderSelected === folder.folderName ? 'bg-[#EEEEEE]' : 'bg-white'} hover:cursor-pointer`}
                        onClick={() => setFolderSelected(folder.folderName)}  
                      >
                        <div className={`relative w-3/4 h-4/5 border bg-white drop-shadow-lg m-auto p-1 translate-y-5`}>
                          <div className='relative h-full'>
                            <div className={`w-full h-10 absolute bottom-0 left-0 bg-gray-400 bg-opacity-70 font-['PoppinsMedium'] text-sm text-white flex justify-center items-center`}>
                              {folder.folderName} {`(${folder.images.length})`}
                            </div>
                            <img src={SheetImage} className="h-full border object-cover" alt="" />
                          </div>
                        </div>
                      </div>
                    )) }
                  </div> : null}
                <div className='overflow-y-auto' style={{
                  height: "calc(100vh - 16vh)"
                }}>

                  {displayByFolder === true && images.map((folder) => (
                    folder.folderName === folderSelected ? 
                      folder.images.map((subDate) => (
                        <>
                          <div className={`py-2 px-3 bg-[#EEEEEE]`}>
                            <input type="checkbox" /> <span className={`font-['PoppinsMedium'] ml-1 text-sm text-[#888888]`}>{getMonthText(subDate.date)} {getCalcDay(subDate.date)}, {getCalcYear(subDate.date)}</span>
                          </div>
                          <div className={`p-2 grid grid-cols-5 gap-1`}>
                            {subDate.images.map((image) => (
                              <div className={`h-60 border group relative`}> 
                                <div className={`hidden active:bg-green-500 group-hover:block z-10 w-10 h-10 rounded-md absolute top-3 left-3 bg-black bg-opacity-50`}>
                                  <span className='hover:cursor-pointer pt-2 flex justify-center items-center'>
                                    <AiOutlineCheck size={25} color='white' />
                                  </span>
                                </div>

                                <div className={`hidden group-hover:block z-10 w-full h-12 absolute bottom-0 left-0 bg-black bg-opacity-50 font-['PoppinsMedium'] text-sm`}>
                                    <span className={`w-1/4 mt-2 m-auto flex justify-between`}>
                                      <span className='hover:cursor-pointer'>
                                        <FiDownload size={25} color='white' />
                                      </span>
                                      <span className='hover:cursor-pointer'>
                                        <TbCapture size={25} color='white' />
                                      </span>
                                    </span>
                                </div>
                                <img src={image} className={`object-cover hover:scale-105 transition-all`} alt="" />
                              </div>
                            ))}
                          </div>
                        </>
                      )) : null
                  ))}

                  {displayByFolder === false && finalDates && finalDates.map((timestamp) => (
                    <>
                      <div className={`py-2 px-3 bg-[#EEEEEE]`}>
                        <input type="checkbox" /> <span className={`font-['PoppinsMedium'] ml-1 text-sm text-[#888888]`}>{getMonthText(timestamp)} {getCalcDay(timestamp)}, {getCalcYear(timestamp)}</span>
                      </div>
                      <div className={`p-2 grid grid-cols-5 gap-1`}>
                        { images.map((folder) => (
                          folder.images.map((imageByDate) => (
                            imageByDate.date === timestamp ? 
                              imageByDate.images.map((image, index) => (
                                <div className={`h-60 border group relative`}>

                                  <div className={`hidden active:bg-green-500 group-hover:block z-10 w-10 h-10 rounded-md absolute top-3 left-3 bg-black bg-opacity-50`}>
                                    <span className='hover:cursor-pointer pt-2 flex justify-center items-center'>
                                      <AiOutlineCheck size={25} color='white' />
                                    </span>
                                  </div>

                                  <div className={`hidden group-hover:block z-10 w-full h-12 absolute bottom-0 left-0 bg-black bg-opacity-50 font-['PoppinsMedium'] text-sm`}>
                                      <span className={`w-1/5 mt-2 m-auto flex justify-between`}>
                                        <span className='hover:cursor-pointer'>
                                          <FiDownload size={25} color='white' />
                                        </span>
                                        <span className='hover:cursor-pointer'>
                                          <TbCapture size={25} color='white' />
                                        </span>
                                      </span>
                                  </div>
                                  <img 
                                    src={image} 
                                    className={`object-cover hover:scale-105 transition-all`} 
                                    alt="" 
                                  />
                                </div>
                              )) : null 
                        )))) }
                      </div>
                    </>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
  )
}

export default ImagesComponent