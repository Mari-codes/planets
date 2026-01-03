import styles from './StatCard.module.scss';
import type { StatCardProps } from './types';

export const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className={styles.stat}>
      <h4 className={styles.stat__label}>{label}</h4>
      <p className={styles.stat__value}>{value}</p>
    </div>
  );
};
