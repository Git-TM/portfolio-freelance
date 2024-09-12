<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavbarMain from '@/components/navbar-main/NavbarMain'
import BannerAccueil from '@/components/banner-accueil/BannerAccueil'
import AboutMe from '@/components/about-me/AboutMe'
import ExperienceDetails from '@/components/experience-details/ExperienceDetails'
import DetailProjets from '@/components/detail-projets/DetailProjets'
import InitialLoader from '@/components/initial-loader/InitialLoader'
import TimelineFormation from '@/components/timeline-formation/TimelineFormation'
import MainFooter from '@/components/main-footer/MainFooter'
import Contact from '@/components/contact/Contact'
import images from '@/assets/images/images-project/images'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const currentlyLoading = ref(true)
const formations = ['first_ebi', 'second_ebi', 'lewagon']
const featured_projects = ['vera', 'quelleenergie', 'annuaire', 'misterauto', 'goodwill']
const personal_projects = ['portfolio']

const setInitialConfig = () => {
  configStore.setInitialConfig()
}

const preloadImages = () => {
  Object.values(images).forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
  setInitialConfig()
  preloadImages()
  setTimeout(() => {
    currentlyLoading.value = false
  }, 2000)
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
    <DetailProjets :projects="featured_projects" , project-type="featured_projects" />
    <DetailProjets :projects="personal_projects" , project-type="personal_projects" />
    <Contact />
    <MainFooter />
  </div>
</template>
