import type { Planet } from '@/types/planets';

export interface PlanetPageProps {
  planet: Planet;
}

export type Tab = 'overview' | 'structure' | 'geology';
