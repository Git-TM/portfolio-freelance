<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import projectVera from '@/assets/images/project-vera.jpeg';
  import projectAnnuaire from '@/assets/images/project-annuaire.png';
  import projectQuelleenergie from '@/assets/images/project-quelleenergie.png';

  const { t, tm } = useI18n();

  const props = defineProps<{
    projectKey: string;
    index: number;
  }>();

  // const projectName = tm(`projects.${props.projectKey}.t`);
  const projectResults = tm(`projects.${props.projectKey}.implication`);
  // const srcImg = `@/assets/images/project-${props.projectKey}.png`;

  const projectImages: Record<string, string> = {
      vera: projectVera,
      annuaire: projectAnnuaire,
      quelleenergie: projectQuelleenergie
    };

    const getBorderClass = () => {
      return props.index % 2 === 0 ? "no-border-left" : "no-border-right"
    }
    console.log(getBorderClass());
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
        <h4>Mes contributions</h4>
        <ul>
          <li v-for="(result, i) in projectResults">{{ result }}</li>
        </ul>
      </div>
      <p class="blue-font">{{ t(`projects.${props.projectKey}.technologies`) }}</p>
    </div>
    <div v-if="props.index % 2 !== 0" class="project-container-image">
      <img alt="Vue logo" :class="getBorderClass()" class="project-photo"  :src="projectImages[props.projectKey]" />
    </div>
  </div>
</template>
