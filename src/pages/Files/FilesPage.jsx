import React from 'react';

import {Helmet} from 'react-helmet';
import FilesBody from './components/FilesBody';

const FilesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Files</title>
      </Helmet>
      
      <FilesBody />
    </>
  )
}

export default FilesPage