import React from 'react';

import {Helmet} from 'react-helmet';
import VideosBody from './components/VideosBody';
import VideosHeader from './components/VideosHeader';

const VideosPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Videos</title>
      </Helmet>

      <VideosHeader />    

      <VideosBody />  
    </>
  )
}

export default VideosPage