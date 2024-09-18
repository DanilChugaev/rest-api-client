<script setup lang="ts">
import { useRequest } from '~/composables/useRequest'
import {
  METHOD_OPTIONS,
  DOMAIN,
  API_PATH,
} from '~/composables/constants'

const {
  selectedMethod,
  url,
  isSendingRequest,
  sendRequest,
} = useRequest()
</script>

<template>
  <prime-input-group class="request-field">
    <prime-dropdown
      v-model="selectedMethod"
      class="request-field__method"
      :options="METHOD_OPTIONS"
    />

    <prime-input-group-addon>{{ DOMAIN }}</prime-input-group-addon>

    <prime-input-group-addon>{{ API_PATH }}</prime-input-group-addon>

    <prime-input-text
      v-model="url"
    />

    <prime-button
      class="request-field__button"
      label="Отправить"
      :loading="isSendingRequest"
      @click="sendRequest"
    />
  </prime-input-group>
</template>

<style scoped lang="postcss">
.request-field {
  &__method {
    max-width: 120px
  }

  &__button {
    width: 150px;
  }
}
</style>
