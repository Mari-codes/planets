import { Logo } from '../Logo';
import { PlanetsNav } from '../PlanetsNav';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <PlanetsNav />
    </header>
  );
};
