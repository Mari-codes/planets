import { planets } from '@/data/planets';
import styles from './PlanetsNav.module.scss';

export const PlanetsNav = () => {
  return (
    <nav className={styles['planets-nav']}>
      <ul className={styles['planets-nav__list']}>
        {planets.map((planet) => (
          <li key={planet.name} className={styles['planets-nav__item']}>
            {planet.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
};
