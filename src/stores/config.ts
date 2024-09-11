import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useConfigStore = defineStore('config', () => {
  // Initialisation
  const { locale } = useI18n()
  const config = ref({
    theme: localStorage.getItem('config-theme') || 'dark-theme',
    locale: localStorage.getItem('config-locale') || 'fr'
  })

  // Méthodes

  const setInitialConfig = () => {
    const storedTheme = localStorage.getItem('config-theme')
    const storedLocale = localStorage.getItem('config-locale')

    config.value.theme = storedTheme || 'dark-theme'
    config.value.locale = storedLocale || 'fr'

    document.body.className = config.value.theme
    locale.value = config.value.locale
  }

  const setTheme = (newTheme: string) => {
    config.value.theme = newTheme
    localStorage.setItem('config-theme', config.value.theme)
    document.body.className = config.value.theme
  }

  const setLocale = (newLocale: string) => {
    locale.value = newLocale
    config.value.locale = newLocale
    localStorage.setItem('config-locale', newLocale)
  }

  return { config, setInitialConfig, setLocale, setTheme }
})
