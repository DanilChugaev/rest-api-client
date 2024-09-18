<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, changeTheme } = useTheme()

const themeButtonIcon = computed(() => `pi ${ isDark.value ? 'pi-moon' : 'pi-sun' }`)
const tooltipText = 'Сменить цветовую схему'
</script>

<template>
  <prime-button
    v-tooltip.bottom="tooltipText"
    class="switch-theme"
    :icon="themeButtonIcon"
    text
    size="large"
    :aria-label="tooltipText"
    @click="changeTheme"
  />
</template>

<style scoped>
.switch-theme {
  &:deep(.p-button-icon) {
    color: var(--surface-800);
  }
}
</style>
