<script setup lang="ts">
import { useRequest } from '~/composables/useRequest'

const {
  requestParams,
  selectedRequestParams,
  removeParam,
  addParam,
} = useRequest()
</script>

<template>
  <ui-table
    v-model="selectedRequestParams"
    :items="requestParams"
    @remove-item="removeParam"
    @add-item="addParam"
  />
</template>

<style scoped>

</style>
