import type { Tab } from '@/pages/PlanetPage/types';
import styles from './PlanetTabs.module.scss';
import type { PlanetTabsProps } from './types';

export const PlanetTabs = ({ currentTab, setCurrentTab, planetColor }: PlanetTabsProps) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'structure', label: 'STRUCTURE' },
    { id: 'geology', label: 'SURFACE' },
  ];

  return (
    <div
      className={styles.tabs}
      style={{ '--planet-color': `var(--${planetColor})` } as React.CSSProperties}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-planet={planetColor.toLowerCase()}
          className={`${styles.tabs__btn} ${currentTab === tab.id ? styles.isActive : ''}`}
          onClick={() => setCurrentTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
