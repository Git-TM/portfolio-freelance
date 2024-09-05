<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import PrimaryButton from '../buttons/primary-button/PrimaryButton';

  const { t } = useI18n();
  </script>


<template>
  <div class="banner-container">
    <img alt="Vue logo" class="moon-image" src="@/assets/images/new-moon.png" />
    <div class="banner-headline">
        <p class="primary-color-font">Bonjour, je m'appelle</p>
        <h3 class="big-heading brighter-white">Tristan Monteiro.</h3>
        <h3 class="big-heading darker-white">{{ t('banner.headline') }}</h3>
        <p class="banner-description">{{ t('banner.description') }}</p>
        <PrimaryButton content="Voir mon background" class="project-button" />
    </div>
  </div>
</template>

  