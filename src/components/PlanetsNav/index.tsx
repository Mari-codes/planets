import { useEffect, useState } from 'react';
import { planets } from '@/data/planets';
import { Link } from 'react-router-dom';
import styles from './PlanetsNav.module.scss';
import hamburgerIcon from '@/assets/icons/icon-hamburger.svg'; // ajuste o caminho

export const PlanetsNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className={styles['planets-nav']}>
      <button className={styles['planets-nav__toggle']} onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" />
      </button>
      <ul className={`${styles['planets-nav__list']} ${isOpen ? styles['is-open'] : ''}`}>
        {planets.map((planet) => (
          <li
            key={planet.name}
            className={styles['planets-nav__item']}
            style={{ ['--planet-color-name' as string]: planet.name.toLowerCase() }}
          >
            <Link
              to={`/${planet.name.toLowerCase()}`}
              className={styles['planets-nav__link']}
              onClick={() => setIsOpen(false)}
            >
              <div className={styles['planets-nav__left-content']}>
                <span className={styles['planets-nav__bullet']}></span>
                {planet.name.toUpperCase()}
              </div>
              <span className={styles['planets-nav__chevron']}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
