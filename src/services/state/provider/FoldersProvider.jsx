import { FoldersContext } from "../context/foldersContext";
import { v4 as uuid } from "uuid";

import React from 'react'

const FoldersProvider = ({ children }) => {
  
    const files = [
        {
            name: 'readme.txt',
            isFolder: false,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
        },
        {
            name: 'thanks.pdf',
            isFolder: false,
            nodeId: uuid(),
            dateAndHour: "2009/01/01 09:02",
        },
        {
            name: 'Photo29072022.jpg',
            nodeId: uuid(),
            dateAndHour: "2022/07/22 12:43",
            isFolder: false
        },
        {
            name: 'Photo29072022_1.jpg',
            nodeId: uuid(),
            dateAndHour: "2021/09/23 07:10",
            isFolder: false
        }
    ]
    const phoneMemory = [
        {
            name: 'Alarms',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2020/06/26 18:07",
            folders: [],
        },
        {
            name: 'Android',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2020/06/27 19:15",
            folders: [],
        },
        {
            name: 'DCIM',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2019/05/13 13:06",
            folders: [
                {
                    name: 'Facebook',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [
                        {
                            name: 'Photo29072022.jpg',
                            isFolder: false,
                            nodeId: uuid(),
                        },
                        {
                            name: 'Photo29072022_1.jpg',
                            isFolder: false,
                            nodeId: uuid(),
                        }
                    ],
                },
            ],
        },
        {
            name: 'Download',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'readme.txt',
                    isFolder: false,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'thanks.pdf',
                    isFolder: false,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
        {
            name: 'Whatsapp',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'database',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'media',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
        {
            name: 'Xender',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'photos',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'musics',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'apps',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'others',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
    ]
    const sdCard = [
        {
            name: 'Backups',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [],
        },
        {
            name: 'Gallery',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [],
        },
        {
            name: 'Movies',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'Facebook',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [
                        {
                            name: 'Photo29072022.jpg',
                            isFolder: false
                        },
                        {
                            name: 'Photo29072022_1.jpg',
                            isFolder: false
                        }
                    ],
                },
            ],
        },
        {
            name: 'Notifications',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'readme.txt',
                    isFolder: false,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'thanks.pdf',
                    isFolder: false,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
        {
            name: 'Pictures',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'photos',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'musics',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'apps',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'others',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
        {
            name: 'Telegram',
            isFolder: true,
            nodeId: uuid(),
            dateAndHour: "2021/11/16 14:05",
            folders: [
                {
                    name: 'database',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
                {
                    name: 'media',
                    isFolder: true,
                    nodeId: uuid(),
                    folders: [],
                },
            ],
        },
    ]
    
    const contextValue = {
        files,
        phoneMemory,
        sdCard
    }

  return (
    <FoldersContext.Provider value={contextValue}>
        {children}
    </FoldersContext.Provider>
  )
}

export default FoldersProvider