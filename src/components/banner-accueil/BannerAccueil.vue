<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import ImageBanner from '@/assets/images/banner-software.svg'

  const { t } = useI18n();
  </script>


<template>
  <div class="banner-container">
    <div class="banner-headline">
        <h3>{{ t('banner.description') }}</h3>
    </div>
    <div class="banner-image">
      <ImageBanner class="banner-software" />
    </div>
  </div>
</template>
  