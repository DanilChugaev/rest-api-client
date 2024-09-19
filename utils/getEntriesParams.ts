import { IRequestParam } from '~/composables/types/request'

export function getEntriesParams(params: IRequestParam[]) {
  return Object.fromEntries(params.map((param: IRequestParam) => [param.key, param.value]))
}
