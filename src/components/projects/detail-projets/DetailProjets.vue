<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrimaryButton from '@/components/unitary/buttons/primary-button/PrimaryButton'
import ModalProject from '@/components/projects/modal-project/ModalProject'
import { ref } from 'vue'
import StatusBadge from '@/components/unitary/status-badge/StatusBadge'

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
    <div class="projects-card">
      <div class="project-card" v-for="(project, index) in props.projects" :key="index">
        <div class="project-card-title">
          <h3>{{ t(`projects.${projectType}.${project}.title`) }}</h3>
          <StatusBadge
            :status="t(`projects.${projectType}.${project}.status`)"
            :project_type="projectType"
            :project_name="project"
          />
        </div>
        <p class="project-card-technologies">
          {{ t(`projects.${projectType}.${project}.technologies`) }}
        </p>
        <p>{{ t(`projects.${projectType}.${project}.description`) }}</p>
        <div class="project-card-link">
          <PrimaryButton
            :content="$t(`projects.calltoaction`)"
            class="project-button"
            @click="openModal(project)"
          />
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
