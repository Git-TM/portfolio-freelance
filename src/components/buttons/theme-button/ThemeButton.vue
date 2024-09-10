<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const { currentTheme } = themeStore

const handleToggleTheme = () => {
  const newTheme = themeStore.currentTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
  themeStore.setNewTheme(newTheme)
}
</script>

<template>
  <div class="theme-toggle">
    <input
      type="checkbox"
      id="theme-toggle"
      class="switch-checkbox"
      @change="handleToggleTheme"
      :checked="currentTheme === 'dark-theme'"
    />
    <label for="theme-toggle" class="switch-label">
      <div class="switch-background">
        <span class="icon-moon">🌙</span>
        <span class="icon-sun">☀️</span>
      </div>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': currentTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>
