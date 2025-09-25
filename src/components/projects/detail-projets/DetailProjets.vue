<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ModalProject from '@/components/projects/modal-project/ModalProject'
import { ref } from 'vue'
import StatusBadge from '@/components/unitary/status-badge/StatusBadge'
import TechPreview from '@/components/list-technologies/TechPreview'

const { t } = useI18n()

const props = defineProps<{
  projects: string[] | null
  projectType: string | null
}>()

const isModalOpen = ref(false)
const selectedProject = ref<string | null>(null)

const openModal = (project: string) => {
  console.log('openModal', project)
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}

const number_title = props.projectType === 'featured_projects' ? '04. ' : '05. '
</script>

<template>
  <div :class="{ 'blur-background': isModalOpen, 'projects-container': true }">
    <h2>
      <span class="numbered-title">{{ number_title }} </span
      >{{ t(`projects.${projectType}.headline`) }}
    </h2>
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in props.projects"
        :key="index"
        @click="openModal(project)"
      >
        <!-- Header: Titre + Status -->
        <div class="card-header">
          <h3 class="card-title">{{ t(`projects.${projectType}.${project}.title`) }}</h3>
          <StatusBadge :status="t(`projects.${projectType}.${project}.status`)" />
        </div>

        <!-- Divider -->
        <div class="card-divider"></div>

        <!-- Body: Description + Tech preview -->
        <div class="card-body">
          <p class="card-description">
            {{ t(`projects.${projectType}.${project}.description`) }}
          </p>

          <div class="card-tech">
            <TechPreview
              :technologies="t(`projects.${projectType}.${project}.technologies`)"
              :max-visible="3"
              size="medium"
            />
          </div>
        </div>

        <!-- Footer: CTA -->
        <div class="card-footer">
          <button class="card-cta" @click.stop="openModal(project)">
            {{ $t('projects.calltoaction') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      </div>
    </div>
  </div>

  <ModalProject
    v-if="selectedProject && props.projectType"
    :show="isModalOpen"
    @close="closeModal"
    :projectName="selectedProject"
    :projectType="props.projectType"
  />
</template>
