<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconCoding from '@/assets/images/icons/icon-coding.svg'
import PrimaryButton from '../buttons/primary-button/PrimaryButton'
import ModalProject from '../modal-project/ModalProject'
import { ref } from 'vue'

const { t } = useI18n()

const projects = ['vera', 'quelleenergie', 'annuaire']

const isModalOpen = ref(false)
const selectedProject = ref<string | null>(null)

const openModal = (project: string) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <div :class="{ 'blur-background': isModalOpen, 'projects-container': true }">
    <h2><span class="numbered-title">03. </span>Mes projets</h2>
    <div class="projects-card">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <div class="project-card-title">
          <IconCoding class="project-icon-coding" />
          <h3>{{ t(`projects.${project}.title`) }}</h3>
        </div>
        <p class="project-card-technologies">{{ t(`projects.${project}.technologies`) }}</p>
        <p>{{ t(`projects.${project}.description`) }}</p>
        <div class="project-card-link">
          <PrimaryButton content="Voir plus" class="project-button" @click="openModal(project)" />
        </div>
      </div>
    </div>
  </div>

  <ModalProject
    v-if="selectedProject"
    :show="isModalOpen"
    @close="closeModal"
    :projectName="selectedProject"
  />
</template>
