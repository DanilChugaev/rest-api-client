<template>
  <layout-container>
    <layout-header />

    <main class="main">
      <slot />
    </main>

    <layout-footer />
  </layout-container>
</template>

<style scoped>
.main {
  flex: 1 0 auto;
}

:deep(.footer) {
  flex: 0 0 auto;
}
</style>
