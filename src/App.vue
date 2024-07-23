<script setup lang="ts">
import { ref } from '@vue/runtime-core'
import NavbarMain from '@/components/NavbarMain/NavbarMain';
import BannerAccueil from '@/components/banner-accueil/BannerAccueil.vue';
import BannerDetail from '@/components/banner-detail/BannerDetail';
import DetailProjets from '@/components/detail-projets/DetailProjets';
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
  <div class="container">
    <NavbarMain
    @switch-language="handleSwitchLanguage"
    @toggle-theme="handleToggleTheme"
    :current-locale="currentLocale"
    />
    <BannerAccueil />
    <BannerDetail />
    <DetailProjets />
  </div>
</template>
