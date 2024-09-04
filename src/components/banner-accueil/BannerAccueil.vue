<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  </script>


<template>
  <div class="banner-container">
    <img alt="Vue logo" class="moon-image" src="@/assets/images/new-moon.png" />
    <div class="banner-headline">
        <p class="primary-color-font">Bonjour, je m'appelle</p>
        <h3 class="big-heading">Tristan Monteiro</h3>
        <h3 class="big-heading">{{ t('banner.description') }}</h3>
    </div>
  </div>
</template>

  