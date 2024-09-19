<script setup lang="ts">
import { useRequest } from '~/composables/useRequest'

const {
  requestResponse,
} = useRequest()
</script>

<template>
  <div class="request-response">
    <h3 class="request-response__title">
      Response
    </h3>

    <pre class="request-response__result">
      {{ requestResponse }}
    </pre>
  </div>
</template>

<style scoped lang="postcss">
.request-response {
  &__title {
    margin-top: 0;
  }

  &__result {
    padding: var(--spacer-d);
    background-color: var(--surface-a);
    border-radius: var(--border-radius);
  }
}
</style>
