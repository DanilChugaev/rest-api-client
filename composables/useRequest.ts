import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

import { RequestMethod } from '~/composables/types/request'

export function useRequest() {
  const selectedMethod = useStorage<RequestMethod>('selected-method', RequestMethod.GET)
  const url = useStorage<string>('url', '')

  const isSendingRequest = ref(false)

  async function sendRequest() {
    isSendingRequest.value = true

    setTimeout(() => isSendingRequest.value = false, 2000)
  }

  return {
    selectedMethod,
    url,
    isSendingRequest,
    sendRequest,
  }
}
