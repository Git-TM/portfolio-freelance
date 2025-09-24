<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'

const { t, tm } = useI18n()
const selectedExperience = ref<string>('captive')

const experiences = ['logicaps', 'captive', 'lewagon', 'freelance', 'cartelis']

const selectExperience = (experienceKey: string) => {
  selectedExperience.value = experienceKey
}

const selectedExperienceKey = computed(() => selectedExperience.value)

const selectedMissions = computed(
  () => tm(`experiences.${selectedExperienceKey.value}.missions`) as string[]
)
</script>

<template>
  <div class="experiences-container">
    <h2><span class="numbered-title">03. </span>{{ t('experiences.headline') }}</h2>
    <div class="experiences-content">
      <div class="experiences-menu">
        <ul>
          <li
            v-for="experienceKey in experiences"
            :key="experienceKey"
            @click="selectExperience(experienceKey)"
            :class="
              selectedExperience === experienceKey ? 'menu-selected-value' : 'menu-unselected-value'
            "
          >
            {{ t(`experiences.${experienceKey}.name`) }}
          </li>
        </ul>
      </div>
      <div class="experiences-details">
        <div class="experiences-details-title">
          <h3>
            {{ t(`experiences.${selectedExperienceKey}.titre_poste`) }}
            <span class="primary-color-font"
              >@ {{ t(`experiences.${selectedExperienceKey}.name`) }}</span
            >
          </h3>
          <p>{{ t(`experiences.${selectedExperienceKey}.date_interval`) }}</p>
        </div>
        <div class="experiences-details-missions">
          <ul>
            <li v-for="(mission, index) in selectedMissions" :key="index">
              {{ mission }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
