<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import project_images from '@/assets/images/images-project/project_images'
import ListTechnologies from '@/components/list-technologies/ListTechnologies'

const { t, tm } = useI18n()

const props = defineProps({
  show: { type: Boolean, required: true },
  projectName: { type: String, required: true },
  projectType: { type: String, required: true }
})

const emit = defineEmits(['close'])

const imageLoaded = ref(false)
const modalRef = ref<HTMLElement | null>(null)

const close = () => emit('close')

// Typed features with fallback
const features = computed<string[]>(() => {
  const raw = tm(`projects.${props.projectType}.${props.projectName}.features`) as unknown
  return Array.isArray(raw) ? (raw as string[]) : []
})

const imageSrc = computed(() => {
  return project_images[props.projectName] || ''
})

// Reset image state when project changes
watch(
  () => props.projectName,
  () => {
    imageLoaded.value = false
  }
)

// Lock body scroll and focus modal when opened
watch(
  () => props.show,
  (isOpen) => {
    document.body.classList.toggle('modal-open', isOpen)
    if (isOpen) {
      // focus after next paint
      requestAnimationFrame(() => modalRef.value?.focus())
    }
  },
  { immediate: true }
)

const onImageLoad = () => {
  imageLoaded.value = true
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  if (props.show) modalRef.value?.focus()
})
onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
})
</script>

<template>
  <div class="modal-overlay" v-if="show" @click.self="close">
    <div
      class="modal-content"
      ref="modalRef"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`modal-title-${projectName}`"
      @keydown="onKeydown"
    >
      <!-- Header -->
      <div class="modal-header">
        <h3 class="modal-title" :id="`modal-title-${projectName}`">
          {{ t(`projects.${props.projectType}.${projectName}.title`) }}
        </h3>
        <button class="close-button" @click="close" aria-label="Close">
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

      <!-- Image avec skeleton -->
      <div class="modal-image" v-if="imageSrc">
        <div v-if="!imageLoaded" class="image-skeleton"></div>
        <img
          :key="imageSrc"
          :src="imageSrc"
          :alt="`${projectName} project screenshot`"
          class="modal-photo"
          :class="{ loaded: imageLoaded }"
          decoding="async"
          loading="eager"
          width="600"
          height="256"
          @load="onImageLoad"
        />
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
