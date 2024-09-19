import { IRequestParam } from '~/composables/types/request'

export function getStringParams(params: IRequestParam[]) {
  return params.reduce((acc: string, current: IRequestParam) => {
    acc = `${acc ? acc + '&' : ''}${current.key}=${current.value}`
    return acc
  }, '')
}
