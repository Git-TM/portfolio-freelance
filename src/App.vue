<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavbarMain from '@/components/navbar-main/NavbarMain'
import BannerAccueil from '@/components/banner-accueil/BannerAccueil'
import AboutMe from '@/components/about-me/AboutMe'
import ExperienceDetails from '@/components/experience-details/ExperienceDetails'
import DetailProjets from '@/components/detail-projets/DetailProjets'
import InitialLoader from '@/components/initial-loader/InitialLoader'
import Contact from '@/components/contact/Contact'
import { useI18n } from 'vue-i18n'
import images from '@/assets/images/images-project/images'
import { useThemeStore } from '@/stores/theme'

const { locale } = useI18n()
const currentLocale = ref(locale.value)
const currentlyLoading = ref(true)

const themeStore = useThemeStore()

const handleSwitchLanguage = (newLocale: string) => {
  currentLocale.value = newLocale
  locale.value = newLocale
}

const setInitialTheme = () => {
  themeStore.setInitialTheme()
}

const featured_projects = ['vera', 'quelleenergie', 'annuaire']
const personal_projects = ['portfolio', 'misterauto', 'goodwill']

const preloadImages = () => {
  Object.values(images).forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
  setInitialTheme()
  preloadImages()
  setTimeout(() => {
    currentlyLoading.value = false
  }, 2000)
})
</script>

<template>
  <InitialLoader v-if="currentlyLoading" />
  <div class="main-container" v-else>
    <NavbarMain @switch-language="handleSwitchLanguage" :current-locale="currentLocale" />
    <BannerAccueil />
    <AboutMe />
    <ExperienceDetails />
    <DetailProjets :projects="featured_projects" , project-type="featured_projects" />
    <DetailProjets :projects="personal_projects" , project-type="personal_projects" />
    <Contact />
  </div>
</template>
