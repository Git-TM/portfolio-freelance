<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconGithub from '@/assets/images/icons/icon-github.svg'
import IconLinkedin from '@/assets/images/icons/icon-linkedin.svg'
import IconMalt from '@/assets/images/icons/icon-malt.svg'

const { t } = useI18n()
</script>

<template>
  <img alt="Vue logo" class="montaign-image" src="@/assets/images/montaign-1.png" />
  <div class="contact-container">
    <h3 class="darker-white">Contactez moi sur ces réseaux</h3>
    <ul>
      <li><IconGithub /></li>
      <li><IconLinkedin /></li>
      <li><IconMalt /></li>
    </ul>
  </div>
</template>
