<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <div class="about-me-container">
    <h2>Mes formations</h2>
    <div class="about-me-card">
      <p>{{ t('introduction.description_formation') }}</p>
      <p>{{ t('introduction.description_dev') }}</p>
    </div>
    <h2>Mes expériences Pro</h2>
  </div>
</template>