import React, { useState } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
