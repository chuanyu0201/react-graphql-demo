import {
  BrowserRouter ,
  Routes, Route
} from 'react-router-dom';
import LaunchesPage from "./pages/Launches";




const RouteRoot = () => {
 return <BrowserRouter>
<Routes>
  <Route path="/" element={<LaunchesPage />} />
  <Route path="/launches" element={<LaunchesPage />} />
</Routes>
 </BrowserRouter>
}
export default RouteRoot;
