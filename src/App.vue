<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavbarMain from '@/components/navbar-main/NavbarMain'
import BannerAccueil from '@/components/banner-accueil/BannerAccueil'
import AboutMe from '@/components/about-me/AboutMe'
import ExperienceDetails from '@/components/experience-details/ExperienceDetails'
import DetailProjets from '@/components/projects/detail-projets/DetailProjets'
import InitialLoader from '@/components/initial-loader/InitialLoader'
import TimelineFormation from '@/components/timeline-formation/TimelineFormation'
import Contact from '@/components/contact/Contact'
import images from '@/assets/images/images-project/project_images'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const currentlyLoading = ref(true)
const formations = ['first_ebi', 'second_ebi', 'lewagon']
const featured_projects = [
  'logicaps',
  'vera',
  'quelleenergie',
  'annuaire',
  'misterauto',
  'goodwill'
]
const personal_projects = ['stock-alert', 'portfolio', 'other_projects']

const setInitialConfig = () => {
  configStore.setInitialConfig()
}

const preloadImages = () => {
  Object.values(images).forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

const needLoadingAnimation = () => {
  const hasLoadedBefore = localStorage.getItem('hasLoadedBefore')
  if (!hasLoadedBefore) {
    localStorage.setItem('hasLoadedBefore', 'true')
    setTimeout(() => {
      currentlyLoading.value = false
    }, 2000)
  } else {
    currentlyLoading.value = false
  }
}

onMounted(() => {
  setInitialConfig()
  preloadImages()
  needLoadingAnimation()
})
</script>

<template>
  <InitialLoader v-if="currentlyLoading" />
  <div class="main-container">
    <NavbarMain />
    <BannerAccueil />
    <TimelineFormation :formations="formations" />
    <AboutMe />
    <ExperienceDetails />
    <DetailProjets :projects="featured_projects" project-type="featured_projects" />
    <DetailProjets :projects="personal_projects" project-type="personal_projects" />
    <Contact />
  </div>
</template>
