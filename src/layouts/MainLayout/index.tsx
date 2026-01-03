import styles from './MainLayout.module.scss';
import { Header } from '@/components/Header';
import { Starfield } from '@/components/StarField';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className={styles['main-layout']}>
      <Starfield />
      <Header />
      <main className={styles['main-layout__content']}>
        <Outlet />
      </main>
    </div>
  );
};
