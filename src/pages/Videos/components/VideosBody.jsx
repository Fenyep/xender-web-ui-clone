import React from 'react'
import { useContext } from 'react'
import { VideosContext } from '../../../services/state/context/videosContext'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiDownload } from 'react-icons/fi'
import { useState } from 'react'
import { greenColor } from '../../../utils/constants'

const VideosBody = () => {

    const { videos } = useContext(VideosContext);

    const [isVideoItemDownloadHovered, setIsVideoItemDownloadHovered] = useState(false);

  return (
    <div className={`grid grid-cols-7 gap-1 px-4 py-1`} style={{
        height: 'calc(100vh - 15vh)',
        width: 'calc(100vw - 4vw)'
    }}>
        {videos.map((folder) => (
            folder.videos.map((videoDate) => (
                videoDate.videos.map((videoImage) => (
                    <div style={{
                        position: 'relative',
                    }} className={`group`}>
                        <div className={`hidden active:bg-green-500 group-hover:block z-10 w-10 h-10 rounded-md absolute top-3 left-3 bg-black bg-opacity-50 `}>
                            <span className='hover:cursor-pointer flex justify-center items-center pt-2'>
                                <AiOutlineCheck size={25} color='white' />
                            </span>
                        </div>
                        <div className={`z-10 w-full h-12 absolute bottom-0 left-0 bg-black bg-opacity-50 flex justify-center items-center`}>
                            <span                
                                onMouseOver={() => setIsVideoItemDownloadHovered(true)}
                                onMouseOut={() => setIsVideoItemDownloadHovered(false)} 
                                className={`hidden group-hover:block hover:cursor-pointer`}
                            >
                                <FiDownload size={25} color={isVideoItemDownloadHovered ? greenColor : 'white'} />
                            </span>
                        </div>
                        <img src={videoImage} className={`h-full`} alt="" />
                    </div>
                ))
            ))
        ))}
    </div>
  )
}

export default VideosBody