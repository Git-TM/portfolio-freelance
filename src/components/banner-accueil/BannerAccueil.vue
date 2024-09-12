<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="banner-container">
    <img alt="Vue logo" class="moon-image" src="@/assets/images/new-moon.png" />
    <div class="banner-headline">
      <p class="primary-color-font">{{ t('banner.presentation') }}</p>
      <h3 class="big-heading brighter-title">Tristan Monteiro.</h3>
      <h3 class="big-heading darker-title">{{ t('banner.headline') }}</h3>
      <p class="banner-description">{{ t('banner.description') }}</p>
    </div>
  </div>
</template>
