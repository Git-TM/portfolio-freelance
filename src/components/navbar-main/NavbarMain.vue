<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeButton from '../buttons/theme-button/ThemeButton'

const props = defineProps<{ currentLocale: string }>()
const emit = defineEmits(['switch-language', 'toggle-theme'])

const { locale } = useI18n()

const switchLanguage = () => {
  const newLocale = props.currentLocale === 'fr' ? 'en' : 'fr'
  emit('switch-language', newLocale)
}

watch(
  () => props.currentLocale,
  (newLocale) => {
    locale.value = newLocale
  }
)
</script>

<template>
  <div class="navbar-container">
    <img alt="Vue logo" class="navbar-logo" src="@/assets/images/icons/icon-logo.png" />
    <div class="navbar-right-content">
      <button @click="switchLanguage">{{ currentLocale === 'fr' ? 'US' : 'FR' }}</button>
      <ThemeButton />
    </div>
  </div>
</template>
