import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

import { RequestMethod } from '~/composables/types/request'
import { API_PATH } from '~/composables/constants'

const isSendingRequest = ref(false)
const requestResponse = ref(null)

export function useRequest() {
  const { errorLog } = useLogger()

  const selectedMethod = useStorage<RequestMethod>('selected-method', RequestMethod.GET)
  const url = useStorage<string>('url', '')

  async function sendRequest() {
    try {
      isSendingRequest.value = true

      requestResponse.value = await $fetch(`${API_PATH}${url.value}`, {
        method: selectedMethod.value,
      })
    } catch (error: any) {
      errorLog(error)
    } finally {
      isSendingRequest.value = false
    }
  }

  return {
    selectedMethod,
    url,
    isSendingRequest,
    requestResponse,
    sendRequest,
  }
}
