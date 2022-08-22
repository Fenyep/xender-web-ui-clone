import { VideosContext } from "../context/videosContext"

import SheetImage from '../../../assets/images/sheet.jpeg';

const VideosProvider = ({ children }) => {

    const videos = [
        {
          folderName: 'Camera',
          videos: [
            {
              date: 1658275200,
              videos: [
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
          ]
        },
        {
          folderName: 'Capture+',
          videos: [
            {
              date: 1658275200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1595203200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            }
          ]
        },
        {
          folderName: 'Dernières videos',
          videos: [
            {
              date: 1595203200,
              videos: [
                SheetImage,
              ]
            }
          ]
        },
        {
          folderName: 'Download',
          videos: [
            {
              date: 1658275200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1595203200,
              videos: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            }
          ]
        },
    ];
    

    const contextValue = {
        videos: videos,
    }

    return (<VideosContext.Provider value={contextValue}>
        {children}
    </VideosContext.Provider>)
}

export default VideosProvider