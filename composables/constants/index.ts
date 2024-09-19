import { IRequestParam, RequestMethod } from '~/composables/types/request'
import { uid } from '~/utils/uid'

export const METHOD_OPTIONS = Object.values(RequestMethod)

export const DOMAIN = 'http://localhost:3000'
export const API_PATH = '/api'

export const INITIAL_PARAM = (): IRequestParam => ({
  id: uid(),
  key: '',
  value: '',
})
