<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconGithub from '@/assets/images/icons/contact/icon-github.svg'
import IconLinkedin from '@/assets/images/icons/contact/icon-linkedin.svg'
import IconMalt from '@/assets/images/icons/contact/icon-malt.svg'

const { t } = useI18n()
</script>

<template>
  <img alt="Vue logo" class="montaign-image" src="@/assets/images/montaign-1.png" />
  <div class="contact-container">
    <h3 class="darker-white">Contactez moi sur ces réseaux</h3>
    <ul>
      <a href="https://github.com/Git-TM" target="_blank" rel="noopener noreferrer"
        ><li><IconGithub /></li
      ></a>
      <a
        href="https://www.linkedin.com/in/tristan-monteiro/"
        target="_blank"
        rel="noopener noreferrer"
        ><li><IconLinkedin /></li
      ></a>
      <a
        href="https://www.malt.fr/profile/tristanmonteiro"
        target="_blank"
        rel="noopener noreferrer"
        ><li><IconMalt /></li
      ></a>
    </ul>
  </div>
</template>
