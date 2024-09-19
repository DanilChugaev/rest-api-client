<script setup lang="ts">
useHead({
  title: 'Главная',
})
</script>

<template>
  <layout-page>
    <layout-section class="main-page">
      <entity-request-field />
      <entity-request-settings />
      <entity-request-response />
    </layout-section>
  </layout-page>
</template>

<style lang="postcss">
.main-page {
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--spacer-d);
  }
}
</style>
