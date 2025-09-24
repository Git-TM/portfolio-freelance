<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { computed } from 'vue'

const configStore = useConfigStore()
const currentTheme = computed(() => configStore.config.theme)

const handleToggleTheme = () => {
  const newTheme = currentTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
  configStore.setTheme(newTheme)
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
