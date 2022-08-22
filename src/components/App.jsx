import Routes from '../routes/Routes';
import './App.css';
// import ConnectionLoader from './loaders/connectionLaoder';
import MaskProvider from '../services/state/provider/maskProvider';
import XenderModalProvider from '../services/state/provider/xenderModalProvider';
import ConfirmationModalProvider from '../services/state/provider/confirmationModalProvider';
import ImagesProvider from '../services/state/provider/imagesProvider';
import VideosProvider from '../services/state/provider/videosProvider';
import ApplicationsProvider from '../services/state/provider/applicationProvider';
import FoldersProvider from '../services/state/provider/FoldersProvider';

function App() {
  return (
    <div className="App">
      <FoldersProvider>
        <ApplicationsProvider>
          <VideosProvider>
            <ImagesProvider>
              <ConfirmationModalProvider>
                <MaskProvider>
                  <XenderModalProvider>
                      <Routes />
                    {/* <ConnectionLoader /> */}
                  </XenderModalProvider>
                </MaskProvider>
              </ConfirmationModalProvider>
            </ImagesProvider>
          </VideosProvider>
        </ApplicationsProvider>  
      </FoldersProvider>
    </div>
  );
}

export default App;
