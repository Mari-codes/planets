import styles from './TabButton.module.scss';
import type { TabButtonProps } from './types';

export const TabButton = ({ number, label, isActive, onClick, planetColor }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isActive ? styles.isActive : ''}`}
      style={{ ['--planet-color' as string]: planetColor }}
    >
      <span className={styles.button__number}>{number}</span>
      {label}
    </button>
  );
};
