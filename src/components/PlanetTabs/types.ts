import type { Tab } from '@/pages/PlanetPage/types';

export interface PlanetTabsProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  planetColor: string;
}
