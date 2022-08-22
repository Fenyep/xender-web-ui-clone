import React, { useState } from 'react'
import { BsFolder2 } from 'react-icons/bs'
import { AiOutlineFile } from 'react-icons/ai';

import FoldersTreeView from './FoldersTreeView';

const FoldersBody = ({ children, setRepository }) => {

  const [displayRepository, setDisplayRepository] = useState([])

  const [folderOrFileHoverInfos, setFolderOrFileHoverInfos] = useState({name: "", isFolder: true, dateAndHour: ""})

  return (
    <div className={`flex flex-col`} style={{
        width: "calc(100vw - 4vw)",
        height: "calc(100vh - 13vh)"
      }}>
        <div className={`flex`} style={{
          height: "calc(100vh - 22.2vh)"
        }}>

          <FoldersTreeView setDisplayRepository={setDisplayRepository}  setRepository={setRepository} />

          {
            displayRepository.length > 0 ?
            (
              <div className={`grid grid-cols-12 gap-4 border overflow-y-auto w-full px-4 py-2`}>
              {displayRepository.map((folderOrFile) => (
                <>
                {folderOrFile.isFolder === true ? (
                  <div className='h-min flex flex-col items-center cursor-pointer rounded-md'
                    onMouseOver={() => setFolderOrFileHoverInfos({ name: folderOrFile.name, isFolder: folderOrFile.isFolder, dateAndHour: folderOrFile.dateAndHour})}
                  >
                    <div className={``}>
                      <BsFolder2 size={75} color="#9C27B0" />
                    </div>
                    <div
                     style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                     }}  
                     className={`w-11/12 text-center text-[#797979] text-[.8rem] font-['PoppinsLight']`}>{folderOrFile.name}</div>
                  </div>
                ) : (
                  <div className='h-min flex flex-col items-center cursor-pointer rounded-md'
                    onMouseOver={() => setFolderOrFileHoverInfos({ name: folderOrFile.name, isFolder: folderOrFile.isFolder, dateAndHour: folderOrFile.dateAndHour})}
                  >
                    <div className={``}>
                      <AiOutlineFile size={75} color="#9C27B0" />
                    </div>
                    <div
                     style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                     }} 
                     className={`w-11/12 text-center text-[#797979] text-[.8rem] font-['PoppinsLight']`}>{folderOrFile.name}</div>
                  </div>
                )}
                </>
              ))}
                </div>
              ) : (

                <div className={`flex justify-center text-center items-center border overflow-y-auto w-full`}>
                  <span className={`-translate-y-20`}>
                    <BsFolder2 size={170} color="#E6E6E6" />
                  </span>
                </div> 
              )
          }
        </div>
        <div className={`w-full flex items-center pl-8 bg-[#E6E6E6]`} style={{
          height: "calc(100vh - 92vh)"
        }}>
          <div className={`border w-min mr-3`}>
            {folderOrFileHoverInfos.isFolder ? (
              <BsFolder2 color='#9C27B0' size={30} />
            ) : (
              <AiOutlineFile color='#9C27B0' size={30} />
            ) }
          </div>
          <div className={`font-['PoppinsLight'] text-[#797979]`}>
            <div>
              {folderOrFileHoverInfos.name}
            </div>
            <div>
              {folderOrFileHoverInfos.dateAndHour}
            </div>
          </div>
        </div>
      </div>
  )
}

export default FoldersBody