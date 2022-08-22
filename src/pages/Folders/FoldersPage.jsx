import React, { useState } from 'react';

import {Helmet} from 'react-helmet';
import FoldersHeader from './components/FolderHeader';
import FoldersBody from './components/FoldersBody';

const FoldersPage = () => {
  
  const [selectedRepository, setSelectedRepository] = useState("")

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Folders</title>
      </Helmet>

      <FoldersHeader selectedRepository={selectedRepository} />
      <FoldersBody setRepository={setSelectedRepository} />
    </>
  )
}

export default FoldersPage