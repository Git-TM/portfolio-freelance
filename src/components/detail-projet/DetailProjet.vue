<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import projectVera from '@/assets/images/project-vera.jpeg';
import projectAnnuaire from '@/assets/images/project-annuaire.png';
import projectQuelleenergie from '@/assets/images/project-quelleenergie.png';
import { computed } from 'vue';

const { t, tm, rt } = useI18n();

const props = defineProps<{
  projectKey: string;
  index: number;
}>();

interface Feature {
  feature: string;
}
const features = computed<Feature[]>(() => tm(`projects.${props.projectKey}.features`));

const projectImages: Record<string, string> = {
  vera: projectVera,
  annuaire: projectAnnuaire,
  quelleenergie: projectQuelleenergie
};

const getBorderClass = () => {
  return props.index % 2 === 0 ? "no-border-left" : "no-border-right";
};
</script>

<template>
  <div class="project-container">
    <div v-if="props.index % 2 === 0" class="project-container-image">
      <img alt="Vue logo" class="project-photo" :class="getBorderClass()" :src="projectImages[props.projectKey]" />
    </div>
    <div class="project-content">
      <h3>{{ t(`projects.${props.projectKey}.title`) }}</h3>
       <p>{{ t(`projects.${props.projectKey}.description`) }}</p>
       <div class="project-content-contribution">
         <h4>{{ t('projects.featuretitle') }}</h4>
         <ul>
          <li v-for="(featureObj, i) in features" :key="i">
            {{ rt(featureObj.feature) }}
          </li>
         </ul>
       </div>
       <p class="blue-font">{{ t(`projects.${props.projectKey}.technologies`) }}</p>
    </div>
    <div v-if="props.index % 2 !== 0" class="project-container-image">
      <img alt="Vue logo" :class="getBorderClass()" class="project-photo" :src="projectImages[props.projectKey]" />
    </div>
  </div>
</template>