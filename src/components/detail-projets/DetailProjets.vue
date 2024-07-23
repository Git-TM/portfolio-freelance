<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import DetailProjet from '../detail-projet/DetailProjet.vue';
  
  const { t } = useI18n();
  
  const projects = ["vera", "quelleenergie", "annuaire"];
</script>
  
<template>
    <h2>Mes projets</h2>
    <div class="details-projets">
        <div v-for="(project, index) in projects" :key="index">
            <DetailProjet :projectKey="project" :index="index" />
        </div>
    </div>
</template>
  