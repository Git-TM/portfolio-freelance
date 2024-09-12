<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="footer-container">
    <p>{{ t('footer.first_text') }}</p>
    <p>{{ t('footer.second_text') }}</p>
  </div>
</template>
