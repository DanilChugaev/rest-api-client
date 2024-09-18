<script setup lang="ts">
</script>

<template>
  <nuxt-link
    class="ui-logo-link"
    to="/"
  >
    <layout-logo class="ui-logo-link__img" />
  </nuxt-link>
</template>

<style scoped lang="postcss">
.ui-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  transition: opacity 0.3s;

  &:deep(.logo) {
    opacity: 1;
  }

  &:hover {
    opacity: 0.8;
  }

  &__img {
    height: 60px;
  }
}
</style>
