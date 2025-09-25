<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import technologyIcons from '@/assets/images/icons/technologies/technologies'

const props = defineProps<{
  technologies: string // String séparée par des virgules comme "ruby_on_rails, react_js, inertia_js"
  size?: 'small' | 'medium' | 'large'
  layout?: 'horizontal' | 'vertical' | 'grid'
}>()

const { t } = useI18n()

// Parse les technologies depuis la string
const technologyList = computed(() => {
  if (!props.technologies) return []

  return props.technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0)
})

// Récupère les informations de chaque technologie
const technologiesData = computed(() => {
  return technologyList.value.map((techKey) => {
    const icon = technologyIcons[techKey]
    const name = t(`technologies_list.${techKey}.name`, techKey) // Fallback sur la clé si pas trouvé

    return {
      key: techKey,
      icon,
      name,
      hasIcon: !!icon
    }
  })
})

// Classes CSS dynamiques
const containerClass = computed(() => {
  const classes = ['technologies-list']
  if (props.layout) classes.push(`layout-${props.layout}`)
  if (props.size) classes.push(`size-${props.size}`)
  return classes.join(' ')
})
</script>

<template>
  <div :class="containerClass">
    <div v-for="tech in technologiesData" :key="tech.key" class="tech-item" :title="tech.name">
      <!-- Badge uniforme avec logo à gauche + texte -->
      <span class="tech-badge">
        <img v-if="tech.hasIcon" :src="tech.icon" :alt="tech.name" class="tech-icon" />
        <span class="tech-name">{{ t(`technologies_list.${tech.key}.name`) }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.technologies-list {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  &.layout-vertical {
    flex-direction: column;
    align-items: flex-start;
  }

  &.layout-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.5rem;
  }

  .tech-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tech-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--primary-color);
    background: rgba(57, 144, 255, 0.1);
    padding: 0.4rem 0.7rem;
    border-radius: 16px;
    border: 1px solid rgba(57, 144, 255, 0.2);
    font-weight: 500;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
      transform: translateY(-1px);
      background: rgba(57, 144, 255, 0.15);
      border-color: rgba(57, 144, 255, 0.3);
      box-shadow: 0 2px 8px rgba(57, 144, 255, 0.2);
    }
  }

  .tech-icon {
    object-fit: contain;
    flex-shrink: 0;
  }

  .tech-name {
    font-size: inherit;
    font-weight: inherit;
  }

  // Tailles des badges et icônes
  &.size-small {
    .tech-badge {
      padding: 0.3rem 0.5rem;
      font-size: 0.7rem;
      gap: 0.3rem;
    }
    .tech-icon {
      height: 14px;
      width: auto;
    }
  }

  &.size-medium {
    .tech-badge {
      padding: 0.4rem 0.7rem;
      font-size: 0.8rem;
      gap: 0.5rem;
    }
    .tech-icon {
      height: 18px;
      width: auto;
    }
  }

  &.size-large {
    .tech-badge {
      padding: 0.5rem 0.9rem;
      font-size: 0.9rem;
      gap: 0.6rem;
    }
    .tech-icon {
      height: 22px;
      width: auto;
    }
  }

  // Taille par défaut
  .tech-icon {
    height: 16px;
    width: auto;
  }
}

@media (max-width: 768px) {
  .technologies-list {
    gap: 0.5rem;

    .tech-badge {
      padding: 0.3rem 0.6rem;
      font-size: 0.75rem;
    }

    &.size-medium .tech-icon,
    &.size-large .tech-icon {
      height: 16px; // Uniforme sur mobile
    }
  }
}
</style>
