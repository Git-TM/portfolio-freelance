<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <div class="about-me-container">
    <h2>Mes formations</h2>
    <div class="about-me-card">
      <p>{{ t('introduction.description_formation') }}</p>
      <p>{{ t('introduction.description_dev') }}</p>
    </div>
    <h2>Mes expériences Pro</h2>
    <div class="rightbox">
      <div class="rb-container">
        <ul class="rb">
          <li class="rb-item">
            <div class="timestamp">Stage Conseil Digital // 2020 (6 months)</div>
            <div class="item-title">Cartelis</div>
            <div class="item-desc">Ecole d'ingénieur axée biologie, maths, stats, programmation. Spécialisation business</div>
          </li>
          <li class="rb-item">
            <div class="timestamp">2020-2023</div>
            <div class="item-title">Freelance Growth Marketing</div>
            <div class="item-desc">Ecole d'ingénieur axée biologie, maths, stats, programmation. Spécialisation business</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>