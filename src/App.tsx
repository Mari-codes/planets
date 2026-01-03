import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import PlanetRouteWrapper from './routes/PlanetRouteWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/earth" replace />} />
          <Route path=":name" element={<PlanetRouteWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
