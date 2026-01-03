import { useParams, Navigate } from 'react-router-dom';
import { planets } from '../../data/planets';
import PlanetPage from '../../pages/PlanetPage';

const PlanetRouteWrapper = () => {
  const { name } = useParams();

  const currentPlanet = planets.find((p) => p.name.toLowerCase() === name?.toLowerCase());

  if (!currentPlanet) {
    return <Navigate to="/mercury" replace />;
  }

  return <PlanetPage planet={currentPlanet} />;
};

export default PlanetRouteWrapper;
