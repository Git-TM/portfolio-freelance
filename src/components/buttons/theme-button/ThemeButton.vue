<template>
  <div class="theme-toggle">
    <input
      type="checkbox"
      id="theme-toggle"
      class="switch-checkbox"
      @change="toggleTheme"
      :checked="userTheme === 'dark-theme'"
    />
    <label for="theme-toggle" class="switch-label">
      <div class="switch-background">
        <span class="icon-moon">🌙</span>
        <span class="icon-sun">☀️</span>
      </div>
      <div class="switch-toggle" :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userTheme = ref('dark-theme');

const toggleTheme = () => {
  userTheme.value = userTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme';
  document.documentElement.className = userTheme.value;
};
</script>
