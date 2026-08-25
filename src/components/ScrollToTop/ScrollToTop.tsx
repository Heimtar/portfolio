import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Отслеживаем прокрутку страницы
  useEffect(() => {
    const toggleVisibility = () => {
      // Если прокрутили больше 400px — показываем кнопку
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Железобетонное правило хуков: очищаем слушатель событий
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Мягкий и плавный взлет наверх
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      className={styles.scrollTopBtn} 
      onClick={scrollToTop} 
      aria-label="Scroll to top"
    >
      {/* Слои нашей сочной золотой рамки при ховере */}
      <div className={styles.borderBlur} />
      <div className={styles.borderGlow} />
      
      <div className={styles.contentWrapper}>
        <span className={styles.arrow}>↑</span>
      </div>
    </button>
  );
};
