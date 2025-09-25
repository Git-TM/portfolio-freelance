import { createI18n } from 'vue-i18n'

import us from '../../locales/us.json'
import fr from '../../locales/fr.json'

const i18n = createI18n({
  legacy: false, // utilisez la composition API
  locale: 'fr', // langue par défaut
  messages: {
    us,
    fr
  }
})

export default i18n
