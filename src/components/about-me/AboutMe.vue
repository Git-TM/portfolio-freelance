<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()

const technologies = computed(() => tm('aboutme.technologies') as string[])
</script>

<template>
  <div class="aboutme-container">
    <h2><span class="numbered-title">02. </span>{{ t('aboutme.headline') }}</h2>
    <div class="aboutme-content">
      <div class="aboutme-description">
        <p>{{ t('aboutme.first_paragraph') }}</p>
        <p>{{ t('aboutme.second_paragraph') }}</p>
        <p>{{ t('aboutme.third_paragraph') }}</p>
        <ul>
          <li v-for="(mission, index) in technologies" :key="index">
            {{ mission }}
          </li>
        </ul>
      </div>
      <div class="aboutme-picture">
        <!-- <img alt="Vue logo" class="navbar-logo" src="@/assets/images/moi.png" /> -->
      </div>
    </div>
  </div>
</template>
