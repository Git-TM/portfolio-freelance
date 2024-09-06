<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import images from '@/assets/images/images-project/images'

const { t, tm } = useI18n()

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  projectName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const imageSrc = computed(() => {
  return images[props.projectName] || ''
})
</script>

<template>
  <div class="modal-overlay" v-if="show" @click.self="close">
    <div class="modal-content">
      <h3 class="big-heading modal-title">{{ t(`projects.${projectName}.title`) }}</h3>
      <img :src="imageSrc" alt="project-photo" class="modal-content-photo" />
      <p>{{ t(`projects.${projectName}.technologies`) }}</p>
      <h3 class="modal-title">Fonctionnalités</h3>
      <ul>
        <li v-for="(mission, index) in tm(`projects.${projectName}.features`)" :key="index">
          {{ mission }}
        </li>
      </ul>
      <p class="close-button" @click="close">X</p>
    </div>
  </div>
</template>
