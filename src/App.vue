<script setup lang="ts">
import NavbarMain from '@/components/navbar-main/NavbarMain'
import BannerAccueil from '@/components/banner-accueil/BannerAccueil'
import AboutMe from '@/components/about-me/AboutMe'
import ExperienceDetails from '@/components/experience-details/ExperienceDetails'
import DetailProjets from '@/components/projects/detail-projets/DetailProjets'
import TimelineFormation from '@/components/timeline-formation/TimelineFormation'
import Contact from '@/components/contact/Contact'
import { useConfigStore } from '@/stores/config'
import { useInitialLoader } from '@/composables/useInitialLoader'
import { onMounted } from 'vue'

const configStore = useConfigStore()
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

const { currentlyLoading } = useInitialLoader()

onMounted(() => {
  configStore.setInitialConfig()
})
</script>

<template>
  <div class="main-container" v-show="!currentlyLoading">
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
