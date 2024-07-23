<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  </script>


<template>
  <div class="banner-container">
    <div class="banner-headline">
        <h1>{{ t('banner.headline') }}</h1>
        <h3>{{ t('banner.subheadline') }}</h3>
    </div>
    <div class="banner-image">
        <img alt="Vue logo" class="navbar-logo" src="@/assets/images/logo.png" />
    </div>
  </div>
</template>
  