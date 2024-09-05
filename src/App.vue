<script setup lang="ts">
import { ref } from '@vue/runtime-core'
import NavbarMain from '@/components/navbar-main/NavbarMain';
import BannerAccueil from '@/components/banner-accueil/BannerAccueil';
import AboutMe from '@/components/about-me/AboutMe';
import ExperienceDetails from '@/components/experience-details/ExperienceDetails';
import DetailProjets from '@/components/detail-projets/DetailProjets';
import Contact from '@/components/contact/Contact';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);
const currentTheme = ref('dark-theme');

const handleSwitchLanguage = (newLocale: string) => {
  currentLocale.value = newLocale;
  locale.value = newLocale;
};

const handleToggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light-theme' ? 'dark-theme' : 'light-theme';
  document.body.className = currentTheme.value;
};
</script>

<template>
  <div class="main-container">
      <NavbarMain
        @switch-language="handleSwitchLanguage"
        @toggle-theme="handleToggleTheme"
        :current-locale="currentLocale"
      />
      <BannerAccueil />
      <AboutMe />
      <ExperienceDetails />
      <DetailProjets />
      <Contact />
    </div>
</template>
