<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import technologyIcons from '@/assets/images/icons/technologies/technologies'

const props = defineProps<{
  technologies: string // String séparée par des virgules
  maxVisible?: number // Nombre max d'icônes à afficher
  size?: 'small' | 'medium' | 'large'
}>()

const { t } = useI18n()

// Parse les technologies
const technologyList = computed(() => {
  if (!props.technologies) return []
  return props.technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0)
})

// Technologies visibles et cachées
const visibleTechs = computed(() => {
  const max = props.maxVisible || 3
  return technologyList.value.slice(0, max)
})

const hiddenCount = computed(() => {
  const max = props.maxVisible || 3
  return Math.max(0, technologyList.value.length - max)
})

// Récupère les données des technologies visibles
const visibleTechsData = computed(() => {
  return visibleTechs.value.map((techKey) => {
    const icon = technologyIcons[techKey]
    const name = t(`technologies_list.${techKey}.name`, techKey)

    return {
      key: techKey,
      icon,
      name,
      hasIcon: !!icon
    }
  })
})

const containerClass = computed(() => {
  const classes = ['tech-preview']
  if (props.size) classes.push(`size-${props.size}`)
  return classes.join(' ')
})
</script>

<template>
  <div :class="containerClass">
    <!-- Technologies visibles -->
    <div v-for="tech in visibleTechsData" :key="tech.key" class="tech-item" :title="tech.name">
      <img v-if="tech.hasIcon" :src="tech.icon" :alt="tech.name" class="tech-icon" />
      <div v-else class="tech-placeholder" :title="tech.name">
        {{ tech.name.charAt(0) }}
      </div>
    </div>

    <!-- Compteur pour les technologies cachées -->
    <div v-if="hiddenCount > 0" class="tech-more" :title="`+${hiddenCount} autres technologies`">
      +{{ hiddenCount }}
    </div>
  </div>
</template>
