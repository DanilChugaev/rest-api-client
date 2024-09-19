<script setup lang="ts">
import { useRequest } from '~/composables/useRequest'

const {
  requestBody,
  selectedRequestBody,
  removeBodyItem,
  addBodyItem,
} = useRequest()
</script>

<template>
  <ui-table
    v-model="selectedRequestBody"
    :items="requestBody"
    @remove-item="removeBodyItem"
    @add-item="addBodyItem"
  />
</template>

<style scoped>

</style>
