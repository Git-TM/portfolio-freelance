<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
  status: string
}>()

const { t } = useI18n()

const badgeClass = computed(() => {
  return `status-badge ${props.status}`
})

const statusLabel = computed(() => {
  return t(`status.${props.status}`)
})
</script>

<template>
  <div :class="badgeClass">
    {{ statusLabel }}
  </div>
</template>
