<template>
  <layout-container>
    <div class="page">
      <div class="container">
        <div class="slot">
          <slot />
        </div>

        <a
          v-tooltip.top="'На главную'"
          href="/"
          class="link"
        >
          <layout-logo class="logo" />
        </a>
      </div>
    </div>
  </layout-container>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slot {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link {
  margin: var(--spacer-g) 0 0;
}

.logo {
  height: 200px;
}
</style>
