<template>
  <section class="section">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
