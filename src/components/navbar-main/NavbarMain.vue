<script setup lang="ts">
import { computed, ref } from 'vue'
import ThemeButton from '../buttons/theme-button/ThemeButton'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
const currentLocale = computed(() => configStore.config.locale)

const languages = ['fr', 'en', 'es']
const isDropdownOpen = ref(false)

const switchLanguage = (lang: string) => {
  isDropdownOpen.value = false
  configStore.setLocale(lang)
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<template>
  <div class="navbar-container">
    <img alt="Vue logo" class="navbar-logo" src="@/assets/images/icons/icon-logo.png" />
    <div class="navbar-right-content">
      <div class="dropdown">
        <button class="dropdown-button" @click="toggleDropdown">
          {{ currentLocale.toUpperCase() }}
        </button>
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <button v-for="lang in languages" :key="lang" @click="switchLanguage(lang)">
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
      <ThemeButton />
    </div>
  </div>
</template>
