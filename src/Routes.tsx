import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchesPage from './pages/Launches';
import LaunchNext from './pages/LaunchNext';

const RouteRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchesPage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/launchNext" element={<LaunchNext />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteRoot;
