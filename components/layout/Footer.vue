<script setup lang="ts">
const year = new Date().getUTCFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__content container">
      <span>Copyright © {{ year }} Danil Chugaev</span>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
@import "assets/css/vars/media.pcss";

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--surface-border);
  background-color: var(--surface-0);

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
