<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import iconEbi from '@/assets/images/icons/formation/icon-ebi.jpg'
import iconLewagon from '@/assets/images/icons/formation/icon-lewagon.png'

const { t } = useI18n()

const props = defineProps<{
  formations: string[] | null
}>()

const getRightImages = (formation: string): string => {
  if (formation === 'lewagon') {
    return iconLewagon
  } else if (formation.includes('ebi')) {
    return iconEbi
  }
  return ''
}
</script>

<template>
  <div class="timeline-container">
    <h2><span class="numbered-title">01. </span>{{ t(`formations.headline`) }}</h2>
    <div class="timeline-details">
      <ul class="list-clean">
        <li v-for="(formation, index) in props.formations" :key="index">
          <div class="timeline-detail">
            <img alt="Vue logo" :src="getRightImages(formation)" />
            <div class="timeline-description">
              <p class="timeline-description-title primary-color-font">
                {{ t(`formations.${formation}.title`) }}
              </p>
              <span class="primary-color-font">{{ t(`formations.${formation}.date`) }}</span>
              <p>
                {{ t(`formations.${formation}.details`) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
