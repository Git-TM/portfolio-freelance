import { createI18n, type I18nOptions } from 'vue-i18n'

import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

const i18n = createI18n({
  legacy: false, // utilisez la composition API
  locale: 'en', // langue par défaut
  messages: {
    en,
    fr
  },
});

export default i18n;
