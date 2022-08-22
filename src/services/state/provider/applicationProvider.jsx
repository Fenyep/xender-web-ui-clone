import { ApplicationContext } from "../context/applicationContext"

import EsExplorer from '../../../assets/images/appIcons/es_explorer.png'
import FilesByGoogle from '../../../assets/images/appIcons/filesByGoogle.png'
import FacebookLite from '../../../assets/images/appIcons/facebookLite.png'
import TikTokLite from '../../../assets/images/appIcons/tiktokLite.png'
import Telegram from '../../../assets/images/appIcons/telegram.png'
import JWLibrary from '../../../assets/images/appIcons/jwLibrary.png'
import Linkedin from '../../../assets/images/appIcons/linkedin.png'
import Xender from '../../../assets/images/appIcons/xender.png'
import Whatsapp from '../../../assets/images/appIcons/whatsapp.png'
import Zoom from '../../../assets/images/appIcons/zoom.png'


const ApplicationsProvider = ({children}) => {
    
    const applications = [
        {
            name: 'Es Explorator',
            weight: '23,68',
            image: EsExplorer,
        },{
            name: 'Google Files',
            weight: '7,76',
            image: FilesByGoogle,
        },{
            name: 'Lite',
            weight: '1,79',
            image: FacebookLite,
        },{
            name: 'TikTok Lite',
            weight: '6,25',
            image: TikTokLite,
        },{
            name: 'Telegram',
            weight: '20,68',
            image: Telegram,
        },{
            name: 'JW Library',
            weight: '88,90',
            image: JWLibrary,
        },{
            name: 'Linkedin',
            weight: '28,65',
            image: Linkedin,
        },{
            name: 'Xender',
            weight: '18,99',
            image: Xender,
        },{
            name: 'Whatsapp',
            weight: '40,08',
            image: Whatsapp,
        },{
            name: 'Zoom',
            weight: '27,38',
            image: Zoom,
        },
    ]
    
    const contextValue = {
        applications: applications
    }
    return (
        <ApplicationContext.Provider value={contextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationsProvider