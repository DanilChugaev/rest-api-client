<script setup lang="ts">
import type { IRequestParam } from '~/composables/types/request'

defineProps<{
  items: IRequestParam[]
}>()

defineEmits<{
  removeItem: (id: any) => true
  addItem: () => true
}>()

const model = defineModel<IRequestParam[]>()
</script>

<template>
  <prime-data-table
    v-model:selection="model"
    class="ui-table"
    show-gridlines
    data-key="id"
    :value="items"
  >
    <template #empty>
      <div class="ui-table__empty">
        Добавьте данные
      </div>
    </template>

    <prime-column
      class="ui-table__column ui-table__column--checkbox"
      selection-mode="multiple"
    />

    <prime-column
      field="id"
      style="display: none"
    />

    <prime-column
      field="key"
      header="Key"
    >
      <template #body="{ data, field }">
        <prime-input-text
          v-model="data[field]"
          class="ui-table__input"
        />
      </template>
    </prime-column>

    <prime-column
      field="value"
      header="Value"
    >
      <template #body="{ data, field }">
        <prime-input-text
          v-model="data[field]"
          class="ui-table__input"
        />
      </template>
    </prime-column>

    <prime-column
      class="ui-table__column ui-table__column--actions"
      header="Actions"
    >
      <template #body="{ data }">
        <prime-button
          v-tooltip.bottom="'Удалить'"
          size="large"
          text
          aria-label="Удалить"
          icon="pi pi-trash"
          @click="$emit('removeItem', data.id)"
        />
      </template>
    </prime-column>

    <template #footer>
      <prime-button
        size="small"
        label="Добавить"
        icon="pi pi-plus"
        @click="$emit('addItem')"
      />
    </template>
  </prime-data-table>
</template>

<style lang="postcss">
.ui-table {
  &__empty {
    text-align: center;
  }
  &__column {
    &--checkbox {
      width: 52px;
    }

    &--actions {
      width: 55px;
    }
  }

  &__input {
    width: 100%;
  }
}
</style>
