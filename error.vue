<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const goBack = async () => {
  history.back()
}

const goToMainPage = async () => {
  await router.push('/')
  await router.go(0)
}
</script>

<template>
  <NuxtLayout name="error">
    <h1 class="status-code">
      {{ error.statusCode }}
    </h1>
    <h2 class="message">
      {{ error.message }}
    </h2>

    <div class="links">
      <prime-button
        severity="secondary"
        label="Вернуться назад"
        @click="goBack"
      />

      <span>или</span>

      <prime-button
        severity="secondary"
        label="Вернуться на главную"
        @click="goToMainPage"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.status-code {
  font-size: 10rem;
  margin: 0;
}

.message {
  font-weight: var(--font-weight-normal);
  margin: 0;
}

.links {
  display: flex;
  align-items: center;
  margin-top: var(--spacer-e);
  gap: var(--spacer-d);
}
</style>
