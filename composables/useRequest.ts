import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

import { RequestMethod, IRequestParam } from '~/composables/types/request'
import { API_PATH, INITIAL_PARAM } from '~/composables/constants'

const isSendingRequest = ref(false)
const requestResponse = ref(null)

export function useRequest() {
  const { errorLog } = useLogger()

  const selectedMethod = useStorage<RequestMethod>('selected-method', RequestMethod.GET)
  const url = useStorage<string>('url', '')
  const requestParams = useStorage<IRequestParam[]>('request-params', [INITIAL_PARAM()])
  const selectedRequestParams = useStorage<IRequestParam[]>('selected-request-params', [])
  const requestBody = useStorage<IRequestParam[]>('request-body', [INITIAL_PARAM()])
  const selectedRequestBody = useStorage<IRequestParam[]>('selected-request-body', [])

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

  function removeParam(id: IRequestParam['id']) {
    requestParams.value = requestParams.value.filter((item: IRequestParam) => item.id !== id)
  }

  function addParam() {
    requestParams.value.push(INITIAL_PARAM())
  }

  function removeBodyItem(id: IRequestParam['id']) {
    requestBody.value = requestBody.value.filter((item: IRequestParam) => item.id !== id)
  }

  function addBodyItem() {
    requestBody.value.push(INITIAL_PARAM())
  }

  return {
    selectedMethod,
    url,
    isSendingRequest,
    requestResponse,
    requestParams,
    selectedRequestParams,
    requestBody,
    selectedRequestBody,
    sendRequest,
    removeParam,
    addParam,
    removeBodyItem,
    addBodyItem,
  }
}
