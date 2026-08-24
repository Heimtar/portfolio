import React from 'react';
import { useLanguage } from '../../context/useLanguage';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        HEIMTAR<span className={styles.dot}>.</span>DEV
      </div>
      <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle language">
        <span className={language === 'ru' ? styles.active : ''}>RU</span>
        <span className={styles.divider}>/</span>
        <span className={language === 'en' ? styles.active : ''}>EN</span>
      </button>
    </header>
  );
};
