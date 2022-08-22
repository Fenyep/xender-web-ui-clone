import React from 'react';

import {Helmet} from 'react-helmet';
import ApplicationsBody from './components/ApplicationsBody';
import ApplicationsHeader from './components/ApplicationsHeader';

const ApplicationsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>XWC | Applications</title>
      </Helmet>

      <ApplicationsHeader />

      <ApplicationsBody />
      
    </>
  )
}

export default ApplicationsPage