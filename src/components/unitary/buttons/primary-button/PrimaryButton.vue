
<script setup lang="ts">


const props = defineProps<{
  content: string;
}>();

</script>

<template>
  <div class="primary-button-container">
    <a href="#_" class="primary-button">
      <span class="primary-button-background"></span>
      <span class="primary-button-icon">
        <svg class="primary-button-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span class="primary-button-text">{{props.content}}</span>
    </a>
  </div>
</template>