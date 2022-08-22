import React, { useState } from 'react';


import {Helmet} from 'react-helmet';
import DisplayMode from './components/DisplayMode';
import ImagesComponent from './components/ImagesComponent';


const ImagesPage = () => {

  const [displayMode, setDisplayMode] = useState('photocam');
  const [isClock, setIsClock] = useState(false);

  const [displayByFolder, setDisplayByFolder] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Images</title>
      </Helmet>

      <DisplayMode displayMode={displayMode} setDisplayByFolder={setDisplayByFolder} setDisplayMode={setDisplayMode} isClock={isClock} setIsClock={setIsClock} />
      
      <ImagesComponent 
        displayMode={displayMode} 
        isClock={isClock} 
        setDisplayByFolder={setDisplayByFolder} 
        displayByFolder={displayByFolder} />
      
    </>
  )
}

export default ImagesPage