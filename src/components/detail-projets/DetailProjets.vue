<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import IconCoding from '@/assets/images/icon-coding.svg'
  import PrimaryButton from '../buttons/primary-button/PrimaryButton';
  
  const { t } = useI18n();
  
  const projects = ["vera", "quelleenergie", "annuaire"];
</script>
  
<template>
  <div class="projects-container">
    <h2><span class="numbered-title">03. </span>{{t('projects.headline')}}</h2>
    <div class="projects-card">
        <div class= "project-card" v-for="(project, index) in projects" :key="index">
          <div class="project-card-title">
            <IconCoding class="project-icon-coding" />
            <h3>{{ t(`projects.${project}.title`) }}</h3>
          </div>
          <p class="project-card-technologies">{{ t(`projects.${project}.technologies`) }}</p>
          <p>{{ t(`projects.${project}.description`) }}</p>
          <div class="project-card-link">
            <PrimaryButton content="Voir plus" class="project-button" />
          </div>
        </div>
      </div>
  </div>
</template>
  