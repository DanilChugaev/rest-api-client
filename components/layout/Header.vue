<script setup lang="ts">
</script>

<template>
  <header class="header">
    <div class="header__content container">
      <ui-logo-link />

      <entity-switch-theme />
    </div>
  </header>
</template>

<style scoped lang="postcss">
@import "assets/css/vars/media.pcss";

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-0);

  &__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
