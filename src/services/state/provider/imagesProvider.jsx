import { ImagesContext } from "../context/imagesContext"

import SheetImage from '../../../assets/images/sheet.jpeg';

const ImagesProvider = ({ children }) => {

    const images = [
        {
          folderName: 'Camera',
          images: [
            {
              date: 1658275200,
              images: [
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
          ]
        },
        {
          folderName: 'Capture+',
          images: [
            {
              date: 1658275200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1595203200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            }
          ]
        },
        {
          folderName: 'Dernières images',
          images: [
            {
              date: 1595203200,
              images: [
                SheetImage,
              ]
            }
          ]
        },
        {
          folderName: 'Download',
          images: [
            {
              date: 1658275200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1626739200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            },
            {
              date: 1595203200,
              images: [
                SheetImage,
                SheetImage,
                SheetImage,
              ]
            }
          ]
        },
    ];
    
    const dates = [];
    var finalDates = [];
    images.forEach((folder) => {
        folder.images.forEach((date) => {
            dates.push(date.date);
        });
    });
    
    // Getting the unique dates
    finalDates = dates.reduce(function(a,b) {
        if(a.indexOf(b) < 0) a.push(b);
            return a;
    }, []);

    const contextValue = {
        images: images,
        finalDates: finalDates
    }

    return (<ImagesContext.Provider value={contextValue}>
        {children}
    </ImagesContext.Provider>)
}

export default ImagesProvider