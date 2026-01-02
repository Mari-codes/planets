import styles from './MainLayout.module.scss';
import background from '@/assets/bg/background-stars.svg';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className={styles['main-layout']} style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <main className={styles['main-layout__content']}>
        <Outlet />
      </main>
    </div>
  );
};
