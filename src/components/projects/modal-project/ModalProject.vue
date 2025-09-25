<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import project_images from '@/assets/images/images-project/project_images'
import ListTechnologies from '@/components/list-technologies/ListTechnologies'

const { t, tm } = useI18n()

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const features = computed(() => {
  return tm(`projects.${props.projectType}.${props.projectName}.features`) as String[]
})

const imageSrc = computed(() => {
  return project_images[props.projectName] || ''
})
</script>

<template>
  <div class="modal-overlay" v-if="show" @click.self="close">
    <div class="modal-content">
      <!-- Header -->
      <div class="modal-header">
        <h3 class="modal-title">
          {{ t(`projects.${props.projectType}.${projectName}.title`) }}
        </h3>
        <button class="close-button" @click="close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Image -->
      <div class="modal-image" v-if="imageSrc">
        <img :src="imageSrc" alt="project-photo" class="modal-photo" />
      </div>

      <!-- Content -->
      <div class="modal-body">
        <!-- Technologies -->
        <div class="modal-section">
          <ListTechnologies
            :technologies="t(`projects.${props.projectType}.${projectName}.technologies`)"
            size="medium"
            layout="horizontal"
          />
        </div>

        <!-- Features -->
        <div class="modal-section">
          <h4 class="section-title">{{ t('projects.features') }}</h4>
          <ul class="features-list list-bullet">
            <li v-for="(mission, index) in features" :key="index">
              {{ mission }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
