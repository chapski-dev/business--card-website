import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import FuniroPage from './pages/FuniroPage/src/index';
import HomePage from './pages/HomePage/index';
import FigmaLandPage from './pages/FigmaLandPage/index';
import ItStudioPage from './pages/ItStudioPage/src/index';
import AddCardPage from './pages/AddCardPage/index';
import store from './store';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funiro" element={<FuniroPage />} />
        <Route path="/figma-land" element={<FigmaLandPage />} />
        <Route path="/it-studio-page" element={<ItStudioPage />} />
        <Route path="/card" element={<AddCardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
