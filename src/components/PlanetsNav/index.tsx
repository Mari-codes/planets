import { planets } from '@/data/planets';
import { Link } from 'react-router-dom';
import styles from './PlanetsNav.module.scss';

export const PlanetsNav = () => {
  return (
    <nav className={styles['planets-nav']}>
      <ul className={styles['planets-nav__list']}>
        {planets.map((planet) => (
          <li
            key={planet.name}
            className={styles['planets-nav__item']}
            style={{ ['--planet-color-name' as string]: planet.name.toLowerCase() }}
          >
            <Link to={`/${planet.name.toLowerCase()}`} className={styles['planets-nav__link']}>
              <span className={styles['planets-nav__bullet']}></span>
              {planet.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
