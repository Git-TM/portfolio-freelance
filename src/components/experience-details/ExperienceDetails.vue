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

const currentIndex = computed(() => experiences.indexOf(selectedExperience.value))

const goToNext = () => {
  const nextIndex = (currentIndex.value + 1) % experiences.length
  selectedExperience.value = experiences[nextIndex]
}

const goToPrev = () => {
  const prevIndex = currentIndex.value === 0 ? experiences.length - 1 : currentIndex.value - 1
  selectedExperience.value = experiences[prevIndex]
}

const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const swipeDistance = touchStartX.value - touchEndX.value

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      goToNext()
    } else {
      goToPrev()
    }
  }
}
</script>

<template>
  <div class="experiences-container">
    <h2><span class="numbered-title">03. </span>{{ t('experiences.headline') }}</h2>

    <div class="experiences-content">
      <div class="experiences-menu desktop-menu">
        <ul class="list-clean">
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

      <div class="mobile-experience-interface">
        <div class="mobile-nav-header">
          <!-- Compteur au-dessus -->
          <div class="experience-counter">{{ currentIndex + 1 }}/{{ experiences.length }}</div>

          <!-- Navigation avec points au centre -->
          <div class="navigation-row">
            <button @click="goToPrev" class="nav-btn prev-btn" :disabled="experiences.length <= 1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Points de progression au centre -->
            <div class="progress-indicators">
              <div
                v-for="(exp, index) in experiences"
                :key="exp"
                :class="['indicator', { active: index === currentIndex }]"
                @click="selectExperience(exp)"
              ></div>
            </div>

            <button @click="goToNext" class="nav-btn next-btn" :disabled="experiences.length <= 1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- Nom de l'expérience courante -->
          <div class="current-experience-name">
            <h4>{{ t(`experiences.${selectedExperienceKey}.name`) }}</h4>
          </div>
        </div>
      </div>

      <div class="experiences-details" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="experiences-details-title">
          <h3>
            {{ t(`experiences.${selectedExperienceKey}.titre_poste`) }}
            <span class="primary-color-font"
              >@ {{ t(`experiences.${selectedExperienceKey}.name`) }}</span
            >
          </h3>
          <p class="primary-color-font">
            {{ t(`experiences.${selectedExperienceKey}.date_interval`) }}
          </p>
        </div>
        <div class="experiences-details-missions">
          <ul class="list-bullet">
            <li v-for="(mission, index) in selectedMissions" :key="index">
              {{ mission }}
            </li>
          </ul>
        </div>

        <div class="swipe-hint mobile-only">
          <span>← Glisser pour naviguer →</span>
        </div>
      </div>
    </div>
  </div>
</template>
