import { createContext } from 'react';
import type { TranslationSchema } from '../data/translations';

export interface LanguageContextType {
  language: 'ru' | 'en';
  toggleLanguage: () => void;
  t: TranslationSchema;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
