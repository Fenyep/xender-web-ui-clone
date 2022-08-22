import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes as BrowseRoutes } from 'react-router-dom';

import ConnectionLoader from '../components/loaders/connectionLaoder/ConnectionLoader';
import ApplicationsPage from '../pages/Applications/ApplicationsPage';
import FilesPage from '../pages/Files/FilesPage';
import FoldersPage from '../pages/Folders/FoldersPage';
import ImagesPage from '../pages/Images/ImagesPage';
import SongsPage from '../pages/Songs/SongsPage';
import VideosPage from '../pages/Videos/VideosPage';

const Home = lazy(() => import('../pages/Home/HomePage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const Layout = lazy(() => import('../layouts/Layout/Layout'));

const Routes = () => {
  return (
    <Router>
        <Suspense fallback={<ConnectionLoader />}>
            <BrowseRoutes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='images' element={<ImagesPage />} />
                  <Route path='videos' element={<VideosPage />} />
                  <Route path='songs' element={<SongsPage />} />
                  <Route path='files' element={<FilesPage />} />
                  <Route path='applications' element={<ApplicationsPage />} />
                  <Route path='folders' element={<FoldersPage />} />
                  <Route path='*' element={<PageNotFound />} />
              </Route>
            </BrowseRoutes>
        </Suspense>
    </Router>
  )
}


export default Routes