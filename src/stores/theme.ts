import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'dark-theme')

  const setInitialTheme = () => {
    document.body.className = theme.value
  }

  const setNewTheme = (newTheme: string) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }

  const currentTheme = computed(() => theme)

  return { theme, setNewTheme, setInitialTheme, currentTheme }
})
