<script setup lang="ts">
import { useRequest } from '~/composables/useRequest'
import {
  DOMAIN,
  API_PATH,
} from '~/composables/constants'

const { url, stringParams } = useRequest()

const fullUrl = computed(() => `${DOMAIN}${API_PATH}${url.value}${stringParams.value}`)
</script>

<template>
  <h1 class="url-view">
    <span class="url-view__text">URL - </span>
    <span class="url-view__url">{{ fullUrl }}</span>
  </h1>
</template>

<style scoped lang="postcss">
.url-view {
  &__url {
    font-weight: 400;
  }
}
</style>
