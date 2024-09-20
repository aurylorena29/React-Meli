import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './i18n-es.json';
import en from './i18n-en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'es', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;