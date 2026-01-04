import { useState } from 'react';
import styles from './PlanetPage.module.scss';
import { TabButton } from '../../components/TabButton';
import icon from '../../assets/icons/icon-source.svg';
import { StatCard } from '../../components/StatCard';
import type { PlanetPageProps, Tab } from './types';
import { PlanetTabs } from '@/components/PlanetTabs';

export const PlanetPage = ({ planet }: PlanetPageProps) => {
  const [currentTab, setCurrentTab] = useState<Tab>('overview');

  const getContent = () => {
    if (currentTab === 'structure') return planet.structure;
    if (currentTab === 'geology') return planet.geology;
    return planet.overview;
  };

  const getImagePath = () => {
    if (currentTab === 'structure') return planet.images.internal;
    return planet.images.planet;
  };

  const activeContent = getContent();
  const planetNameLow = planet.name.toLowerCase();

  return (
    <main className={styles.planet}>
      <PlanetTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        planetColor={planetNameLow}
      />
      <div className={styles.planet__container}>
        <div className={styles['planet__image-container']}>
          <img
            src={getImagePath()}
            alt={planet.name}
            className={`${styles.planet__img} ${styles[`planet__img--${planetNameLow}`]}`}
          />

          {currentTab === 'geology' && (
            <img
              src={planet.images.geology}
              alt={`${planet.name} geology`}
              className={styles['planet__img--geology']}
            />
          )}
        </div>

        <div className={styles.planet__info}>
          <div className={styles.planet__text}>
            <h1 className={styles.planet__title}>{planet.name.toUpperCase()}</h1>
            <p className={styles.planet__description}>{activeContent.content}</p>
            <span className={styles.planet__source}>
              Source:
              <a
                href={activeContent.source}
                target="_blank"
                rel="noreferrer"
                className={styles.planet__link}
              >
                <span className={styles.planet__wikipedia}>Wikipedia</span>
                <img src={icon} alt="link icon" />
              </a>
            </span>
          </div>

          <div className={styles.planet__menu}>
            <TabButton
              number="01"
              label="OVERVIEW"
              isActive={currentTab === 'overview'}
              onClick={() => setCurrentTab('overview')}
              planetColor={planetNameLow}
            />
            <TabButton
              number="02"
              label="INTERNAL STRUCTURE"
              isActive={currentTab === 'structure'}
              onClick={() => setCurrentTab('structure')}
              planetColor={planetNameLow}
            />
            <TabButton
              number="03"
              label="SURFACE GEOLOGY"
              isActive={currentTab === 'geology'}
              onClick={() => setCurrentTab('geology')}
              planetColor={planetNameLow}
            />
          </div>
        </div>
      </div>
      <section className={styles.planet__stats}>
        <StatCard label="Rotation Time" value={planet.rotation} />
        <StatCard label="Revolution Time" value={planet.revolution} />
        <StatCard label="Radius" value={planet.radius} />
        <StatCard label="Average Temp." value={planet.temperature} />
      </section>
    </main>
  );
};
