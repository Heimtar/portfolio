import React from "react";
import { useLanguage } from "../../context/useLanguage";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          HEIMTAR<span className={styles.dot}>.</span>DEV
        </div>
        <div className={styles.navBlock}>
          {/* Новая прямая B2B ссылка для связи */}
          <a href="#personal" className={styles.navLink}>
            {language === "ru" ? "Пет-проекты" : "Pet Projects"}
          </a>
          <a href="#commercial" className={styles.navLink}>
            {language === "ru" ? "Коммерция" : "Commercial"}
          </a>
          <a href="#contacts" className={styles.navLink}>
            {language === "ru" ? "Контакты" : "Contacts"}
          </a>
          <button
            onClick={toggleLanguage}
            className={styles.langBtn}
            aria-label="Toggle language"
          >
            <span className={language === "ru" ? styles.active : ""}>RU</span>
            <span className={styles.divider}>/</span>
            <span className={language === "en" ? styles.active : ""}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};
